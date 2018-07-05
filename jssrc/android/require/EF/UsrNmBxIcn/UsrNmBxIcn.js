define(function() {
    return function(controller) {
        var UsrNmBxIcn = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "67dp",
            "id": "UsrNmBxIcn",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0c347c85e144943",
            "top": "10dp",
            "width": "100%"
        }, {}, {});
        UsrNmBxIcn.setDefaultUnit(kony.flex.DP);
        var frmUserName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "clipBounds": true,
            "focusSkin": "skUNSFocus",
            "id": "frmUserName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "right": "10dp",
            "skin": "skUNSNormal",
            "top": "5dp",
            "zIndex": 1
        }, {}, {});
        frmUserName.setDefaultUnit(kony.flex.DP);
        var lblContact = new kony.ui.Label({
            "bottom": 0,
            "height": "100%",
            "id": "lblContact",
            "isVisible": true,
            "left": 0,
            "skin": "CopylblUser012800ac85f164f",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "55dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var txtUserName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopySKUNIRF08ed591283a8243",
            "height": "100%",
            "id": "txtUserName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "55dp",
            "placeholder": "Username",
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "CopyskUNIRN0413c3ec6bdaf47",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "onBeginEditing": controller.AS_TextField_fa1167738c3c4eb8bd25de15578cadc0,
            "onEndEditing": controller.AS_TextField_f90aa8e80be74428ab40a5c019e92324,
            "placeholderSkin": "CopySKUNIRPL01319472f2ce943",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        frmUserName.add(lblContact, txtUserName);
        UsrNmBxIcn.add(frmUserName);
        return UsrNmBxIcn;
    }
})