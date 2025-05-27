let userForce = 10;
let catLife = 100;

let forceUtilisateur = document.querySelector("#force-utilisateur");
let vieDuChat = document.querySelector("#vie-du-chat");
let imageDuChaton = document.querySelector("#image-du-chaton");

function removeKitten(){
    imageDuChaton.remove()
}

imageDuChaton.addEventListener('click', () => {
catLife = catLife - userForce;
vieDuChat.innerHTML = catLife;
if (catLife === 30){
    alert("Attention ! Tu vas le tuer");
}
if(catLife < 10){
    alert ("Tu es un monstre !");
    imageDuChaton.src= "assets/img/explosion.gif";
    setTimeout(removeKitten, 500);
}
});
