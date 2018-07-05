define({
    //Type your controller code here 
    showForm: function() {
        var navObj = new kony.mvc.Navigation("frmAddPerson");
        navObj.navigate();
    },
    getPerson: function() {
        personObj.get(null, this.onGetAllSuccess, onGetAllFail);
    },
    onGetAllSuccess: function(data) {
        personRecords = data;
        this.onSearch();
    },
    populateSegment: function(records) {
        var objRecords = records;
        var data = [];
        var noOfRecords = objRecords.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = objRecords[i];
            var personFullName = objRecord.FirstName + ' ' + objRecord.LastName;
            var state = parseInt(objRecord.Active) === 0 ? "Off" : "";
            data[i] = {
                imgDelete: {
                    src: "minus.png"
                },
                lblName: {
                    text: personFullName
                },
                lblIconBackground: {
                    backgroundColor: getRandomColor()
                },
                lblFirstLetter: {
                    text: personFullName.charAt(0),
                    skin: "sknFirstLetter"
                },
                lblState: {
                    text: state
                },
                imgArrow: {
                    src: "arrow2.png"
                }
            };
        }
        this.view.segListPerson.data = data;
        this.view.segListPerson.left = 0;
        this.view.segListPerson.setAnimations(this.getAddRowAnim());
    },
    onRowClick: function(seguiWidget, sectionIndex, rowIndex, isSelected) {
        selectedPerson = personFound[rowIndex];
        alert("sectionIndex:" + sectionIndex + " RowIndex:" + rowIndex);
        navigationForm("frmAddPerson");
    },
    goToAddForm: function() {
        navigationForm("frmPerson");
    },
    getAddRowAnim: function() {
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.scale(0.0, 0.0);
        var transformProp2 = kony.ui.makeAffineTransform();
        transformProp2.scale(1, 1);
        var animDefinitionOne = {
            0: {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "transform": transformProp1
            },
            100: {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "transform": transformProp2
            }
        };
        var animObj = kony.ui.createAnimation(animDefinitionOne);
        var animConf = {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.7
        };
        var addRowAnimtion = {
            visible: {
                definition: animObj,
                config: animConf,
                callbacks: null
            }
        };
        return addRowAnimtion;
    },
    onDelete: function() {
        this.view.btnDone.isVisible = true;
        this.view.btnEdit.isVisible = false;
        var jsonObj = {
            rows: this.getSegmentRows(),
            widgets: ["flxBtnDelete"],
            animation: this.btnAnimation("0%")
        };
        this.view.segListPerson.animateRows(jsonObj);
    },
    onDone: function() {
        this.view.btnDone.isVisible = false;
        this.view.btnEdit.isVisible = true;
        var jsonObj = {
            rows: this.getSegmentRows(),
            widgets: ["flxBtnDelete"],
            animation: this.btnAnimation("-11%")
        };
        this.view.segListPerson.animateRows(jsonObj);
    },
    getSegmentRows: function() {
        var rowList = [];
        for (var i = 0; i < personRecords.length; i++) {
            var rowItem = {
                sectionIndex: 0,
                rowIndex: i
            };
            rowList.push(rowItem);
        }
        return rowList;
    },
    btnAnimation: function(leftValue) {
        var animConf = {
            "100": {
                "left": leftValue,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        };
        var animObj = kony.ui.createAnimation(animConf);
        var animConfig = {
            duration: 0.5,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        };
        var animation = {
            definition: animObj,
            config: animConfig,
            callbacks: null
        };
        return animation;
    },
    onSearch: function() {
        var q = this.view.txtSearch.text;
        if (q === "" || q === null) {
            personFound = personRecords;
        } else {
            personFound = personRecords.filter(function(person) {
                return person.FirstName.toLowerCase().indexOf(q.toLowerCase()) > -1 || person.LastName.toLowerCase().indexOf(q.toLowerCase()) > -1;
            });
        }
        this.populateSegment(personFound);
    }
});