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
    //console.log(lands)
    // create a section tag with an id of middle-earth
    var sec = document.createElement('section');
    sec.id = "middle-earth";
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    for (i = 0; i < fellowship.lands.length; i++) {
      var art = sec.appendChild(document.createElement('article'));
      var region = art.appendChild(document.createElement('h1'));
      region.innerHTML = fellowship.lands[i];
    };
    // append middle-earth to your document body
    document.body.appendChild(sec);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var ul = document.createElement('ul');
    for (i = 0; i < fellowship.hobbits.length; i++) {
    var li = ul.appendChild(document.createElement('li'));
    // give each hobbit a class of hobbit
    li.className = 'hobbit';
    li.innerHTML = fellowship.hobbits[i];
    };
    document.body.appendChild(ul);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.id = 'the-ring';
    // add the ring as a child of Frodo
    var frodo = document.querySelector('.hobbit');
    frodo.appendChild(ring);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var aside = document.createElement('aside');
    // display an unordered list of buddies in the aside
    for (i = 0; i < fellowship.buddies.length; i++) {
      var li = aside.appendChild(document.createElement('li'));
      li.innerHTML = fellowship.buddies[i];
    }
    // insert your aside before rivendell
    var locs = document.getElementsByTagName('article');
    locs[0].appendChild(aside);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var king = document.getElementsByTagName('li');
    king[3].innerHTML = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var loc = document.getElementsByTagName('article')[1];
    var characters = document.querySelectorAll('li');
    var ul = document.createElement('ul');
    var div = document.createElement('div');
    var flwshp = loc.appendChild(div);
    flwshp.className = "the-fellowship";
    flwshp.appendChild(ul);
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    for (var i = 0; i < characters.length; i++) {
      ul.appendChild(characters[i]);
      alert(characters[i].innerText + " has joined your party!");
    }
  }
