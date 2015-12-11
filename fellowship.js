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
    // Set parent element with ID of middle-earth
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
    // set first list item w/ class of hobbit as parent element
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
    // set parent to article
    var parent = document.querySelector("#middle-earth article");

    // create aside and ul elements
    var aside = document.createElement("aside");
    var ul = document.createElement("ul");

    buddies.forEach(function(buddy) {
      // create li element
      var li = document.createElement("li");
      // get name of buddy and apply to text node
      var text = document.createTextNode(buddy);
      // append ul < li < text
      ul.appendChild(li).appendChild(text);
    });
    // aside < ul
    aside.appendChild(ul);
    // append aside to DOM
    parent.insertBefore(aside, parent.children[3]);


  },
  beautifulStranger: function() {
    // get position of strider in array
    var striderLocation = fellowship.buddies.indexOf('Strider');

    // find strider in DOM
    var strider = document.querySelectorAll('aside ul li')[striderLocation];

    // set striders parent
    var parent = strider.parentNode;

    // create li element
    var li = document.createElement("li");
    var name = document.createTextNode("Aragorn");
    li.appendChild(name);
    parent.replaceChild(li, strider);
  },
  forgeTheFellowShip: function() {
    // get hobbits by class name
    var hobbits = document.getElementsByClassName("hobbit");
    // get location of rivendell
    var rivendell = document.querySelector("#middle-earth article aside ul");

    // iterate over hobbits to add to rivendell
    for (var i = hobbits.length - 1; i >= 0; i--) {
      rivendell.appendChild(hobbits[i]);
    }

    // create div, h1, header text, and ul element
    var parent = document.querySelector("#middle-earth article");
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("the-fellowship");
    var ul = document.createElement("ul");

    // combine header text with h1
    h1.appendChild(h1text);

    // get all buddies and hobbits
    var all = document.getElementsByTagName("li");
    parent.appendChild(div).appendChild(h1);
    div.appendChild(ul);

    // loop and append to fellowship ul
    for (var i = all.length - 1; i >= 0; i--) {
      ul.appendChild(all[i]);
      if (i === 0) {
        alert("Everyone has joined the fellowship!");
      }
    }
  }
}

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
