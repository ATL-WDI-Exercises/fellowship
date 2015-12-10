// Dramatis Personae
var fellowship = {
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
  ],
  lands: [
    "The Shire", "Rivendell", "Mordor"
  ],
  makeMiddleEarth: function(lands) {
    // Set parent element to add into
    var parent = document.getElementById("middle-earth");

    // Create article element
    var article = document.createElement("article");

    // iterate over lands and insert them into h1 elements.
    lands.forEach(function(land) {
      var header = document.createElement("h1");
      var text = document.createTextNode(land);
      article.appendChild(header).appendChild(text);
    });
    // add completed article into DOM
    parent.appendChild(article);
  },

  makeHobbits: function(hobbits) {
    // Set article as parent element
    var parent = document.querySelector("#middle-earth article");

    // create ul element
    var ul = document.createElement("ul");

    // iterate over hobbit array and insert into li elements
    hobbits.forEach(function(hobbit) {
      var li = document.createElement("li");

      // add class to every li element
      var hobbitClass = document.createAttribute("class");
      hobbitClass.value = "hobbit";
      li.setAttributeNode(hobbitClass);

      var text = document.createTextNode(hobbit);
      ul.appendChild(li).appendChild(text);
    });
    //add completed list into DOM
    parent.insertBefore(ul, parent.children[1]);
  },
  keepItSecretKeepItSafe: function() {
      // set parent element
      var parent = document.querySelector("li.hobbit");

      // Create the ring
      var theRing = document.createElement("div");

      // Give ring id of "the-ring"
      var ringId = document.createAttribute("id");
      ringId.value = "the-ring";
      theRing.setAttributeNode(ringId);

      parent.insertBefore(theRing, parent.children[1]);
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
}

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
