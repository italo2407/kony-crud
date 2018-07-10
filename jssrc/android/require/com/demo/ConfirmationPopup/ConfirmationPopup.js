define(function() {
    return function(controller) {
        var ConfirmationPopup = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ConfirmationPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0bb04696af80142",
            "top": "0dp",
            "width": "100%",
            "zIndex": 9999
        }, {}, {});
        ConfirmationPopup.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0cb50f0f5a22a4f",
            "top": "0dp",
            "width": "100%",
            "zIndex": 9999
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxContentButton = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "18%",
            "id": "flxContentButton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 9999
        }, {}, {});
        flxContentButton.setDefaultUnit(kony.flex.DP);
        var btnDelete = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "40%",
            "id": "btnDelete",
            "isVisible": true,
            "skin": "CopydefBtnNormal0j8415ac2a69943",
            "text": "Button",
            "top": "0%",
            "width": "95%",
            "zIndex": 9999
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnCancel = new kony.ui.Button({
            "bottom": "15%",
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "40%",
            "id": "btnCancel",
            "isVisible": true,
            "onClick": controller.AS_Button_bc7b0adad1254f8d8973df504412a1e2,
            "skin": "CopydefBtnNormal0b21495e7977944",
            "text": "Cancel",
            "width": "95%",
            "zIndex": 9999
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContentButton.add(btnDelete, btnCancel);
        flxContent.add(flxContentButton);
        ConfirmationPopup.add(flxContent);
        return ConfirmationPopup;
    }
})