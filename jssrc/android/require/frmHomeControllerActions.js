define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSync **/
    AS_Button_ec5bab66cc924ee4989021328d081af6: function AS_Button_ec5bab66cc924ee4989021328d081af6(eventobject) {
        var self = this;
        SyncPromiseManually();
    },
    /** onClick defined for flxMenuExport **/
    AS_FlexContainer_a9d5932f1e1c4ef8a51874a6cef8bcdb: function AS_FlexContainer_a9d5932f1e1c4ef8a51874a6cef8bcdb(eventobject) {
        var self = this;
        alert(this.view.segListPerson.widgetDataMap());
    },
    /** onClick defined for btnEdit **/
    AS_Button_jb06b0eda8704d93b97df9ea4e676b09: function AS_Button_jb06b0eda8704d93b97df9ea4e676b09(eventobject) {
        var self = this;
        this.onDelete();
    },
    /** onClick defined for btnDone **/
    AS_Button_j614d52bbff844e4bdd50b44dbbbcf9b: function AS_Button_j614d52bbff844e4bdd50b44dbbbcf9b(eventobject) {
        var self = this;
        this.onDone();
    },
    /** onClick defined for btnAdd **/
    AS_Button_b83a882c51cb49fab8ebbf65eff6631a: function AS_Button_b83a882c51cb49fab8ebbf65eff6631a(eventobject) {
        var self = this;
        this.goToAddForm();
    },
    /** onDone defined for txtSearch **/
    AS_TextField_c4ddf71356d74c628eeb75cf87f68cc7: function AS_TextField_c4ddf71356d74c628eeb75cf87f68cc7(eventobject, changedtext) {
        var self = this;
        this.onSearch();
    },
    /** onClick defined for btnDelete **/
    AS_Button_i75bc9a08e67472ca8696d1baa2306cc: function AS_Button_i75bc9a08e67472ca8696d1baa2306cc(eventobject) {
        var self = this;
        this.onDeleteItem();
    },
    /** onClick defined for btnCancel **/
    AS_Button_c54be1405bb140abb13ab3e68fe4f436: function AS_Button_c54be1405bb140abb13ab3e68fe4f436(eventobject) {
        var self = this;
        this.onCancelConfirmationPopup();
    },
    /** preShow defined for frmHome **/
    AS_Form_f5937d2fc9b848768b7abe64ab4f2f07: function AS_Form_f5937d2fc9b848768b7abe64ab4f2f07(eventobject) {
        var self = this;
        this.initForm();
    }
});