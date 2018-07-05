//Type your code here
var ObjServiceObject = null;
var personObj = null;
var personRecords = null;
var personFound=null;
var selectedPerson = null;


function onSetupSuccess() {
  	if(!ObjServiceObject ){
       ObjServiceObject = new kony.sdk.KNYObjSvc("DemoApp");
    }
  
    if(!personObj){
  	  personObj = new kony.sdk.KNYObj("person");
    }
  	performSyncOnPersons();
  	alert("Setup Success");
}

function onSetupFailed() {
 	alert("Setup Failed");
}

function setupSync(){
  	var options={};
  	KNYMobileFabric.OfflineObjects.setup(options, onSetupSuccess, onSetupFailed);
}

function performSyncOnPersons(){
    var options = {
      'downloadBatchSize': 50,
      'uploadBatchSize': 20
    };
    //ObjServiceObject.startSync(options, onSyncSuccess.bind(this), onSyncFailure.bind(this), onSyncProgress.bind(this));
  	ObjServiceObject.startSync(options, onSyncSuccess, onSyncFailure);
}

function onSyncSuccess(){
  	kony.print("Sync on person object Succeded");
  	alert("Sync on person object Succeded");
}

function onSyncFailure(error){
    alert("Sync on person object failed"+error.code);  	
}

/*function onSyncProgress(object){
    //alert(JSON.stringify(object));
}

function getPerson(){
  	personObj.get( null, onGetAllSuccess, onGetAllFail);
}

function onGetAllSuccess(records){
    personRecords = records;
//	populateSegment(records);
}
*/

function onGetAllFail (error){
	print("unable to retrieve records from db"+ error.code);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function navigationForm(form) {
  var navObj=new kony.mvc.Navigation(form);
  navObj.navigate();
}

/*function SyncPromise(){
  return new Promise(function(resolve,reject){
 	performSyncOnPersons();
    resolve(true);	
  });
}*/

function goToHome(){
	navigationForm("frmHome");
}

function showKonyAlert(message, title){
  //Defining basicConf parameter for alert
  var basicConf = {	message: message,
                   alertType: constants.ALERT_TYPE_INFO,
                   alertTitle: title,
                   alertHandler: goToHome()};
  //Defining pspConf parameter for alert
  var pspConf = {};
  //Alert definition
  var infoAlert = kony.ui.Alert(basicConf,pspConf);
}










