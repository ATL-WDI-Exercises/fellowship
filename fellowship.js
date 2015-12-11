var lands = ["The Shire", "Rivendell", "Mordor"];

var hobbits = [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ];

var buddies = [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ];

function makeMiddleEarth(lands) {
    console.log(lands);

    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body

    //creates a new section
    var newSection = document.createElement("section");


    //creates articles, h1s and adds lands to the h1s.
    for( i = 0 ; i < lands.length ; i++) {

        var newArticle = document.createElement("article");
        newSection.appendChild(newArticle);
        var newH1 = document.createElement("h1");
        newArticle.appendChild(newH1);
        var newText = document.createTextNode(lands[i]);
        newH1.appendChild(newText);
        }
    //puts the new section and its contents in the body
    var currentSpot = document.querySelector("body");
    currentSpot.appendChild(newSection);
}


function makeHobbits(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    //adds an unordered list to the first h1

    var firstH1 = document.querySelector('h1');
    var newList = document.createElement('ul');
    firstH1.appendChild(newList);

    //adds the list of hobbits to the ul in the first h1
    for(i = 0; i < hobbits.length ; i++) {


    var newListMember = document.createElement('li');
    var newHobbit = document.createTextNode(hobbits[i]);

    newList.appendChild(newListMember);
    newListMember.appendChild(newHobbit);
    }
}

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo


    var divOne = document.createElement('div');
    divOne.id = "the-ring";
    var thisLi = document.querySelector('li');
    thisLi.appendChild(divOne);

}

function makeBuddies(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var aside = document.createElement('aside');
    var listTwo = document.createElement('ul');
    aside.appendChild(listTwo);

    for(i = 0; i < buddies.length ; i++) {
    var listMemberTwo = document.createElement('li');
    var newBuddy = document.createTextNode(buddies[i]);

    listTwo.appendChild(listMemberTwo);
    listMemberTwo.appendChild(newBuddy);
    }

    var wantedSection = document.getElementsByTagName('section')[1];
    wantedSection.id = ('this is the section');
    wantedSection.insertBefore(aside, wantedSection.childNodes[1]);
}

function beautifulStranger() {
    var asideUlId = document.querySelector("aside ul");
    asideUlId.id = "buddies";
    asideUlId.getElementsByTagName('li')[3].innerHTML = "Aragorn";
}

function forgeTheFellowShip() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

//moving buddies and hobbits to Rivendell
var buddiesList = document.querySelector('#buddies');
var wantedArticle = document.getElementsByTagName('article')[1];
wantedArticle.appendChild(buddiesList);

var listOfHobbits = document.getElementsByTagName('ul')[0];
listOfHobbits.id = ('hobbits');
var hobbitsList = document.querySelector('#hobbits');
wantedArticle.appendChild(hobbitsList);

//creates the-fellowship div
var fellowshipDiv = document.createElement('div');
fellowshipDiv.id = ('the-fellowship');
wantedArticle.appendChild(fellowshipDiv);

//adds buddies and hobbits to fellowship div
var listingHobbits = document.createElement('ul');
fellowshipDiv.appendChild(listingHobbits);
var listingBuddies = document.createElement('ul');
fellowshipDiv.appendChild(listingBuddies);

for(i = 0; i < hobbits.length; i++) {
    var hobbitForAlert = hobbits[i];
    var listThree = document.createElement('li');
    var roamingHobbit = document.createTextNode(hobbits[i]);
    listingHobbits.appendChild(listThree);
    listThree.appendChild(roamingHobbit);
    alert(hobbitForAlert + " has joined our party!");
}



for(i = 0; i < buddies.length; i++) {
    var buddyForAlert = buddies[i];
    var listFour = document.createElement('li');
    var roamingBuddy = document.createTextNode(buddies[i]);
    listingBuddies.appendChild(listFour);
    listFour.appendChild(roamingBuddy);
    alert(buddyForAlert + " has joined our party!");
}

  }



makeMiddleEarth(lands);
makeHobbits(hobbits);
keepItSecretKeepItSafe();
makeBuddies(buddies);
beautifulStranger();
forgeTheFellowShip();












