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
    // h1.innerText = lands[i];
    // article.insertAdjacentElement("afterbegin", h1);
    // middleEarth.appendChild(article);
    // append middle-earth to your document body

    var section=document.createElement("section");
    section.id = "middle-earth";
    document.body.appendChild(section);


    for (var i = 0 ;  i < lands.length; i++) {

        var article = document.createElement("article");
        var h1 = document.createElement("h1");
        h1.innerHTML = lands[ i ];
        article.appendChild(h1);
        section.appendChild(article);
      
        } //close for loop
 
    },  //close makeMiddleEarth

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbits

      var ul = document.createElement("ul");
      for(var i = 0; i < hobbits.length; i++) {

        var li = document.createElement("li");
        li.innerHTML = hobbits[ i ];
        li.classList.add ("hobbits");
        ul.appendChild(li);
    
        }//close for

         var shire = document.getElementsByTagName("article")[0];
        shire.appendChild(ul);
        
        }, //close makeHobbits

   

  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    
      var ring = document.createElement("div");
      ring.id = "the-ring";
      document.getElementsByClassName("hobbits")[ 0 ].appendChild(ring);
  
    },
  
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var aside = document.createElement("aside");
    var ul = document.createElement("ul");

      for(var i = 0; i < buddies.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = buddies[i];
        ul.appendChild(li);
      }
      aside.appendChild(ul);

      var middleEarth = document.getElementById("middle-earth");
      middleEarth.insertBefore(aside,middleEarth.childNodes[1]);
},
  
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var stranger = document.querySelector("aside ul").childNodes;
    stranger [ 3 ].textContent="Aragorn";
    },
  
  forgeTheFellowShip: function(li) {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var riv = document.getElementsByTagName ("article")[1];
    var li = document.querySelectorAll("li");
    var ul = document.createElement("ul");
    

    var theFellowship = document.createElement("div");
    theFellowship.id = "the-fellowship";
    riv.appendChild(theFellowship);
    theFellowship.appendChild(ul)

    for (var i = 0; i < li.length ; i++) {
      ul.appendChild( li [ i ] );
      alert(li [ i ] .innerHTML + " has joined my party")

    }
  },
    }

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();