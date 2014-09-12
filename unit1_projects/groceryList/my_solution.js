// U3.W8-9: 


// I worked on this challenge [by myself, with: Raphael Ho ].

// 2. Pseudocode



// 3. Initial Solution

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
        this.list[thingToChange].quantity = newQuantity;
        if (this.list[thingToChange].quantity === 0) {
            this.remove(thingToChange);
        }
    }
    this.clear = function(){
        this.list = {}
    }
} 
  
// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

var testList = new GroceryList();
console.log(testList.list);
testList.add("Berries")
console.log(testList.list)
testList.add("Coke, Grapefruit")
console.log(testList.list)
testList.changeQuantity("Coke", 5)
console.log("--- Testing changeQuantity ---")
console.log(testList.list)
testList.changeQuantity("Berries", 0)
console.log("--- Testing changeQuantity to 0 ---")
console.log(testList.list)
testList.clear()
console.log("--- Testing clear ---")
console.log(testList.list)

// 5. Reflection 

// WOW! This challenge took me forever but I finally worked out all of the problems. Creating a 
// javascript object that approximated my ruby code was easy, but getting javascript to work
// with the DOM was a huge pain in the ass. First I tried pure javascript solutions and eventually
// started banging my head against the wall. Some of my onclick functions where being overwritten
// within my for loop and this caused them not to function properly. Also I had been struggling
// to get messages to send properly and eventually started deconstructing my beautiful object
// in ways that weren't good. 

// I restarted, this time with jquery. I was able to get a working solution after a few hours
// and then translated that solution into pure javascript. I definitely learned a lot in the process.
// I investigated callbacks, closures, onload and more. I'm really happy with my final solution
// and it was a great learning process.