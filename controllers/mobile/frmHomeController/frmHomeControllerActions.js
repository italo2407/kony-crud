define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for fxlMenuSync **/
    AS_FlexContainer_b8142dca12b34e5c94774766a26cb08a: function AS_FlexContainer_b8142dca12b34e5c94774766a26cb08a(eventobject) {
        var self = this;
        return performSyncOnPersons.call(this);
    },
    /** onClick defined for flxMenuExport **/
    AS_FlexContainer_a9d5932f1e1c4ef8a51874a6cef8bcdb: function AS_FlexContainer_a9d5932f1e1c4ef8a51874a6cef8bcdb(eventobject) {
        var self = this;
        alert(this.view.segListPerson.widgetDataMap());
    },
    /** onClick defined for btnEdit **/
    AS_Button_jb06b0eda8704d93b97df9ea4e676b09: function AS_Button_jb06b0eda8704d93b97df9ea4e676b09(eventobject) {
        var self = this;
        return self.onDelete.call(this);
    },
    /** onClick defined for btnDone **/
    AS_Button_j614d52bbff844e4bdd50b44dbbbcf9b: function AS_Button_j614d52bbff844e4bdd50b44dbbbcf9b(eventobject) {
        var self = this;
        return self.onDone.call(this);
    },
    /** onClick defined for btnAdd **/
    AS_Button_b83a882c51cb49fab8ebbf65eff6631a: function AS_Button_b83a882c51cb49fab8ebbf65eff6631a(eventobject) {
        var self = this;
        return self.goToAddForm.call(this);
    },
    /** onRowClick defined for segListPerson **/
    AS_Segment_b195d0ba68724857bef21681b9c75b19: function AS_Segment_b195d0ba68724857bef21681b9c75b19(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onRowClick.call(this, eventobject, sectionNumber, rowNumber, eventobject);
    },
    /** preShow defined for frmHome **/
    AS_Form_d2dcef19e8554a4e8efc7445cf112f1b: function AS_Form_d2dcef19e8554a4e8efc7445cf112f1b(eventobject) {
        var self = this;
        return self.getPerson.call(this);
    },
    /** onDone defined for txtSearch **/
    AS_TextField_c4ddf71356d74c628eeb75cf87f68cc7: function AS_TextField_c4ddf71356d74c628eeb75cf87f68cc7(eventobject, changedtext) {
        var self = this;
        return self.onSearch.call(this);
    }
});