define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onBeginEditing defined for txtUserName **/
    AS_TextField_c4d6e85ad2c046f9b76b7fd7e9a68845: function AS_TextField_c4d6e85ad2c046f9b76b7fd7e9a68845(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmUserName.skin = "skUNSFocus";
            }, null);
        } else {
            (function() {
                self.view.frmUserName.skin = "skUNSFocus";
            })();
        }
    },
    /** onEndEditing defined for txtUserName **/
    AS_TextField_fc21f747301e4ab18de42c1c1069367c: function AS_TextField_fc21f747301e4ab18de42c1c1069367c(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmUserName.skin = "skUNSNormal";
            }, null);
        } else {
            (function() {
                self.view.frmUserName.skin = "skUNSNormal";
            })();
        }
    },
    /** onBeginEditing defined for txtUserName **/
    AS_TextField_fa1167738c3c4eb8bd25de15578cadc0: function AS_TextField_fa1167738c3c4eb8bd25de15578cadc0(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmUserName.skin = "skUNSFocus";
            }, null);
        } else {
            (function() {
                self.view.frmUserName.skin = "skUNSFocus";
            })();
        }
    },
    /** onEndEditing defined for txtUserName **/
    AS_TextField_f90aa8e80be74428ab40a5c019e92324: function AS_TextField_f90aa8e80be74428ab40a5c019e92324(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmUserName.skin = "skUNSNormal";
            }, null);
        } else {
            (function() {
                self.view.frmUserName.skin = "skUNSNormal";
            })();
        }
    }
});