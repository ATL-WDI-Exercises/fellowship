var lands = ["The Shire", "Rivendell", "Mordor"];

  var hobbits = [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ];

  buddies: [
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

    //adds an unordered list to the first h1
    var firstH1 = document.querySelector('h1');
    var newList = document.createElement('ul');
    firstH1.appendChild(newList);

    //adds the list of hobbits to the ul in the first h1
    for(i = 0; i < hobbits.length ; i++) {
    console.log(hobbits[i]);

    var newListMember = document.createElement('li');
    var newHobbit = document.createTextNode(hobbits[i]);

    newList.appendChild(newListMember);
    newListMember.appendChild(newHobbit);
    }

    var divOne = document.createElement("div");
    divOne.id = "the-ring";
    newList.firstChild.appendChild(divOne);


}

makeMiddleEarth(lands);

//newSection.id = "middle-earth";







