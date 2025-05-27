// récupère tout les h1

// let title = document.getElementsByTagName("h1");
// console.log(title);

// récupère l'élément via l'id 

// let titleById = document.getElementById("my-title");
// console.log(titleById);

// récupère l'élément via la class

// let titleByClass = document.getElementsByClassName("still-my-title");
// console.log(titleByClass);

// via querySelector

// let para1 = document.querySelector(".test-p");
// console.log(para1);

// let para2 = document.querySelector("[data-test]");
// console.log(para2);

// let para3 = document.querySelector("#bonjour");
// console.log(para3);

// let para4 = document.querySelectorAll("p")[3];
// console.log(para4);

// récupérer l'intérieur d'un élément HTML
// let stringPara2 = para2.innerHTML;
// console.log(stringPara2);

// remplace le contenu d'un élément HTML
// para4.innerHTML = "Au revoir";

// Supprime un élément HTML
// para3.remove();

// Exercice

// let monSpan = document.querySelector("#span01");
// let string = monSpan.innerHTML;
// if(monSpan.innerHTML.length > 2){
// monSpan.remove();
// }

// Exercice 1
// let textIdInfo = document.querySelector("#info");
// textIdInfo.innerHTML = "Bonjour, ceci est un nouveau texte.";

// Exercice 2
// let titleH2 = document.querySelectorAll("h2");
// for(let i = 0 ; i < titleH2.length ; i++){
//     titleH2[i].innerHTML = titleH2[i].innerHTML + " - Important";
// }

// Exerccice 3
// let elementToRemove = document.querySelector("#a-supprimer");
// elementToRemove.remove();

// Exercice 4
// let pElements = document.querySelectorAll("p");
// for (let i = 0 ; i < pElements.length ; i++)
// pElements[i].remove();

// Exercice 5
// let listeElements = document.querySelectorAll("#fruits li");
// const newElements = ["fraise", "kiwi"];
// for (let i = 0 ; i < listeElements.length ; i++){
//     listeElements[i].innerHTML = newElements[i];
// }

// Exercice 6
// let welcomeText = document.querySelector("#message");
// welcomeText.innerHTML = "Bienvenue sur la page !";

// Exercice 7
// let div = document.querySelector("#contenu");
// let divContent = document.querySelectorAll("#contenu p");
// for (let i = 0 ; i < divContent.length ; i++){
//     divContent[i].remove();
// }

// let newH3 = document.createElement("h3");
// div.append("nouveau titre", newH3);
// let newP = document.createElement("p");
// div.append("nouveau paragraphe", newP);

// Exercice 8

let listElement = document.querySelectorAll("li");
listElement[listElement.length-1].remove();

// Exercice 9
let divContent = document.querySelectorAll("[data-super-div] p");
for (let i = 0; i < divContent.length ; i++){
    if (divContent[i].innerHTML.includes("pokemon") ){
        divContent[i].remove();
    }
}