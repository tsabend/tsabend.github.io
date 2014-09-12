$(document).ready(function() {
    myGroceryList = new GroceryList(); 
    $('#itemText').click(function(){
        $('#itemText').val("");
    })   
    $("#addButton").click(function(){
        if (validateForm() === false)
        {

        }
        else {
        myGroceryList.add(document.getElementById("itemText").value);
        myGroceryList.display();
        displayGroceryList(myGroceryList);
        $('#itemText').val("");
        }
    });

function createClick(className, objectName) {
    $(".plus"+className+"").click(function(){
        myGroceryList.changeQuantity(objectName, 1);
        displayGroceryList(myGroceryList);
    });
    $(".minus"+className+"").click(function(){
        myGroceryList.changeQuantity(objectName, -1);
        displayGroceryList(myGroceryList);
    });
}

function clearDisplay(groceries) {
    var clearButton = document.createElement("BUTTON");
    var clearButtonName = document.createTextNode("clear");
    clearButton.appendChild(clearButtonName);
    clearButton.className = ("clearButton");
    $('#groceryList').append(clearButton);
    $('.clearButton').click(function(){
        console.log("wham");
        groceries.clear();
        $('#groceryList').empty();
    });
}

function validateForm() {
    var x = $('#itemText').val();
    if (x==null || x=="") {
        alert("You cannot leave the items field blank.");
        return false;
    }
}

function displayGroceryList(groceries){
    var container = document.getElementById("groceryList");
    container.innerHTML = "";
    for(var item in groceries.list){
        unspacedItem = item.replace(/ /g, '');    
        console.log(unspacedItem);
        var plusButton = document.createElement("BUTTON");
        var plus = document.createTextNode("+");     
        plusButton.appendChild(plus);
        plusButton.className = ("plus" + unspacedItem);
        var minusButton = document.createElement("BUTTON");
        var minus = document.createTextNode("-");
        minusButton.appendChild(minus);
        minusButton.className = ("minus" + unspacedItem);
        var objectQuantity = document.createElement("input");
        objectQuantity.className = ("numberof" + unspacedItem);
        var itemName = document.createElement("tr");   
        itemName.className =(unspacedItem);
        $('#groceryList').append(itemName);

        $("."+unspacedItem+"").append("<td>"+item+" </td>", objectQuantity, plusButton, minusButton);
        $(".numberof" + unspacedItem+"").val(groceries.list[item].quantity);
        createClick(unspacedItem, item);
    }
    clearDisplay(groceries);
}



function Item(name, quantity) {
    this.name = name;
    this.quantity = quantity;
}
function GroceryList() {
    this.list = {};
    this.add = function(stuffToAdd){
        stuffToAdd = stuffToAdd.split(", ")
        for(var i = 0; i < stuffToAdd.length; i++ ) {
            
            if(stuffToAdd[i] in this.list) {
                this.list[stuffToAdd[i]].quantity += 1;   
            }
            else {
                this.list[stuffToAdd[i]] = new Item(stuffToAdd[i], 1);
            }
        }
    }
    this.remove = function(thingToRemove){
        delete this.list[thingToRemove];
    }
    this.changeQuantity = function(thingToChange, newQuantity){
        //use 1 to add, -1 to subtract
        this.list[thingToChange].quantity += newQuantity;
        if (this.list[thingToChange].quantity === 0) {
            this.remove(thingToChange);
        }
    }
    this.clear = function(){
        console.log("BAM");
        this.list = {}
    }
    this.display = function() {
        console.log(this.list);
    }
} 

 });