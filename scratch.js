var lands = [
    "The Shire", "Rivendell", "Mordor"
  ];
/* document.body.onload = makeMiddleEarth;
 function makeMiddleEarth(lands) {

    console.log(lands);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body

  };
*/
document.body.onload = makeMiddleEarth;

function makeMiddleEarth () {
    var midEarth = document.getElementById('middle-earth');
    for (var i = 0; i < lands.length; i++) {
    var article = document.createElement("article");
    var h1 = document.createElement("h1");
    var newContent = document.createTextNode(lands[i]);
    midEarth.appendChild(article);
    article.appendChild(h1);
    h1.appendChild(newContent);
    }
}
/*
var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there sneakses");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("middle-earth");
  document.body.insertBefore(newDiv, currentDiv);
*/

