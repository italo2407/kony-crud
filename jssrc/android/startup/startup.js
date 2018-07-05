//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "DemoApp",
    appName: "DemoApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.17.16.55",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "DemoApp",
    isturlbase: "https://m100023608001.konycloud.com/services",
    isMFApp: true,
    appKey: "5e90a840ad3e66df600343200d9028dd",
    appSecret: "aed26e5bd5895e5f7803c0fd0e426cb7",
    serviceUrl: "https://100023608.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100023608.auth.konycloud.com/appconfig",
        "identity_meta": {
            "reusableLinkedinLogin": {
                "success_url": "allow_any"
            },
            "reusableOffice365Login": {
                "success_url": "allow_any"
            }
        },
        "service_doc_etag": "0000016461C14B18",
        "appId": "8577712c-ab4f-46ae-bd9c-a399c7391557",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "DemoApp",
        "reportingsvc": {
            "session": "https://m100023608001.konycloud.com/services/IST",
            "custom": "https://m100023608001.konycloud.com/services/CMS"
        },
        "baseId": "7322e994-aa1d-4825-be4b-a24716703f20",
        "login": [{
            "alias": "reusableLinkedinLogin",
            "type": "oauth2",
            "prov": "reusableLinkedinLogin",
            "url": "https://100023608.auth.konycloud.com"
        }, {
            "alias": "reusableFacebookLogin",
            "type": "oauth2",
            "prov": "reusableFacebookLogin",
            "url": "https://100023608.auth.konycloud.com"
        }, {
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100023608.auth.konycloud.com"
        }, {
            "alias": "reusableOffice365Login",
            "type": "oauth2",
            "prov": "reusableOffice365Login",
            "url": "https://100023608.auth.konycloud.com"
        }],
        "services_meta": {
            "DemoApp": {
                "offline": true,
                "metadata_url": "https://m100023608001.konycloud.com/services/metadata/v1/DemoApp",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://m100023608001.konycloud.com/services/data/v1/DemoApp"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://100023608.auth.konycloud.com/appconfig",
    secureurl: "https://100023608.auth.konycloud.com/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: applicationController.AS_AppEvents_cb7a88e76a5b4a8c94beb85f2ef57f5d,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmLogin");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;