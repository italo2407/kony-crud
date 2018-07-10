define({
    AS_AppEvents_cb7a88e76a5b4a8c94beb85f2ef57f5d: function AS_AppEvents_cb7a88e76a5b4a8c94beb85f2ef57f5d(eventobject) {
        var self = this;
        return setupSync.call(this);
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.demo.AlertPopup", "AlertPopup", "AlertPopupController");
        kony.application.registerMaster({
            "namespace": "com.demo",
            "classname": "AlertPopup",
            "name": "com.demo.AlertPopup"
        });
        kony.mvc.registry.add("com.demo.ConfirmationPopup", "ConfirmationPopup", "ConfirmationPopupController");
        kony.application.registerMaster({
            "namespace": "com.demo",
            "classname": "ConfirmationPopup",
            "name": "com.demo.ConfirmationPopup"
        });
        kony.mvc.registry.add("com.demo.mainBar", "mainBar", "mainBarController");
        kony.application.registerMaster({
            "namespace": "com.demo",
            "classname": "mainBar",
            "name": "com.demo.mainBar"
        });
        kony.mvc.registry.add("com.konymp.login", "login", "loginController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "login",
            "name": "com.konymp.login"
        });
        kony.mvc.registry.add("EF.UsrNmBxIcn", "UsrNmBxIcn", "UsrNmBxIcnController");
        kony.application.registerMaster({
            "namespace": "EF",
            "classname": "UsrNmBxIcn",
            "name": "EF.UsrNmBxIcn"
        });
        kony.mvc.registry.add("flxRowMessages", "flxRowMessages", "flxRowMessagesController");
        kony.mvc.registry.add("flxRowPerson", "flxRowPerson", "flxRowPersonController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("frmAddPerson", "frmAddPerson", "frmAddPersonController");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmPerson", "frmPerson", "frmPersonController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_cb7a88e76a5b4a8c94beb85f2ef57f5d(eventObj);
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});