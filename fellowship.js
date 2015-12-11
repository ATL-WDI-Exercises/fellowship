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
  makeMiddleEarth: function(land) {
    console.log(land);

    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body

  $('#middle-earth').append('<article class ="lands"></article>');
  for (i = 0; i < land.length; i++) {
    $('.lands').append('<h1 id='+land[i]+'>'+land[i]+'</h1>');
    }
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit

  $('#The').append('<ul class="hobList"></ul>');
  for (var i = 0; i < hobbits.length; i++) {
    $('.hobList').append('<li class='+hobbits[i]+'>'+hobbits[i]+'</li>');
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo

  $('.Frodo').append('<div id="the-ring">The Ring</div>');
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell

  $('#Rivendell').before('<aside></aside>');
  $('aside').append('<ul class ="buds"></ul>');
  for (var i = 0; i < buddies.length; i++) {
    $('.buds').append('<li>'+buddies[i]+'</li>');
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"

  $('.buds li').eq(3).html('Aragorn');
  fellowship.buddies[3] = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

  $('#Rivendell').append($('.hobList'));
  $('#Rivendell').append($('.buds'));
  $('body').append('<div id="the-fellowship"><h2>The Fellowship</h2><br></div>');
  for (var i = 0; i < fellowship.hobbits.length; i++){
    $('#the-fellowship').append(fellowship.hobbits[i]+'<br>');
    alert(fellowship.hobbits[i]+" has joined the party");
    //noprotect
    }
  for (var j = 0; j < fellowship.buddies.length; j++){
    $('#the-fellowship').append(fellowship.buddies[j]+'<br>');
    alert(fellowship.buddies[j]+" has joined the party");
    }
  }
};
//fellowship.makeMiddleEarth(fellowship.lands);
//fellowship.makeHobbits(fellowship.hobbits);
//fellowship.keepItSecretKeepItSafe();
//fellowship.makeBuddies(fellowship.buddies);
//fellowship.beautifulStranger();
//fellowship.forgeTheFellowShip();
