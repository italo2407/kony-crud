define("flxRowPerson", function() {
    return function(controller) {
        var flxRowPerson = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxRowPerson",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0j2c69588d09149",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRowPerson.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "25%",
            "skin": "CopydefLabel0a07a67479c9743",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblState = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblState",
            "isVisible": true,
            "left": "78%",
            "skin": "CopydefLabel0c60a4416dff144",
            "text": "Off",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxIconPerson = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxIconPerson",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.00%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "14%",
            "zIndex": 1
        }, {}, {});
        flxIconPerson.setDefaultUnit(kony.flex.DP);
        var lblIconBackground = new kony.ui.Label({
            "centerX": "50.00%",
            "centerY": "50.00%",
            "height": "30dp",
            "id": "lblIconBackground",
            "isVisible": true,
            "skin": "CopydefLabel0bd36518d832446",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblFirstLetter = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblFirstLetter",
            "isVisible": true,
            "skin": "sknFirstLetter",
            "text": "P",
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
        flxIconPerson.add(lblIconBackground, lblFirstLetter);
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "18dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxBtnDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxBtnDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-11%",
            "skin": "slFbox",
            "top": "0%",
            "width": "10%",
            "zIndex": 3
        }, {}, {});
        flxBtnDelete.setDefaultUnit(kony.flex.DP);
        var btnDelete = new kony.ui.Button({
            "height": "100%",
            "id": "btnDelete",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_c2c8a44b1dd94ba2ba2121b2f00d9474,
            "skin": "CopydefBtnNormal0da0303679a5544",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgDelete = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "imgDelete",
            "isVisible": true,
            "skin": "slImage",
            "src": "minus.png",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBtnDelete.add(btnDelete, imgDelete);
        var btnDetail = new kony.ui.Button({
            "height": "60dp",
            "id": "btnDetail",
            "isVisible": true,
            "left": "9.99%",
            "skin": "CopydefBtnNormal0dba70d758b074a",
            "top": "0dp",
            "width": "90%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRowPerson.add(lblName, lblState, flxIconPerson, imgArrow, flxBtnDelete, btnDetail);
        return flxRowPerson;
    }
})