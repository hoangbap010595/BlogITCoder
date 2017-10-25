
var dfUrl = "/Account/TestRoles";
var dataTB;
$(document).ready(function () {
    //Rules
    dataTB = $('.data-table-rules').dataTable({
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",
        "sDom": '<""l>t<"F"fp>',
        "oLanguage": oLanguage(),
        "aoColumnDefs": [
		      { "sName": "Stt", "sClass": "text-center", "aTargets": [0], "sWidth": "30px" },
              { "sClass": "text-center", "aTargets": [3], "sWidth": "75px" }
        ],
        "aoColumns": [
         { "sName": "Stt", "sTitle": "STT", "mData": "Stt" },
         { "sTitle": "ID", "mData": "Id" },
         { "sTitle": "Name", "mData": "Name" },
         { "sTitle": "Actions", "mData": "Actions" }
        ],
        "aaData": []
    });
    UpdateData();
});

function trashAction(data) {
    alert(data.data);
}
function editAction(data) {
    alert(data.data);
}

function UpdateData() {
    getDataObject({
        url: dfUrl,
        onSuccess: function (data) {
            var da = [];
            da = refixData({ data: data, key: 1, id: "Id" });
            dataTB.fnAddData(da)
        },
        onError: function (x,e) {
            alert(getError({ x: x, e: e }));
        }
    });
}