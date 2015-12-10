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
    console.log(lands)
    // create a section tag with an id of middle-earth
    var midEarthSection = document.createElement("section");
    midEarthSection.setAttribute("id", "middle-earth");
    // add each land as an article tag
    for ( var i = 0; i < lands.length; i++) {
      var article = document.createElement("article");
      var h1 = document.createElement("h1");
      // inside each article tag include an h1 with the name of the land
      h1.innerHTML = lands[i];
      article.appendChild(h1);
      midEarthSection.appendChild(article);
      document.querySelector("#middle-earth");
    }
    // append middle-earth to your document body
    document.body.appendChild(midEarthSection);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var ul = document.createElement("ul");
    for (var i = 0; i < hobbits.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = hobbits[i];
      // give each hobbit a class of hobbit
      li.setAttribute("class", "hobbit");
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var div = document.createElement("div");
    div.setAttribute("id", "the-ring");
    // add the ring as a child of Frodo
    var frodo = document.getElementsByClassName("hobbit")[0];
    frodo.appendChild(div);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var aside = document.createElement("aside");
    // display an unordered list of buddies in the aside
    var ul = document.createElement("ul");
    for (var i = 0; i < buddies.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = buddies[i];
      ul.appendChild(li);
    }
    aside.appendChild(ul);
    // insert your aside before rivendell
    var lands = document.getElementById("middle-earth");
    lands.insertBefore(aside, lands.childNodes[1]);
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
