console.log("First line in JavaScript file");
console.log(Date.now());

function executeThisCodeAfterFileIsLoaded () {
  console.log("executeThisCodeAfterFileIsLoaded");
  console.log(Date.now())
  console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText);
  console.log("data", data);
  var contentEl = document.getElementById("all-my-pet-food") 
  var foodData = "";

 for (var i = 0; i < data.dog_brands.length; i++) {
  currentFood = data.dog_brands[i];

    foodData += "<div class='food-block'>";
    foodData += `<h1>${currentFood.name}</h1>`;
    foodData += "<div class='volume'>";
    // foodData += `<p>${currentFood.types.volumes.name}</p>`;
    foodData += "<div class='type'>Type: ";
    foodData += currentFood.type;
    foodData += "</div>";
    foodData += "<div class='price'>Price: ";
    foodData += currentFood.price;
    foodData += "</div>";
    foodData += "</div>"

    console.log("currentFood.types.type.volumes.name", currentFood.types);
 }

console.log(foodData);
contentEl.innerHTML = foodData;

}

function executeThisCodeIfXHRFails (xhrEvent) {
  console.log("An error occurred while transferring the data");
}

function executeThisCodeChunksArrive (xhrEvent) {

}


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeChunksArrive);

myRequest.open("GET", "dog.JSON");
myRequest.send();






console.log("Last line in JavaScript file");
console.log(Date.now());
