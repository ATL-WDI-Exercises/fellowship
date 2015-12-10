// Dramatis Personae

/*var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ],
  buddies: [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ],*/

  var lands = [
    "The Shire", "Rivendell", "Mordor"
  ];
  function makeMiddleEarth(lands) {
    console.log(lands)
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var newSection = document.createElement("section");

    for( i = 0 ; i < lands.length ; i++) {

        var newArticle = document.createElement("article");
        newSection.appendChild(newArticle);
        var newH1 = document.createElement("h1");
        newArticle.appendChild(newH1);
        var newText = document.createTextNode(lands[i]);
        newH1.appendChild(newText);
        }

    var currentSpot = document.querySelector("body");
    currentSpot.appendChild(newSection);

 }/*,
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}*/
makeMiddleEarth(lands);
