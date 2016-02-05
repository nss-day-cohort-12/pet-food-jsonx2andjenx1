
function executeThisCodeAfterFileIsLoadedDog () { // DOG

  //console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText); // parse the json data to readable javascript
  // console.log("data", data);
  var contentDogDiv = document.getElementById("all-my-dog-food");  // find div with correct id
  var dogFoodData = "";  // start with empty string

  // console.log("data.dog_brands", data.dog_brands);
  for (var i = 0; i < data.dog_brands.length; i++) {  // loop thru DOG_BRANDS array
    // console.log("data.dog_brands[i]", data.dog_brands[i]);
    currentFood = data.dog_brands[i];  
    dogFoodData += "<div class='food-block'>";  // open div with class of food-block 
    dogFoodData += `<h2>${currentFood.name}</h2>`;  // add brand NAME (Chuck Wagon)

    for (var j = 0; j < currentFood.types.length; j++){  // loop thru TYPES array
      // console.log("currentFood.types[j]", currentFood.types[j]);
      currentType = currentFood.types[j]; 
      dogFoodData += "<div class='type'>Type: " + currentType.type + "</div>"; //add food TYPE (All Natural)

      for (var k = 0; k < currentType.volumes.length; k++){  // loop thru VOLUMES array (name, price)
        // console.log("currentType.volumes[k]", currentType.volumes[k]);
        currentVolume = currentType.volumes[k]; 
        dogFoodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    dogFoodData += "</div>";  // close div with class of food-block 
  }
  // console.log("dogFoodData", dogFoodData);
  contentDogDiv.innerHTML = dogFoodData;  // add content to inner html
}

function executeThisCodeAfterFileIsLoadedCat () { // CAT
  
  //console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText); // parse the json data to readable javascript
  //console.log("data", data);
  var contentCatDiv = document.getElementById("all-my-cat-food");  // find div with correct id
  var catFoodData = "";  // start with empty string

  for (var i = 0; i < data.cat_brands.length; i++) {  // loop thru CAT_BRANDS array
    // console.log("data.cat_brands[i]", data.cat_brands[i]);
    currentFood = data.cat_brands[i]; 
    catFoodData += "<div class='food-block'>";  // open div with class of food-block 
    catFoodData += `<h2>${currentFood.name}</h2>`;  // add brand NAME (Chuck Wagon)

    for (var j = 0; j < currentFood.types.length; j++){  // loop thru TYPES array
      // console.log("currentFood.types[j]", currentFood.types[j]);
      currentType = currentFood.types[j]; 
      catFoodData += "<div class='type'>Type: " + currentType.type + "</div>";  //add food TYPE (All Natural)

      for (var k = 0; k < currentType.volumes.length; k++){  // loop thru VOLUMES array (name, price)
        // console.log("currentType.volumes[k]", currentType.volumes[k]);        
        currentVolume = currentType.volumes[k]; 
        catFoodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    //console.log("console log breeds", currentFood.breeds);
    catFoodData += "<div class='breeds'>Suggested for these breeds: " + currentFood.breeds; // add cat BREEDS
    catFoodData += "</div>";  // close div with class of food-block 
  }
  contentCatDiv.innerHTML = catFoodData; // add content to inner html
}

var myRequestDog = new XMLHttpRequest();  // dog XMLHttp Request
var myRequestCat = new XMLHttpRequest();  // cat XMLHttp Request

myRequestDog.addEventListener("load", executeThisCodeAfterFileIsLoadedDog); // run dog function
myRequestCat.addEventListener("load", executeThisCodeAfterFileIsLoadedCat); // run cat function

myRequestDog.open("GET", "dog.JSON"); // get & open the dog json file
myRequestCat.open("GET", "cats.json"); // get & open the cat json file

myRequestDog.send(); // execute function
myRequestCat.send(); // execute function
