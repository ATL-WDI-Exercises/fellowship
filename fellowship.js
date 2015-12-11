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
    // console.log(this.lands);
    var findMiddleEarth = document.getElementById("middle-earth");
    for (var i = 0; i < this.lands.length; i++) {
      var makeArticle = document.createElement("article");
      var makeHeadline = document.createElement("h1");
      findMiddleEarth.appendChild(makeArticle).appendChild(makeHeadline).innerHTML = this.lands[i];
      // var findLand = document.querySelectorAll("#middle-earth article h1")[i];
      // findLand.id = this.lands[i];
    }
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var welcomeHobbits = document.getElementsByTagName('article')[0];
    var buildHobbitHole = document.createElement('ul');
    for (var i = 0; i < this.hobbits.length; i++) {
      var acceptHobbits = document.createElement('li');
      welcomeHobbits.appendChild(buildHobbitHole).appendChild(acceptHobbits).innerHTML = this.hobbits[i];
    };
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var theRing = document.createElement('div');
    theRing.id = "the-ring";
    var frodoFinger = document.getElementsByTagName('li')[0];
    frodoFinger.appendChild(theRing);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var buddySpot = document.createElement('aside');
    var rivendell = document.getElementsByTagName('h1')[1];
    var beforeRivendell = document.getElementsByTagName('article')[1];
    var inviteBuddies = document.createElement('ul');
    for (var i = 0; i < this.buddies.length; i++) {
      var acceptBuddies = document.createElement('li');
      buddySpot.appendChild(inviteBuddies).appendChild(acceptBuddies).innerHTML = this.buddies[i];
    };
    beforeRivendell.insertBefore(buddySpot, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var findTheBuddies = document.getElementsByTagName('ul')[1];
    var findViggo = findTheBuddies.childNodes[3];
    findViggo.textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    $('ul').hide();
    var theFellowship = document.createElement('div');
    theFellowship.id = 'the-fellowship';
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.appendChild(theFellowship);
    for (var i = 0; i < this.buddies.length; i++) {
      var acceptBuddies = document.createElement('p');
      theFellowship.appendChild(acceptBuddies).innerHTML = this.buddies[i];
      alert(this.buddies[i] + " has joined the Fellowship. Get some!");
    };
    for (var i = 0; i < this.hobbits.length; i++) {
      var acceptHobbits = document.createElement('p');
      theFellowship.appendChild(acceptHobbits).innerHTML = this.hobbits[i];
      alert(this.hobbits[i] + " has joined the Fellowship. Hooray!");
    };
  }
}

fellowship.makeMiddleEarth();
fellowship.makeHobbits();
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies();
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
