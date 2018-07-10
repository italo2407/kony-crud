define("frmPerson", function() {
    return function(controller) {
        function addWidgetsfrmPerson() {
            this.setDefaultUnit(kony.flex.DP);
            var flxAddContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAddContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "skin": "CopyslFbox0i5cb4f0c074149",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddContent.setDefaultUnit(kony.flex.DP);
            var btnCancel = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0g144845dc16340",
                "height": "6%",
                "id": "btnCancel",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_e360ec0e55e341f9bf1cee978bbfbb1a,
                "skin": "sknBtn",
                "text": "Cancel",
                "top": "0dp",
                "width": "78dp",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSave = new kony.ui.Button({
                "focusSkin": "sknBtnPressed",
                "height": "6%",
                "id": "btnSave",
                "isVisible": true,
                "onClick": controller.AS_Button_e3e57daa35544b63be058622cd471647,
                "right": "2%",
                "skin": "CopydefBtnNormal0dc79d963079640",
                "text": "Save",
                "top": "0dp",
                "width": "68dp",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFirstName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.50%",
                "id": "flxFirstName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c42cd21a69144f",
                "top": "6%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFirstName.setDefaultUnit(kony.flex.DP);
            var txtFirstName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "5%",
                "centerX": "50.03%",
                "focusSkin": "defTextBoxFocus",
                "height": "50%",
                "id": "txtFirstName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0fd560d9a41fe47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblFirstName = new kony.ui.Label({
                "id": "lblFirstName",
                "isVisible": true,
                "left": "5.00%",
                "skin": "CopydefLabel0d651c7d9999e4e",
                "text": "First Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBottomFirstName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBottomFirstName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0g260b5e778f34d",
                "width": "90%",
                "zIndex": 3
            }, {}, {});
            flxBottomFirstName.setDefaultUnit(kony.flex.DP);
            flxBottomFirstName.add();
            flxFirstName.add(txtFirstName, lblFirstName, flxBottomFirstName);
            var flxLastName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.50%",
                "id": "flxLastName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c42cd21a69144f",
                "top": "17%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLastName.setDefaultUnit(kony.flex.DP);
            var txtLastName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "5.00%",
                "centerX": "50.03%",
                "focusSkin": "defTextBoxFocus",
                "height": "50%",
                "id": "txtLastName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0fd560d9a41fe47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblLastName = new kony.ui.Label({
                "id": "lblLastName",
                "isVisible": true,
                "left": "5.00%",
                "skin": "CopydefLabel0d651c7d9999e4e",
                "text": "Last Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBottomLastName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBottomLastName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0g260b5e778f34d",
                "width": "90%",
                "zIndex": 3
            }, {}, {});
            flxBottomLastName.setDefaultUnit(kony.flex.DP);
            flxBottomLastName.add();
            flxLastName.add(txtLastName, lblLastName, flxBottomLastName);
            var flxAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.50%",
                "id": "flxAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c42cd21a69144f",
                "top": "28%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress.setDefaultUnit(kony.flex.DP);
            var txtAddress = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "5.00%",
                "centerX": "50.03%",
                "focusSkin": "defTextBoxFocus",
                "height": "50%",
                "id": "txtAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0fd560d9a41fe47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblAddress = new kony.ui.Label({
                "id": "lblAddress",
                "isVisible": true,
                "left": "5.00%",
                "skin": "CopydefLabel0d651c7d9999e4e",
                "text": "Address",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBottomAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBottomAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0g260b5e778f34d",
                "width": "90%",
                "zIndex": 3
            }, {}, {});
            flxBottomAddress.setDefaultUnit(kony.flex.DP);
            flxBottomAddress.add();
            flxAddress.add(txtAddress, lblAddress, flxBottomAddress);
            var flxPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.50%",
                "id": "flxPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c42cd21a69144f",
                "top": "39%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPhoneNumber.setDefaultUnit(kony.flex.DP);
            var txtPhoneNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "5.00%",
                "centerX": "50.03%",
                "focusSkin": "defTextBoxFocus",
                "height": "50%",
                "id": "txtPhoneNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0fd560d9a41fe47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblPhoneNumber = new kony.ui.Label({
                "id": "lblPhoneNumber",
                "isVisible": true,
                "left": "4.99%",
                "skin": "CopydefLabel0d651c7d9999e4e",
                "text": "Phone Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30.00%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBottomPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBottomPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0g260b5e778f34d",
                "width": "90%",
                "zIndex": 3
            }, {}, {});
            flxBottomPhoneNumber.setDefaultUnit(kony.flex.DP);
            flxBottomPhoneNumber.add();
            flxPhoneNumber.add(txtPhoneNumber, lblPhoneNumber, flxBottomPhoneNumber);
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.50%",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c42cd21a69144f",
                "top": "50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var txtEmail = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "5.00%",
                "centerX": "50.03%",
                "focusSkin": "defTextBoxFocus",
                "height": "50%",
                "id": "txtEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0fd560d9a41fe47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblEmail = new kony.ui.Label({
                "id": "lblEmail",
                "isVisible": true,
                "left": "4.99%",
                "skin": "CopydefLabel0d651c7d9999e4e",
                "text": "Email",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30.00%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBottomEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBottomEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0g260b5e778f34d",
                "width": "90%",
                "zIndex": 3
            }, {}, {});
            flxBottomEmail.setDefaultUnit(kony.flex.DP);
            flxBottomEmail.add();
            flxEmail.add(txtEmail, lblEmail, flxBottomEmail);
            var flxActive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.50%",
                "id": "flxActive",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c42cd21a69144f",
                "top": "61%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActive.setDefaultUnit(kony.flex.DP);
            var lblActive = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActive",
                "isVisible": true,
                "left": "4.99%",
                "skin": "CopydefLabel0d651c7d9999e4e",
                "text": "Active",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSwitch = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "48dp",
                "id": "imgSwitch",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "on.png",
                "width": "48dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSwitch = new kony.ui.Button({
                "centerY": "50.00%",
                "height": "48dp",
                "id": "btnSwitch",
                "isVisible": true,
                "onClick": controller.AS_Button_ef68dab365aa4be0ab71b82d6a16a840,
                "right": "5%",
                "skin": "CopydefBtnNormal0h300ce46401643",
                "width": "48dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxActive.add(lblActive, imgSwitch, btnSwitch);
            var mainBar = new com.demo.mainBar({
                "clipBounds": true,
                "height": "100%",
                "id": "mainBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": 0,
                "width": "100%"
            }, {}, {});
            mainBar.Label0fb6e8fcd09bc4d.left = null;
            mainBar.Label0fb6e8fcd09bc4d.right = null;
            mainBar.Label0fb6e8fcd09bc4d.text = "Add Person";
            mainBar.Label0fb6e8fcd09bc4d.top = null;
            mainBar.left = 0;
            mainBar.top = 0;
            flxAddContent.add(btnCancel, btnSave, flxFirstName, flxLastName, flxAddress, flxPhoneNumber, flxEmail, flxActive, mainBar);
            this.add(flxAddContent);
        };
        return [{
            "addWidgets": addWidgetsfrmPerson,
            "enabledForIdleTimeout": false,
            "id": "frmPerson",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d6edae80583f4dd79c9fc6297bc9e74a,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "inTransitionConfig": {
                "formAnimation": 3
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});