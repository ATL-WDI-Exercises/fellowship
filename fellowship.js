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
  makeMiddleEarth: function() {
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    $('#middle-earth').append('<article></article>');
    for (i = 0; i < fellowship.lands.length; i++) {
      $('article').append('<h1 id=' +fellowship.lands[i]+'>' + fellowship.lands[i] + '</h1>');
    }

  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    $('#The').append('<ul></ul>');
    for (i = 0; i < fellowship.hobbits.length; i++) {
    $('#The ul').append('<li class="hobbit" id=' + fellowship.hobbits[i] + '>' + fellowship.hobbits[i] + '</li>');
    }

  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    $('#Frodo').append('<div id="the-ring">The Ring</div>');
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    for (i = 0; i < fellowship.buddies.length; i++) {
    $('#The ul').append('<li class="buddy" id=' + fellowship.buddies[i] + '>' + fellowship.buddies[i] + '</li>');
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    $('#Strider').html('Aragorn');
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  $('#Rivendell').append($('.hobbit'));
  $('#Rivendell').append($('.buddy'));
  $('#Rivendell').append('<br><div id="the-fellowship"></div>');
  for (i = 0; i < fellowship.hobbits.length; i++) {
    $('#the-fellowship').append(fellowship.hobbits[i] + '<br>');
    alert(fellowship.hobbits[i] + " has joined the fellowship.");
  }
  for (i = 0; i < fellowship.buddies.length; i++) {
    $('#the-fellowship').append(fellowship.buddies[i] + '<br>');
    alert(fellowship.buddies[i] + " has joined the fellowship.");
  }
  }
};


fellowship.makeMiddleEarth();
fellowship.makeHobbits();
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies();
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
