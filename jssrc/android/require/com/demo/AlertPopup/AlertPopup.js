define(function() {
    return function(controller) {
        var AlertPopup = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "AlertPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2dp",
            "skin": "CopyslFbox0be49e58b009946",
            "top": "-2dp",
            "width": "100%"
        }, {}, {});
        AlertPopup.setDefaultUnit(kony.flex.DP);
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
            "zIndex": 1
        }, {}, {});
        flxContentButton.setDefaultUnit(kony.flex.DP);
        var btn1 = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "40%",
            "id": "btn1",
            "isVisible": true,
            "onClick": controller.AS_onFirstBtnClick_dbe83a807b8f45a0b17fdbb4419a772e,
            "skin": "CopydefBtnNormal0j8415ac2a69943",
            "text": "Button",
            "top": "0%",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btn2 = new kony.ui.Button({
            "bottom": "15%",
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "40%",
            "id": "btn2",
            "isVisible": true,
            "onClick": controller.AS_Button_c8ecf8989be24ddeb90b3f036c8741eb,
            "skin": "CopydefBtnNormal0b21495e7977944",
            "text": "Button",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContentButton.add(btn1, btn2);
        AlertPopup.add(flxContentButton);
        return AlertPopup;
    }
})