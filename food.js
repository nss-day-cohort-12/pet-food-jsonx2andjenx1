// console.log("First line in JavaScript file");
// console.log(Date.now());

function executeThisCodeAfterFileIsLoaded () {
  // console.log("executeThisCodeAfterFileIsLoaded");
  // console.log(Date.now())
  // console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText);
  //console.log("data", data);
  var contentEl = document.getElementById("all-my-dog-food"); 
  var foodData = "";

  for (var i = 0; i < data.dog_brands.length; i++) {
    currentFood = data.dog_brands[i];
    foodData += "<div class='food-block'>"; // open div with class of food-block 
    foodData += `<h2>${currentFood.name}</h2>`;  // add brand NAME (Chuck Wagon)

    for (var j = 0; j < currentFood.types.length; j++){
      currentType = currentFood.types[j];
      foodData += "<div class='type'>Type: " + currentType.type + "</div>"; //add food TYPE (All Natural)

      for (var k = 0; k < currentType.volumes.length; k++){
        currentVolume = currentType.volumes[k];
        foodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    foodData += "</div>"; // close div with class of food-block 
  }
  contentEl.innerHTML = foodData; // add to page
}

function executeThisCodeIfXHRFails (xhrEvent) {
  console.log("An error occurred while transferring the data");
}

function executeThisCodeChunksArrive (xhrEvent) {

}

function executeThisCodeAfterFileIsLoaded () {
  // console.log("executeThisCodeAfterFileIsLoaded");
  // console.log(Date.now())
  // console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText);
  //console.log("data", data);
  var contentEl = document.getElementById("all-my-cat-food"); 
  var foodData = "";

  for (var i = 0; i < data.cat_brands.length; i++) {
    currentFood = data.cat_brands[i];
    foodData += "<div class='food-block'>"; // open div with class of food-block 
    foodData += `<h2>${currentFood.name}</h2>`;  // add brand NAME (Chuck Wagon)

    for (var j = 0; j < currentFood.types.length; j++){
      currentType = currentFood.types[j];
      foodData += "<div class='type'>Type: " + currentType.type + "</div>"; //add food TYPE (All Natural)

      for (var k = 0; k < currentType.volumes.length; k++){
        currentVolume = currentType.volumes[k];
        foodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    foodData += "</div>"; // close div with class of food-block 
  }
  contentEl.innerHTML = foodData; // add to page
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
myRequest.open("GET", "cats.json");
myRequest.send();

// console.log("Last line in JavaScript file");
// console.log(Date.now());