/*Config*/
var customConfig = {
    dfUrlAccount: "/Account/"
}
var AjaxConfig = {
    timeout: 60 * 60000
}
var UC = [];
$(document).ready(function () {

    $('.data-table-category').dataTable({
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",
        "sDom": '<""l>t<"F"fp>'
    });

    $('input[type=checkbox],input[type=radio],input[type=file]').uniform();

    $('select').select2();

    $("span.icon input:checkbox, th input:checkbox").click(function () {
        var checkedStatus = this.checked;
        var checkbox = $(this).parents('.widget-box').find('tr td:first-child input:checkbox');
        checkbox.each(function () {
            this.checked = checkedStatus;
            if (checkedStatus == this.checked) {
                $(this).closest('.checker > span').removeClass('checked');
            }
            if (this.checked) {
                $(this).closest('.checker > span').addClass('checked');
            }
        });
    });
});

function oLanguage() {
    return {
        "oPaginate": {
            "sFirst": "<<",
            "sLast": ">>",
            "sNext": ">",
            "sPrevious": "<",
        },
        "sEmptyTable": "Không có dữ liệu",
        "sLengthMenu": "Hiển thị _MENU_ ",
        "sZeroRecords": "Không tìm thấy dữ liệu",
        "sSearch": "Tìm kiếm:",
        "sLoadingRecords": "Đang tải...",
        "sProcessing": "Đang xử lý...",
        "sInfoEmpty": "Không có dữ liệu để hiển thị"
    };
}

function twoAction(data) {
    var html = '';
    html += '<button onclick="editAction({data: \'' + data + '\'})" class="btn btn-warning"><span class="icon"><i class="icon-edit"></i></span></button>';
    html += '<button onclick="trashAction({data: \'' + data + '\'})" class="btn btn-danger"><span class="icon"><i class="icon-trash"></i></span></button>';
    html += '';
    return html;
}
function threeAction(data) {
    var html = '';
    html += '<button onclick="detailsAction({data: \'' + data + '\'})" class="btn btn-success"><span class="icon"><i class="icon-list-alt"></i></span></button>';
    html += '<button onclick="editAction({data: \'' + data + '\'})" class="btn btn-warning"><span class="icon"><i class="icon-edit"></i></span></button>';
    html += '<button onclick="trashAction({data: \'' + data + '\'})" class="btn btn-danger"><span class="icon"><i class="icon-trash"></i></span></button>';
    html += '';
    return html;
}

function createGridDataTable(allData) {
    var ctrID = allData.ctrID;
    var ctrID2 = "#" + allData.ctrID;
    var bJQueryUI = allData.jQueryUI || true;
    var sPaginationType = allData.page || "full_numbers";
    var sDom = allData.dom || '<""l>t<"F"fp>'
    var url2 = allData.url;
    var spName = url2.spName || "";
    var url = url2.url || "";
    var filter = allData.filter || [];
    //column
    var colDefs = allData.colDefs || [];
    var columns = allData.columns;
    //Refix Data 
    var refix = allData.refix;
    var rkey = refix.key || 0;
    var rid = refix.id || "";
    if (rkey > 0) {
        columns.pop({ "sTitle": "STT", "mData": "Stt" });
        columns.push({ "sTitle": "Actions", "mData": "Actions" });
        if (rkey == 1) {
            colDefs.push({ "sClass": "text-center", "aTargets": [0], "sWidth": "30px" })
            colDefs.push({ "sClass": "text-center", "aTargets": [columns.length - 1], "sWidth": "75px" })
        } else if (rkey == 2) {
            colDefs.push({ "sClass": "text-center", "aTargets": [0], "sWidth": "30px" })
            colDefs.push({ "sClass": "text-center", "aTargets": [columns.length - 1], "sWidth": "120px" })
        }
    }

    var dataTable = $(ctrID2).dataTable({
        "bJQueryUI": bJQueryUI,
        "sPaginationType": sPaginationType,
        "sDom": sDom,
        "oLanguage": oLanguage(),
        "aoColumnDefs": colDefs,
        "aoColumns": columns,
        "aaData": []//default null
    });

    getDataObject({
        url: url,
        filter: filter,
        onSuccess: function (data) {
            var da = [];
            da = refixData({ data: data, key: rkey, id: rid });
            dataTable.fnAddData(da)
        },
        onError: function (x, e) {
            alert(getError({ x: x, e: e }));
        }
    });
    UC[ctrID] = dataTable;
}

