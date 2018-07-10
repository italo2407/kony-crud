define({
    //Type your controller code here 
    frmAddPersonInit: function() {
        if (selectedPerson) {
            this.view.txtFirstName.text = selectedPerson.FirstName;
            this.view.txtLastName.text = selectedPerson.LastName;
            this.view.txtEmail.text = selectedPerson.Email;
            this.view.txtAddress.text = selectedPerson.Address;
            this.view.txtPhoneNumber.text = selectedPerson.PhoneNumber;
            this.view.imgSwitch.src = parseInt(selectedPerson.Active) === 1 ? switchOn : switchOff;
        }
    },
    onUpdate: function() {
        var updatedRecord = {};
        updatedRecord.FirstName = this.view.txtFirstName.text;
        updatedRecord.LastName = this.view.txtLastName.text;
        updatedRecord.Email = this.view.txtEmail.text;
        updatedRecord.Address = this.view.txtAddress.text;
        updatedRecord.PhoneNumber = this.view.txtPhoneNumber.text;
        updatedRecord.Active = this.view.imgSwitch.src === switchOff ? false : true;
        var options = {};
        var primary = {
            'Id': selectedPerson.Id
        };
        options.primaryKeys = primary;
        personObj.updateByPK(updatedRecord, options, this.onUpdateRecordSuccess, this.onUpdateRecordFailed);
    },
    onUpdateRecordSuccess: function() {
        var message = "Update succeded";
        var title = "Information Message";
        showKonyAlert(message, title);
    },
    onUpdateRecordFailed: function onUpdateRecordFailed(errorObj) {
        alert("Update failed with error " + errorObj.errorCode);
    },
    changeSwitchImg: function() {
        this.view.imgSwitch.src = this.view.imgSwitch.src === switchOff ? switchOn : switchOff;
    }
});