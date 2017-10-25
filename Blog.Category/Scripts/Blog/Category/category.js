var dfUrl = "/PartialView/LoadData";

$(document).ready(function () {
    var d = R.fun.loadGrid();
    createGridDataTable(d);
});
var R = {
    k: 1,
    data: {},
    fun: {
        loadGrid: function () {
            var d = {
                ctrID: "data-table-category"
                , url: { url: dfUrl, spName: "Category_Get" }
                , refix: { key: 1, id: "Id" }
                , colDefs: [
                    { "sClass": "text-center", "aTargets": [0], "sWidth": "30px" }
                    , { "aTargets": [1], "bVisible": false }
                    , { "sClass": "text-left", "aTargets": [2] }
                    , { "sClass": "col-bit text-center", "aTargets": [4] }
                    , {
                        "sClass": "col-date", "aTargets": [5]
                    }
                    , { "sClass": "text-center", "aTargets": [6], "sWidth": "75px" }
                ]
                , columns: [
                      { "sTitle": "STT", "mData": "Stt" }
                      , { "sTitle": "Id", "mData": "Id" }
                      , { "sTitle": "Name", "mData": "Name" }
                      , { "sTitle": "Name Clean", "mData": "NameClean" }
                      , { "sTitle": "Enable", "mData": "Enable" }
                      , { "sTitle": "Date Create", "mData": "DateCreate"}
                      , { "sTitle": "Actions", "mData": "Actions" }
                ]
                , fnFooterCallback: function (nFoot, aData, iStart, iEnd, aiDisplay) {
                    //nFoot.getElementsByTagName('th')[0].innerHTML = "Starting index is " + iStart;
                }
                ,fnRowCallback: function (nRow, aData, iDisplayIndex) {
                    if (aData.Enable == true) {
                        $('td:eq(3)', nRow).html('<b>Ok</b>');
                    } else
                        $('td:eq(3)', nRow).html('');
                    var jsonDate = aData.DateCreate;
                    $('td:eq(4)', nRow).text(parseDate(jsonDate));
                    return nRow;
                }
            }
            return d;
        }
    },
    events: {
        trashAction: function (data) {
            alert(data.data);
        },
        editAction: function (data) {
            alert(data.data);
        }
    }
};