function refixData(allData) {
    var d = [];
    var data = allData.data;
    var key = allData.key || 0;
    var id = allData.id;
    if (data == null)
        return;
    switch (key) {
        case 1:
            for (var i = 0; i < data.length; i++) {
                data[i].Stt = i + 1;
                data[i].Actions = twoAction(data[i][id]);
                d[i] = data[i];
            }
            break;
        case 2:
            for (var i = 0; i < data.length; i++) {
                d[i] = data[i].Stt = i + 1;
                d[i] = data[i].Actions = threeAction(data[i][id]);
                d[i] = data[i];
            }
            break;
        default:
            for (var i = 0; i < data.length; i++) {
                data[i].Stt = i + 1;
                d[i] = data[i];
            }
            break;
    }
    return d;
}

function getDataObject(allData) {
    var t = AjaxConfig;
    var onSuccess = allData.onSuccess;
    var onError = allData.onError;
    var url2 = allData.url;
    var filter = allData.filter;
    var urlType = jQuery.type(url2);
    if (urlType == "object") {
        var jsonFilter = ConvertDataToJsonString({ data: filter });
        filter = deepCopy({ data: url2 });
        delete filter.url;
        filter.jsonFilter = jsonFilter;
        url2 = url2.url;
    }
    var a = $.ajax({
        type: allData.type || "post"
        , headers: allData.headers
        , url: url2
        , data: filter || {}
        , ContentType: "application/json;charset=utf-8"
        , datatype: allData.datatype || "json"
        , traditional: true
        , timeout: t.timeout
        , success: function (data) {
            a.abort();
            if (onSuccess != null) { onSuccess(data); }
        }
        , error: function (x, e) {
            alert(getError({ x: x, e: e }));
            a.abort();
            if (onError != null) { onError(x, e); }
        }
    });
}

function getError(allData) {
    var x = allData.x;
    var e = allData.e;

    var responseText = JSON.parse(x.responseText);
    var d = {
        title: sms.error
        , message: "<b>Status</b>: " + x.status + "</br><b>Message</b>: " + responseText.message
    };

    return d;
}

function ConvertDataToJsonString(allData) {
    var data = allData.data;
    if (data == null || data.length == 0) { return ""; }
    var jsonString = JSON.stringify(data);
    jsonString = htmlEncode({ htmlText: jsonString });

    return jsonString;
}

function ConvertDataToXmlString(allData) {
    var data = allData.data;
    var IsEncode = true;
    if (allData.IsEncode != null) { IsEncode = allData.IsEncode; }

    if (data == null || data.length == 0) { return ""; }
    var xmlString = "";
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        xmlString += "<row";
        for (var key in item) {
            //var ot = "<" + key + ">";
            //var ct = "</" + key + ">";
            //xmlString += ot + item[key] + ct;
            xmlString += " " + key + "=\"" + item[key] + "\"";
        }
        xmlString += "/>";
    }
    if (IsEncode) {
        xmlString = htmlEncode({ htmlText: xmlString });
    }

    return xmlString;
}

function htmlEncode(allData) {
    var htmlText = allData.htmlText;
    var htmlReturn = $('<div/>').text(htmlText).html();
    return htmlReturn;
}

function htmlDecode(allData) {
    var htmlText = allData.htmlText;
    var htmlReturn = $('<div/>').html(htmlText).text();
    return htmlReturn;
}

function deepCopy(allData) {
    var data = allData.data;
    if (data == null) { return []; }
    var jsonString = JSON.stringify(data);
    var newData = JSON.parse(jsonString);

    return newData;
}