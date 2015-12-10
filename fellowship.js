var midEarth = document.getElementById('middle-earth');

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
    console.log(lands);
    // create a section tag with an id of middle-earth: Done
    // add each land as an article tag

    for (i=0;i<lands.length; i++){
      midEarth.innerHTML += "<article> <h1>" + lands[i] +"</h1></article>";
    }
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var ul = document.createElement('ul');
    hobbits.forEach(function(x){
      var li = document.createElement('li');
      var text = document.createTextNode(x);
      li.appendChild(text);
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
    var hobbitArr = document.querySelectorAll('li');
    // give each hobbit a class of hobbit
    for(i=0;i<hobbitArr.length;i++){
      if (hobbitArr[i].parentNode.parentNode.nodeName !== 'ASIDE'){
        hobbitArr[i].className = 'hobbit';
      }

    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.id = "the-ring";
    // add the ring as a child of Frodo
    document.querySelector('.hobbit').appendChild(ring);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var aside = document.createElement('aside');
    var ul = document.createElement('ul');
    buddies.forEach(function(x){
      var li = document.createElement('li');
      var text = document.createTextNode(x);
      li.appendChild(text);
      ul.appendChild(li);
    });

    aside.appendChild(ul);
    var rivendell = document.getElementsByTagName('article')[1];
    midEarth.insertBefore(aside, rivendell);
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strider=document.querySelector('aside ul li:nth-child(4)');
    strider.innerHTML = 'Aragorn';
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell

    var allFellowship = document.querySelectorAll('li');
    var ul = document.createElement('ul');

    // create a new div called 'the-fellowship'

    var div = document.createElement('div');
    var rivendell = document.getElementsByTagName('article')[1];
    var theFellowship = rivendell.appendChild(div);
    theFellowship.className = "the-fellowship";

    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    theFellowship.appendChild(ul);
    for (var i = 0; i < allFellowship.length; i++) {
      ul.appendChild(allFellowship[i]);
      alert(allFellowship[i].innerHTML + " has joined your party!");
    }

  }
};

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeBuddies(fellowship.buddies);
fellowship.makeHobbits(fellowship.hobbits);
