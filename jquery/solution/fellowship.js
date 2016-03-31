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
    var middleEarth = $('<section>');
    middleEarth.attr('id', "middle-earth");

    // add each land as an article tag
    $.each(this.lands, function(index, land) {
      var article = $('<article>');
      // inside each article tag include an h1 with the name of the land
      var h1 = $('<h1>' + land + '</h1>')
      article.append(h1);
      middleEarth.append(article);
    });
    // append middle-earth to your document body
    $('body').append(middleEarth);
  },

  // 2
  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    var hobbitsList = $('<ul>');
    $.each(this.hobbits, function(index, hobbit){
      var li = $('<li>' + hobbit + '</li>');
      // give each hobbit a class of hobbit
      li.addClass('hobbit');
      hobbitsList.append(li);
    });
    var shire = $('article').first();
    shire.append(hobbitsList);
  },

  // 3
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = $('<div>');
    ring.attr('id', 'ring');
    // add the ring as a child of Frodo
    var frodo = $('.hobbit').first();
    frodo.append(ring);
  },

  // 4
  makeBuddies: function() {
    // create an aside tag
    var aside = $('<aside>');
    var buddiesList = $('<ul>');
    buddiesList.addClass('buddies');
    // display an unordered list of buddies in the aside
    $.each(this.buddies, function(index, buddy){
      var li = $('<li>' + buddy + '</li>');
      li.addClass('buddy');
      // just for fun, set the background color for Gandalf the Grey
      if( buddy === "Gandalf the Grey" ) {
        li.css('background', 'grey');
      }
      buddiesList.append(li);
    });
    aside.append(buddiesList);
    // insert your aside before rivendell
    $('article:eq(1)').before(aside);
  },

  // 5
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strider = $('.buddies li:nth-child(3)');
    strider.text('Aragorn');
  },

  // 6
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var rivendell = $('article:eq(1)');

    // create a new div called 'the-fellowship'
    var theFellowship = $('<div>');
    theFellowship.attr('id', 'the-fellowship');
    var fellowshipList = $('<ul>');
    theFellowship.append(fellowshipList);

    rivendell.append(theFellowship);
    // add each hobbit and buddy one at a time to 'the-fellowship'
    hobbitList = $('.hobbit');
    $.each(hobbitList, function(index, hobbit){
      fellowshipList.append(hobbit);
      // after each character is added make an alert that they have joined your party
      alert('Hobbit ' + hobbit.textContent + " has joined!");
    });

    buddyList = $('.buddy');
    $.each(buddyList, function(index, buddy){
      fellowshipList.append(buddy);
      console.log(buddy.textContent + " has joined!");
      alert('Buddy ' + buddy.textContent + " has joined!");
    });
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
