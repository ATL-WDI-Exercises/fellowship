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

  //1
  makeMiddleEarth: function() {
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },

  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },

  // 3
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },

  // 4
  makeBuddies: function() {
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
