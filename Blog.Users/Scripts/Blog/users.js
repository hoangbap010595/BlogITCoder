var dfUrl = "/Account/TestUser";

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
                ctrID: "data-table-users"
                , url: { url: dfUrl }
                , refix: { key: 2, id: "Id" }
                , colDefs: [
                    { "sClass": "text-center", "aTargets": [0], "sWidth": "30px" }
                    ,{ "aTargets": [1], "bVisible": false }
                    ,{ "sClass": "text-center", "aTargets": [4], "sWidth": "80px" }
                    ,{ "sClass": "text-left", "aTargets": [5], "sWidth": "140px" }
                    ,{ "sClass": "text-center", "aTargets": [6], "sWidth": "80px" }
                    ,{ "sClass": "text-center", "aTargets": [7], "sWidth": "120px" }
                ]
                , columns: [
                      { "sTitle": "STT", "mData": "Stt" },
                      { "sTitle": "Id", "mData": "Id" },
                      { "sTitle": "Username", "mData": "UserName" },
                      { "sTitle": "Email", "mData": "Email" },
                      { "sTitle": "EmailActive", "mData": "EmailConfirmed" },
                      { "sTitle": "Phone", "mData": "PhoneNumber" },
                      { "sTitle": "PhoneActive", "mData": "PhoneNumberConfirmed" },
                      { "sTitle": "Actions", "mData": "Actions" }
                ]
                , fnRowCallback: function (nRow, aData, iDisplayIndex) {
                    console.log(aData);
                    if (aData.EmailConfirmed == true) {
                        $('td:eq(3)', nRow).html('<b>Ok</b>');
                    }else 
                        $('td:eq(3)', nRow).html('');
                    if (aData.PhoneNumberConfirmed == true) {
                        $('td:eq(5)', nRow).html('<b>Ok</b>');
                    } else
                        $('td:eq(5)', nRow).html('');
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
        },
        detailsAction: function (data) {
            alert(data.data);
        }
    }
};


