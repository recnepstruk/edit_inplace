angular.module('EditApp', [])
    .controller('ClickingEditor', clickEdit);

function clickEdit() {
    cCtrl = this;
    cCtrl.greeting = "Hello world!";
    cCtrl.nameForm = false;
    cCtrl.bioForm = false;
    cCtrl.hobbiesForm = false;
    cCtrl.showForm = function() {
        cCtrl.nameForm = true;
    }
    cCtrl.finishedEdit = function() {
        cCtrl.nameForm = false;
    }


    cCtrl.showForm2 = function() {
        cCtrl.bioForm = true;
    }
    cCtrl.finishedEdit2 = function() {
        cCtrl.bioForm = false;
    }



    cCtrl.showForm3 = function() {
        cCtrl.hobbiesForm = true;
    }
    cCtrl.finishedEdit3 = function() {
            cCtrl.hobbiesForm = false;
        }
        cCtrl.name =" ";
        cCtrl.bio = " ";
        cCtrl.hobbies = " ";
}
