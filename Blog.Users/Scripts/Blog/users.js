var dfUrl = "/Account/TestUser";

$(document).ready(function () {

});
var Ctrl = {
    k: 1,
    data: {},
    fun: {
        loadGrid: function () {
            var d = {
                ctrID: "data-table-users"
                , url: { url: dfUrl }
                , refix: { key: 2, id: "Id" }
                , colDefs: [
                    { "sClass": "text-center", "aTargets": [1] },
                    { "sClass": "text-center", "aTargets": [2], "sWidth": "140px" },
                    { "sClass": "text-center", "aTargets": [3], "sWidth": "140px" },
                    { "sClass": "text-center", "aTargets": [4], "sWidth": "140px" }
                ]
                , columns: [
                      { "sTitle": "Id", "mData": "Id" },
                      { "sTitle": "Username", "mData": "UserName" },
                      { "sTitle": "Email", "mData": "Email" },
                      { "sTitle": "Phone", "mData": "PhoneNumber" }
                ]
            }

            return d;
        }
    },
    event: {}
};
function trashAction(data) {
    alert(data.data);
}
function editAction(data) {
    alert(data.data);
}