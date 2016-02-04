// console.log("First line in JavaScript file");
// console.log(Date.now());

function executeThisCodeAfterFileIsLoadedDog () {
  // console.log("executeThisCodeAfterFileIsLoaded");
  // console.log(Date.now())
  // console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText);
  //console.log("data", data);
  var contentDogDiv = document.getElementById("all-my-dog-food"); 
  var dogFoodData = "";

  console.log("data", data);

  for (var i = 0; i < data.dog_brands.length; i++) {
    currentFood = data.dog_brands[i];
    dogFoodData += "<div class='food-block'>"; // open div with class of food-block 
    dogFoodData += `<h2>${currentFood.name}</h2>`;  // add brand NAME (Chuck Wagon)

    for (var j = 0; j < currentFood.types.length; j++){
      currentType = currentFood.types[j];
      dogFoodData += "<div class='type'>Type: " + currentType.type + "</div>"; //add food TYPE (All Natural)

      for (var k = 0; k < currentType.volumes.length; k++){
        currentVolume = currentType.volumes[k];
        dogFoodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    dogFoodData += "</div>"; // close div with class of food-block 
  }
  contentDogDiv.innerHTML = dogFoodData; // add to page
  console.log("dogFoodData", dogFoodData);
}

function executeThisCodeIfXHRFails (xhrEvent) {
  console.log("An error occurred while transferring the data");
}

function executeThisCodeChunksArrive (xhrEvent) {

}

function executeThisCodeAfterFileIsLoadedCat () {
  // console.log("executeThisCodeAfterFileIsLoaded");
  // console.log(Date.now())
  // console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText);
  //console.log("data", data);
  var contentCatDiv = document.getElementById("all-my-cat-food"); 
  var catFoodData = "";

  for (var i = 0; i < data.cat_brands.length; i++) {
    currentFood = data.cat_brands[i];
    catFoodData += "<div class='food-block'>"; // open div with class of food-block 
    catFoodData += `<h2>${currentFood.name}</h2>`;  // add brand NAME (Chuck Wagon)

    for (var j = 0; j < currentFood.types.length; j++){
      currentType = currentFood.types[j];
      catFoodData += "<div class='type'>Type: " + currentType.type + "</div>"; //add food TYPE (All Natural)

      for (var k = 0; k < currentType.volumes.length; k++){
        currentVolume = currentType.volumes[k];
        catFoodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    catFoodData += "</div>"; // close div with class of food-block 
  }
  contentCatDiv.innerHTML = catFoodData; // add to page
}

function executeThisCodeIfXHRFails (xhrEvent) {
  console.log("An error occurred while transferring the data");
}

function executeThisCodeChunksArrive (xhrEvent) {

}

var myRequestDog = new XMLHttpRequest();
var myRequestCat = new XMLHttpRequest();

myRequestDog.addEventListener("load", executeThisCodeAfterFileIsLoadedDog);
myRequestCat.addEventListener("load", executeThisCodeAfterFileIsLoadedCat);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);
// myRequest.addEventListener("progress", executeThisCodeChunksArrive);

myRequestDog.open("GET", "dog.JSON");
myRequestCat.open("GET", "cats.json");
myRequestDog.send();
myRequestCat.send();

// console.log("Last line in JavaScript file");
// console.log(Date.now());