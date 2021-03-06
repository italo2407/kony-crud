define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHomeContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHomeContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0he415251bad44a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHomeContent.setDefaultUnit(kony.flex.DP);
            var mainBar = new com.demo.mainBar({
                "clipBounds": true,
                "height": "100%",
                "id": "mainBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            mainBar.flxHeader.left = "0dp";
            mainBar.flxHeader.top = "0dp";
            mainBar.flxHeader.layoutType = kony.flex.FLOW_VERTICAL;
            mainBar.left = "0dp";
            mainBar.top = "0dp";
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-0.08%",
                "clipBounds": true,
                "height": "9.21%",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknMainHeader",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var flxMenuPersons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxMenuPersons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxMenuPersons.setDefaultUnit(kony.flex.DP);
            var iconPerson = new kony.ui.Label({
                "centerX": "50%",
                "id": "iconPerson",
                "isVisible": true,
                "skin": "CopyslFontAwesomeIcon0ac5e14b09acc4a",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMenuPersons = new kony.ui.Label({
                "bottom": "0%",
                "centerX": "50.00%",
                "id": "lblMenuPersons",
                "isVisible": true,
                "skin": "sknlblActive",
                "text": "Persons",
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
            flxMenuPersons.add(iconPerson, lblMenuPersons);
            var fxlMenuSync = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49.94%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "45dp",
                "id": "fxlMenuSync",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            fxlMenuSync.setDefaultUnit(kony.flex.DP);
            var lblMenuSync = new kony.ui.Label({
                "bottom": "0%",
                "centerX": "50.00%",
                "id": "lblMenuSync",
                "isVisible": true,
                "skin": "sknlblInactive",
                "text": "Sync",
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
            var iconSync = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "iconSync",
                "isVisible": true,
                "skin": "slFontAwesomeIcon",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0.00%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnSync = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0ede632b6afdf4c",
                "height": "45dp",
                "id": "btnSync",
                "isVisible": true,
                "left": 0,
                "onClick": controller.AS_Button_ec5bab66cc924ee4989021328d081af6,
                "skin": "CopydefBtnNormal0i1c4598088034f",
                "top": 0,
                "width": "45dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            fxlMenuSync.add(lblMenuSync, iconSync, btnSync);
            var flxMenuExport = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxMenuExport",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_a9d5932f1e1c4ef8a51874a6cef8bcdb,
                "right": "10%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxMenuExport.setDefaultUnit(kony.flex.DP);
            var lblMenuExport = new kony.ui.Label({
                "bottom": "0%",
                "centerX": "50.00%",
                "id": "lblMenuExport",
                "isVisible": true,
                "skin": "sknlblInactive",
                "text": "Export",
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
            var iconExport = new kony.ui.Label({
                "centerX": "50%",
                "id": "iconExport",
                "isVisible": true,
                "skin": "slFontAwesomeIcon",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMenuExport.add(lblMenuExport, iconExport);
            flxFooter.add(flxMenuPersons, fxlMenuSync, flxMenuExport);
            var btnEdit = new kony.ui.Button({
                "focusSkin": "sknBtnPressed",
                "height": "6%",
                "id": "btnEdit",
                "isVisible": true,
                "left": "13dp",
                "onClick": controller.AS_Button_jb06b0eda8704d93b97df9ea4e676b09,
                "skin": "sknBtn",
                "text": "Delete",
                "top": "0dp",
                "width": "78dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDone = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "6%",
                "id": "btnDone",
                "isVisible": false,
                "left": "13dp",
                "onClick": controller.AS_Button_j614d52bbff844e4bdd50b44dbbbcf9b,
                "skin": "sknBtn",
                "text": "Done",
                "top": "0dp",
                "width": "78dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnAdd = new kony.ui.Button({
                "focusSkin": "sknBtnPressed",
                "height": "6%",
                "id": "btnAdd",
                "isVisible": true,
                "onClick": controller.AS_Button_b83a882c51cb49fab8ebbf65eff6631a,
                "right": "2%",
                "skin": "skn",
                "text": "+",
                "top": "0dp",
                "width": "48dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxScrollPersonList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "75%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollPersonList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0jb108df7132c4b",
                "top": "15%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollPersonList.setDefaultUnit(kony.flex.DP);
            var segListPerson = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnDelete": "Button",
                    "btnDetail": "Button",
                    "imgArrow": "imagedrag.png",
                    "imgDelete": "minus.png",
                    "lblFirstLetter": "P",
                    "lblIconBackground": "",
                    "lblName": "Label",
                    "lblState": "Off"
                }, {
                    "btnDelete": "Button",
                    "btnDetail": "Button",
                    "imgArrow": "imagedrag.png",
                    "imgDelete": "minus.png",
                    "lblFirstLetter": "P",
                    "lblIconBackground": "",
                    "lblName": "Label",
                    "lblState": "Off"
                }, {
                    "btnDelete": "Button",
                    "btnDetail": "Button",
                    "imgArrow": "imagedrag.png",
                    "imgDelete": "minus.png",
                    "lblFirstLetter": "P",
                    "lblIconBackground": "",
                    "lblName": "Label",
                    "lblState": "Off"
                }],
                "groupCells": false,
                "id": "segListPerson",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxRowPerson",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnDelete": "btnDelete",
                    "btnDetail": "btnDetail",
                    "flxBtnDelete": "flxBtnDelete",
                    "flxIconPerson": "flxIconPerson",
                    "flxRowPerson": "flxRowPerson",
                    "imgArrow": "imgArrow",
                    "imgDelete": "imgDelete",
                    "lblFirstLetter": "lblFirstLetter",
                    "lblIconBackground": "lblIconBackground",
                    "lblName": "lblName",
                    "lblState": "lblState"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollPersonList.add(segListPerson);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0fbd57cf7b9014f",
                "top": "37dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var txtSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "txtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "12%",
                "onDone": controller.AS_TextField_c4ddf71356d74c628eeb75cf87f68cc7,
                "placeholder": "Search Persons",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0c2b9aa1e832e4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 0,
                "width": "85%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxSearchIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSearchIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3.50%",
                "skin": "CopyslFbox0jb8d8f81ce2a4b",
                "width": "9%",
                "zIndex": 3
            }, {}, {});
            flxSearchIcon.setDefaultUnit(kony.flex.DP);
            var Search = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Search",
                "isVisible": true,
                "skin": "CopyslFontAwesomeIcon0d044f4af434b46",
                "text": "",
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
            flxSearchIcon.add(Search);
            flxSearch.add(txtSearch, flxSearchIcon);
            var flxContentMessage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "flxContentMessage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "skin": "slFbox",
                "top": "15.00%",
                "width": "100%",
                "zIndex": 300
            }, {}, {});
            flxContentMessage.setDefaultUnit(kony.flex.DP);
            var lblSearchMessage = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSearchMessage",
                "isVisible": false,
                "skin": "CopydefLabel0eb135bed740848",
                "text": "No se encontraron resultados",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 300
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContentMessage.add(lblSearchMessage);
            var ConfirmationPopup = new com.demo.ConfirmationPopup({
                "clipBounds": true,
                "height": "100%",
                "id": "ConfirmationPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "CopyslFbox0bb04696af80142",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9999
            }, {}, {});
            ConfirmationPopup.isVisible = false;
            ConfirmationPopup.zIndex = 9999;
            ConfirmationPopup.btnCancel.onClick = controller.AS_Button_c54be1405bb140abb13ab3e68fe4f436;
            ConfirmationPopup.btnDelete.onClick = controller.AS_Button_i75bc9a08e67472ca8696d1baa2306cc;
            ConfirmationPopup.flxContent.zIndex = 99999;
            ConfirmationPopup.flxContentButton.zIndex = 1;
            flxHomeContent.add(mainBar, flxFooter, btnEdit, btnDone, btnAdd, flxScrollPersonList, flxSearch, flxContentMessage, ConfirmationPopup);
            this.add(flxHomeContent);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f5937d2fc9b848768b7abe64ab4f2f07,
            "skin": "CopyslForm0bb4fe550fcd743"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "inTransitionConfig": {
                "formAnimation": 2
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});