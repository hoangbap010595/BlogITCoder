var dfUrl = "/Account/TestRoles";
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
                ctrID: "data-table-rules"
                , url: { url: dfUrl }
                , refix: { key: 1, id: "Id" }
                , colDefs: [
                   { "sName": "Stt", "sClass": "text-center", "aTargets": [0], "sWidth": "30px" },
                    { "sClass": "text-center", "aTargets": [3], "sWidth": "75px" }
                ]
                , columns: [
                       { "sName": "Stt", "sTitle": "STT", "mData": "Stt" },
                         { "sTitle": "ID", "mData": "Id" },
                         { "sTitle": "Name", "mData": "Name" },
                         { "sTitle": "Actions", "mData": "Actions" }
                ]
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



