define({ 	
 //Type your controller code here 
	showForm: function (){  	  
      var navObj=new kony.mvc.Navigation("frmAddPerson");
      navObj.navigate();
	},
  	initForm:function(){
      this.getPerson();
    },
  	getPerson:function(){
      	personObj.get( null, this.onGetAllSuccess, onGetAllFail);      	
    },  	
  	onGetAllSuccess:function(data){
      	personRecords = data;
  		this.onSearch();      	
      	this.animateDeleteBtnSegment(false,true,"-11%");
	},
  	populateSegment:function (records){
       var objRecords = records;
       var data = [];   

        var noOfRecords = objRecords.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = objRecords[i];
            var personFullName =  objRecord.FirstName+' '+objRecord.LastName;
          	var state= parseInt(objRecord.Active) === 0 ? "Off" : "";
			
          	data[i] = {
              	imgDelete:{
                	src:"minus.png"                  	
                },
                lblName: {
                    text: personFullName
                },
              	lblIconBackground:{
                  	backgroundColor:getRandomColor()
                },
              	lblFirstLetter:{
                  	text:personFullName.charAt(0),
                  	skin:"sknFirstLetter"
                },
              	lblState:{
                  	text:state
                },
              	imgArrow:{
                  	src:"arrow2.png"
                },
              	btnDetail:{
                  	isVisible:true,
                  	onClick:this.onRowClick
                },
              	btnDelete:{
                  	onClick:this.deleteAlertShow
                }
            };
        }
        this.view.segListPerson.data = data;
        this.view.segListPerson.left = 0;      	
      	//this.view.segListPerson.setAnimations(this.getAddRowAnim());
    },
  	/*onRowClick:function(seguiWidget, sectionIndex, rowIndex, isSelected){
     	selectedPerson = personFound[rowIndex];
      	alert("RowIndex:"+this.view.segListPerson.selectedRowIndex);
  		navigationForm("frmAddPerson");      	
    },*/
  	onRowClick:function(){
     	this.getSelectedPerson();      	
  		navigationForm("frmAddPerson");      	
    },
  	goToAddForm:function(){
      	navigationForm("frmPerson");
    },
  	/*getAddRowAnim:function(){
  		var transformProp1 = kony.ui.makeAffineTransform();
 		transformProp1.scale(0.0,0.0);  		
 		var transformProp2 = kony.ui.makeAffineTransform();
 		transformProp2.scale(1,1);
 		var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},        
             					 100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2}
            					} ;
  		var animObj=kony.ui.createAnimation(animDefinitionOne);
  		var animConf={delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.7};
  		var addRowAnimtion = { visible:{definition : animObj, config : animConf, callbacks : null }};
 		return addRowAnimtion;
	},*/
  	onDelete:function(){
      	if(personFound.length>0){          
          this.animateDeleteBtnSegment(true,false,"0%");          
        }
    },
  	onDone:function(){
      	this.getPerson();      	
    },
  	getSegmentRows:function(){
    	var rowList=[];
      	for(var i=0;i<personRecords.length;i++){
			var rowItem={sectionIndex:0, rowIndex:i};
          	rowList.push(rowItem);
        }
      	return rowList;
    },
  	btnAnimation:function(leftValue){
  		var animConf = {    				      					
     		"100": {
        			"left":leftValue,
        			"stepConfig": {"timingFunction": kony.anim.LINEAR}
    			   }
		};
		var animObj = kony.ui.createAnimation(animConf);
      	var animConfig = { duration: 0.5,
	    				   fillMode: kony.anim.FILL_MODE_FORWARDS,
	    				   "iterationCount":1  	};
      	var animation = {	definition : animObj,
							config : animConfig,
							callbacks : null};
      	return animation;
	},
  	onSearch:function(){
      var q=this.view.txtSearch.text;      
      if(q==="" || q===null){
        	personFound=personRecords;
      }
      else{       
      		personFound=personRecords.filter(function(person) {
        	return person.FirstName.toLowerCase().indexOf(q.toLowerCase()) >-1 || 
              	   person.LastName.toLowerCase().indexOf(q.toLowerCase()) > -1;
	  		});  
      }
      if(personFound.length>0){
        this.view.flxContentMessage.isVisible=false;
        this.view.lblSearchMessage.isVisible=false;      	
      }        
      else{
        this.view.flxContentMessage.isVisible=true;
        this.view.lblSearchMessage.isVisible=true;        
      }
      this.populateSegment(personFound);
        
    },  	
  	deleteAlertShow:function(){
      	this.getSelectedPerson();
  		this.view.ConfirmationPopup.isVisible=true;
      	this.view.ConfirmationPopup.btnDelete.text="Delete "+selectedPerson.FirstName;
	},
  	onCancelConfirmationPopup:function(){
  		this.view.ConfirmationPopup.isVisible=false;
	},
  	getSelectedPerson:function(){
      	var rowIndex=this.view.segListPerson.selectedRowIndex[1];
      	alert("RowIndex : "+rowIndex);
      	selectedPerson = personFound[rowIndex];
    },
  	onDeleteItem:function(){
    	var pk = {};
     	pk.Id = selectedPerson.Id;
	
      	var options = {
      	    "primaryKeys": pk
     	};
     	personObj.deleteByPK(options, this.onDeleteSuccess, this.onDeleteFailure);
    },
    onDeleteSuccess:function () {
      	this.view.ConfirmationPopup.isVisible=false;
      	this.animationDeleteItemfromSegment();
    },
    onDeleteFailure:function (errorObj) {
        alert("Delete failed with error " + errorObj.errorCode);
    },
  	animateDeleteBtnSegment:function(isVisibleBtnDone, isVisibleBtnEdit, animationValue){
  		this.view.btnDone.isVisible=isVisibleBtnDone;
      	this.view.btnEdit.isVisible=isVisibleBtnEdit;
      	var jsonObj={rows:this.getSegmentRows(), widgets : ["flxBtnDelete"], animation: this.btnAnimation(animationValue)};
      	this.view.segListPerson.animateRows(jsonObj);
	},
  	animationDeleteItemfromSegment:function(){
  		var rowIndex = parseInt(this.view.segListPerson.selectedRowIndex[1]);       
        //alert(rowIndex);
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.scale(1,0);
        var transformProp2 = kony.ui.makeAffineTransform();
        transformProp2.scale(1,1);
        var animDefinitionOne = {0  : {"transform":transformProp2},
                                100 : {"transform":transformProp1}};
		var animDefinition = kony.ui.createAnimation(animDefinitionOne);
        var animConfig = {"duration":0.3,"iterationCount":1,"delay":0,"fillMode":kony.anim.FORWARDS	};
        var finalAnimation = {definition: animDefinition, config: animConfig};
        kony.print("\nrow index:-"+parseInt(rowIndex));
        this.view.segListPerson.removeAt(rowIndex, 0, finalAnimation);
	}
  

 });