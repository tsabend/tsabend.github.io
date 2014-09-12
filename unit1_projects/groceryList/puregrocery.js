window.onload = function() {
    myGroceryList = new GroceryList(); 
    document.getElementById("itemText").onclick = function() {
        document.getElementById("itemText").value = ("");
    }
    document.getElementById("addButton").onclick = function(){
        if (validateForm() !== false)
        {
            myGroceryList.add(document.getElementById("itemText").value);
            myGroceryList.display();
            displayGroceryList(myGroceryList);
            document.getElementById("itemText").value = ("");
        }
    }
}
    
function createClick(className, objectName) {
    document.getElementById("plus"+className).onclick = function(){
        myGroceryList.changeQuantity(objectName, 1);
        displayGroceryList(myGroceryList);
    }

    document.getElementById("minus"+className).onclick = function(){
        myGroceryList.changeQuantity(objectName, -1);
        displayGroceryList(myGroceryList);
    }
}

function validateForm() {
    var x = document.getElementById('itemText').value;
    if (x==null || x=="") {
        alert("You cannot leave the items field blank. Put some groceries on that list!");
        return false;
    }
}

function clearDisplay(groceries) {
    buttonMaker("clearButton", "Clear", "groceryList", function() {
        groceries.clear();
        document.getElementById('groceryList').innerHTML = "";
    });
}

function sortDisplay(groceries) {
    buttonMaker("sortButton", "Sort Alphabetically", "groceryList", function() {
        groceries.alphaSort(); displayGroceryList(myGroceryList);
    });
}

function buttonMaker(buttonId, buttonText, buttonLocation, callback) {
    var button = document.createElement("BUTTON");
    var buttonNode = document.createTextNode(buttonText);
    button.appendChild(buttonNode);
    button.id = (buttonId);
    document.getElementById(buttonLocation).appendChild(button)
    document.getElementById(buttonId).onclick = function(){
        callback()
    };
}

function displayGroceryList(groceries){
    var container = document.getElementById("groceryList");
    container.innerHTML = "";
    for(var item in groceries.list){
        unspacedItem = item.replace(/ /g, '');    
        var plusButton = document.createElement("BUTTON");
        var plus = document.createTextNode("+");     
        plusButton.appendChild(plus);
        plusButton.id = ("plus" + unspacedItem);
        var minusButton = document.createElement("BUTTON");
        var minus = document.createTextNode("-");
        minusButton.appendChild(minus);
        minusButton.id = ("minus" + unspacedItem);
        var objectQuantity = document.createElement("input");
        objectQuantity.className = ("numberof" + unspacedItem);
        objectQuantity.value = groceries.list[item].quantity;
        var itemName = document.createElement("tr");   
        itemName.id =(unspacedItem);
        container.appendChild(itemName);
        //add everything to the doc.
        itemName.innerHTML = "<td>"+item+" </td>";
        itemName.appendChild(objectQuantity);
        itemName.appendChild(plusButton);
        itemName.appendChild(minusButton);
        createClick(unspacedItem, item);
    }
    clearDisplay(groceries);
    sortDisplay(groceries);
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
        this.list = {}
    }
    this.display = function() {
       console.log(this.list);
    }
    this.alphaSort = function() {
        var sortedList = []
        for(var name in this.list){
            sortedList.push(name);
        }
        sortedList.sort();
        sortedObject = {}
        for(var i = 0; i < sortedList.length; i++){
            sortedObject[sortedList[i]] = new Item (sortedList[i], this.list[sortedList[i]].quantity);
        }
        this.list = sortedObject;  
    }
} 
