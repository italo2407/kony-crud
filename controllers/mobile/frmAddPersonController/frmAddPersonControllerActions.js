define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCancel **/
    AS_Button_e77cf06861794b279db52ed10e8e4e6f: function AS_Button_e77cf06861794b279db52ed10e8e4e6f(eventobject) {
        var self = this;
        return goToHome.call(this);
    },
    /** onClick defined for btnSave **/
    AS_Button_d7317418607c4ade9849ee10cdca5560: function AS_Button_d7317418607c4ade9849ee10cdca5560(eventobject) {
        var self = this;
        return self.onUpdate.call(this);
    },
    /** onSlide defined for switchActive **/
    AS_Switch_cfbe49d4d06c4da6b8e059124f3520f9: function AS_Switch_cfbe49d4d06c4da6b8e059124f3520f9(eventobject) {
        var self = this;
        alert(this.view.switchActive.selectedIndex);
    },
    /** preShow defined for frmAddPerson **/
    AS_Form_c808e2a763254c22b53d80532b5b520b: function AS_Form_c808e2a763254c22b53d80532b5b520b(eventobject) {
        var self = this;
        return self.frmAddPersonInit.call(this);
    }
});