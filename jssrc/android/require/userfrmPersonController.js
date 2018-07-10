define({
    //Type your controller code here 
    createPerson: function() {
        var persons = new kony.sdk.KNYObj("person");
        //Add a record  where primary key CATEGORY_ID is marked as autogenerated.
        var person1 = {};
        var options = {};
        person1.FirstName = this.view.txtFirstName.text;
        person1.LastName = this.view.txtLastName.text;
        person1.Email = this.view.txtEmail.text;
        person1.Address = this.view.txtAddress.text;
        person1.PhoneNumber = this.view.txtPhoneNumber.text;
        person1.Active = this.view.imgSwitch.src === switchOff ? false : true;
        //Call the objects create API
        persons.create(person1, options, this.onSuccess, this.onFailure); //persists records db.    
    },
    onSuccess: function(successContext) {
        var message = "Success";
        var title = "Information Message";
        showKonyAlert(message, title);
    },
    onFailure: function(error) {
        alert("Create failed with error :" + JSON.stringify(error));
    },
    clearFields: function() {
        this.view.txtFirstName.text = "";
        this.view.txtLastName.text = "";
        this.view.txtAddress.text = "";
        this.view.txtEmail.text = "";
        this.view.txtPhoneNumber.text = "";
        this.view.imgSwitch.src = switchOn;
    },
    changeSwitchImg: function() {
        this.view.imgSwitch.src = this.view.imgSwitch.src === switchOff ? switchOn : switchOff;
    }
});