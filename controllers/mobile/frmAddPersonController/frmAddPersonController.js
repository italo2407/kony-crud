define({ 

 //Type your controller code here 
	frmAddPersonInit:function(){
     	if(selectedPerson){
          this.view.txtFirstName.text=selectedPerson.FirstName;
          this.view.txtLastName.text=selectedPerson.LastName;
          this.view.txtEmail.text=selectedPerson.Email;
          this.view.txtAddress.text=selectedPerson.Address;
          this.view.txtPhoneNumber.text=selectedPerson.PhoneNumber;
          this.view.switchActive.selectedIndex=parseInt(selectedPerson.Active)===1 ? parseInt(0) : parseInt(1);
        }
    },
  	onUpdate:function(){
        var updatedRecord = {};
        updatedRecord.FirstName = this.view.txtFirstName.text;
        updatedRecord.LastName = this.view.txtLastName.text;
        updatedRecord.Email = this.view.txtEmail.text;
        updatedRecord.Address = this.view.txtAddress.text;
        updatedRecord.PhoneNumber = this.view.txtPhoneNumber.text;
        updatedRecord.Active = parseInt(this.view.switchActive.selectedIndex)===1?false:true;
        var options = {};
        var primary = {'Id' : selectedPerson.Id};
        options.primaryKeys = primary;
        personObj.updateByPK(updatedRecord, options, this.onUpdateRecordSuccess, this.onUpdateRecordFailed);
    },
    onUpdateRecordSuccess:function (){
        var message="Update succeded";
        var title="Information Message";
        showKonyAlert(message, title);
    },
	onUpdateRecordFailed:function onUpdateRecordFailed(errorObj) {
	  	alert("Update failed with error " + errorObj.errorCode);
    }
 });