// Dramatis Personae
var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    'Meriadoc "Merry" Brandybuck',
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
  makeMiddleEarth: function() {
    // create a section tag with an id of middle-earth
    var middleEarth = document.createElement('section');
    middleEarth.id = "middle-earth";
    // add each land as an article tag
    this.lands.forEach(function(land) {
      var article = document.createElement('article');
      article.id = land;
      // inside each article tag include an h1 with the name of the land
      var h1 = document.createElement('h1');
      h1.textContent = land;
      article.appendChild(h1);
      middleEarth.appendChild(article);
    });
    // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  },
  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    var ul = document.createElement('ul');
    this.hobbits.forEach(function(hobbit) {
      var li = document.createElement('li');
      li.textContent = hobbit;
      // give each hobbit a class of hobbit
      li.className = "hobbit";
      ul.appendChild(li);
    });
    var shire = document.querySelector('article');
    shire.appendChild(ul);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.id = "the-ring";
    // add the ring as a child of Frodo
    var frodo = document.querySelector('.hobbit');
    frodo.appendChild(ring);
  },
  makeBuddies: function() {
    // create an aside tag
    var aside = document.createElement('aside');
    // display an unordered list of buddies in the aside
    var ul = document.createElement('ul');
    this.buddies.forEach(function(buddy) {
      var li = document.createElement('li');
      li.textContent = buddy;
      ul.appendChild(li);
    });
    aside.appendChild(ul);
    // insert your aside before rivendell
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.parentNode.insertBefore(aside, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.querySelectorAll('aside li');
    var strider = buddies[3];
    strider.textContent = "Aragorn";
  },

  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell

    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement('div');
    theFellowship.id = 'the-fellowship';

    // add each hobbit and buddy one at a time to 'the-fellowship'
    var hobbitList = document.getElementById('the-ring').parentNode.parentNode;
    var hobbitCount = hobbitList.childElementCount;
    var ul = document.createElement('ul');
    theFellowship.appendChild(ul);
    for (var i = 0; i < hobbitCount; i++) {
      var hobbit = hobbitList.childNodes[0];
      ul.appendChild(hobbit);
      // after each character is added make an alert that they have joined your party
      alert('Hobbit ' + hobbit.textContent + ' has joined the party');
    }

    var buddies = document.querySelectorAll('aside li');
    for (var j = 0; j < buddies.length; j++) {
      var buddy = buddies[j];
      ul.appendChild(buddy);
      alert('Buddy ' + buddy.textContent + ' has joined the party');
    }
    var rivendell = document.getElementById('Rivendell');
    rivendell.appendChild(theFellowship);
  },

  makeEverything: function() {
    this.makeMiddleEarth();
    this.makeHobbits();
    this.keepItSecretKeepItSafe();
    this.makeBuddies();
    this.beautifulStranger();
    this.forgeTheFellowShip();
  }
};

fellowship.makeEverything();
