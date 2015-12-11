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
    var middleEarth = document.createElement('section');
    middleEarth.setAttribute('id','middle-earth');
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    lands.forEach(function(l) {
      var land = document.createElement('article');
      var title = document.createElement('h1');
      var titleText = document.createTextNode(l);
      var landImgTag = document.createElement('img');

      title.appendChild(titleText);
      land.appendChild(title);
      middleEarth.appendChild(land);
    });

    // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var list = document.createElement('ul');
    var shire = document.getElementsByTagName('article')[0];

    hobbits.forEach(function(h){
      var hobbit = document.createElement('li');
      var name = document.createTextNode(h);
      hobbit.appendChild(name);

      // give each hobbit a class of hobbit
      hobbit.setAttribute('class','hobbit');
      list.appendChild(hobbit);
    });

    shire.appendChild(list);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var secret = document.createElement('div');

    secret.setAttribute('id', 'the-ring');

    // add the ring as a child of Frodo
    document.querySelector('.hobbit').appendChild(secret);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var buddiesAside = document.createElement('aside');
    var buddiesList = document.createElement('ul');

    // display an unordered list of buddies in the aside
    buddies.forEach(function(b){
      var buddy = document.createElement('li');
      var buddyName = document.createTextNode(b);
      buddy.appendChild(buddyName);
      buddiesList.appendChild(buddy);
    });

    buddiesAside.appendChild(buddiesList);

    // insert your aside before rivendell
    var rivendell = document.getElementsByTagName('article')[1];
    var middleEarth = document.getElementById('middle-earth');

    middleEarth.insertBefore(buddiesAside, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strangerParent = document.querySelectorAll('li')[7];

    strangerParent.innerHTML = 'Aragorn';

  },
  forgeTheFellowShip: function() {
    // create a new div called 'the-fellowship'
    var fellowshipForged = document.createElement('div');
    fellowshipForged.setAttribute('id','the-fellowship');
    var fellow;
    var fellowName;

    // move the hobbits and the buddies to Rivendell
    var rivendell = document.getElementsByTagName('h1')[1];

    fellowship.buddies.splice(3,1, 'Aragorn');

    fellowship.buddies.forEach(function(b) {
      fellow = document.createElement('div');
      fellowName = document.createTextNode(b);
      fellow.appendChild(fellowName);
      alert(b + ' has joined our quest.');
      return fellowshipForged.appendChild(fellow);
    });

    fellowship.hobbits.forEach(function(h) {
      fellow = document.createElement('div')
      fellowName = document.createTextNode(h);
      fellow.appendChild(fellowName);
      alert(h + ' has joined our quest.');
      return fellowshipForged.appendChild(fellow);
    });

    // after each character is added make an alert that they have joined your party
    alert('The Fellowship has been forged.');

    var pastTravels = document.querySelectorAll('ul');

    for(var i = 0; i < pastTravels.length; i++) {
      pastTravels[i].style.display = 'none';
    }

    var locales = document.getElementsByTagName('article')[1];
    locales.appendChild(fellowshipForged);
  }
}

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
setTimeout(fellowship.forgeTheFellowShip, 1200);

