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
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var midEarth = document.getElementById('middle-earth');
    for (var i = 0; i < lands.length; i++) {
    var article = document.createElement("article");
    article.id = lands[i];
    var h1 = document.createElement("h1");
    var newContent = document.createTextNode(lands[i]);
    midEarth.appendChild(article);
    article.appendChild(h1);
    h1.appendChild(newContent);
    }

  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var ul = document.createElement('ul');
    ul.id = "shirelings";
    var shire = document.getElementById('The Shire');
    shire.appendChild(ul);
    for (var i = 0; i < hobbits.length; i++) {
        var list = document.getElementById('shirelings');
        var newnode = document.createElement('li');
        list.appendChild(newnode);
        newnode.innerText = hobbits[i];
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var div = document.createElement('div', {'id': 'the-ring'});
    var frodo = document.getElementById('shirelings').firstChild;
    frodo.appendChild(div);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowship: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}

document.body.onload = fellowship.makeMiddleEarth(fellowship.lands);
document.body.onload = fellowship.makeHobbits(fellowship.hobbits);
document.body.onload = fellowship.keepItSecretKeepItSafe();
document.body.onload = fellowship.makeBuddies(fellowship.buddies);
document.body.onload = fellowship.beautifulStranger();
document.body.onload = fellowship.forgeTheFellowship();
