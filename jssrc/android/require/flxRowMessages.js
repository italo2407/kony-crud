define("flxRowMessages", function() {
    return function(controller) {
        var flxRowMessages = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "11.40%",
            "id": "flxRowMessages",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "konymplistbackground"
        }, {}, {});
        flxRowMessages.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90px",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "skin": "konymplistImageRound",
            "width": "90px",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "skin": "slImage",
            "src": "konymplistuserimage3.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgUser);
        var lblHeader = new kony.ui.Label({
            "id": "lblHeader",
            "isVisible": true,
            "left": "17.50%",
            "skin": "konymplistHeading",
            "text": "Wayne Stanley",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "24%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSubHeader = new kony.ui.Label({
            "height": "20%",
            "id": "lblSubHeader",
            "isVisible": true,
            "left": "17.50%",
            "skin": "konymplistsubheader",
            "text": "I am back, after few days",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "55%",
            "width": "64%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLastSeen = new kony.ui.Label({
            "id": "lblLastSeen",
            "isVisible": true,
            "right": "4%",
            "skin": "konymplistlocation",
            "text": "2 days ago",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxUserSmall = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20%",
            "clipBounds": true,
            "height": "40px",
            "id": "flxUserSmall",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "4%",
            "skin": "slFbox",
            "width": "40px",
            "zIndex": 1
        }, {}, {});
        flxUserSmall.setDefaultUnit(kony.flex.DP);
        var imgUserSmall = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgUserSmall",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
            "src": "konymplistuserimage2.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUserSmall.add(imgUserSmall);
        var imgActive = new kony.ui.Image2({
            "height": "30px",
            "id": "imgActive",
            "isVisible": true,
            "left": "10%",
            "skin": "slImage",
            "src": "konympliststatus.png",
            "top": "60%",
            "width": "30px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRowMessages.add(flxImage, lblHeader, lblSubHeader, lblLastSeen, flxUserSmall, imgActive);
        return flxRowMessages;
    }
})