let text;
let list;
let card;

function displayNads(){
    list = document.getElementById("petList)");
    text="";

    for(let i=0; i<petSalon.pets.length; i++){
        text += `<li>${petSalon.pets[i].name}</li>`;
        console.log("iteration" + i + " " + text);
    }

    // list.innerHTML
}