define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCancel **/
    AS_Button_e360ec0e55e341f9bf1cee978bbfbb1a: function AS_Button_e360ec0e55e341f9bf1cee978bbfbb1a(eventobject) {
        var self = this;
        return goToHome.call(this);
    },
    /** onClick defined for btnSave **/
    AS_Button_e3e57daa35544b63be058622cd471647: function AS_Button_e3e57daa35544b63be058622cd471647(eventobject) {
        var self = this;
        return self.createPerson.call(this);
    },
    /** preShow defined for frmPerson **/
    AS_Form_d6edae80583f4dd79c9fc6297bc9e74a: function AS_Form_d6edae80583f4dd79c9fc6297bc9e74a(eventobject) {
        var self = this;
        return self.clearFields.call(this);
    }
});