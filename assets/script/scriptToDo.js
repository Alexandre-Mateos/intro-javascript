let ajouterUneTache = document.querySelector("#addTask");
let selectionnerToutesLesTaches = document.querySelector("#selectAllTasks");
let champSaisie = document.querySelector("#inputContent");
let listeDeTaches = document.querySelector("#toDoTasks");
let supprimerUneTache = document.querySelector("#suppressTask");

/*
Listener ajoute une tâche au clique sur le bouton "Ajouter"("#addTask")
Commence par vérifier que l'input ("#inputContent") n'est pas vide
Appel la fonction createListElement() pour créer un nouvel élément
cliquable dans la liste.
 */
ajouterUneTache.addEventListener('click', () => {
    if(champSaisie.value.length >0){
        let nouvelleTache = createListElement();
        listeDeTaches.appendChild(nouvelleTache);
        nouvelleTache.classList.add("a-faire");
        champSaisie.value = "";
    }
});

/* applique le style done-style à tout les éléments de liste
*/
selectionnerToutesLesTaches.addEventListener('click', () => {
    let toDoLists = document.querySelectorAll("li");
    for (let i = 0 ; i < toDoLists.length ; i++){
        toDoLists[i].classList.add("done-style");
    }
})

/* Supprimer une ou des tâches en se basant sur le style .done-style
qui indique qu'un élément est "fait"
*/
supprimerUneTache.addEventListener('click', () => {
    let listeTacheRealisees = document.querySelectorAll(".done-style");
    for (let i = 0 ; i < listeTacheRealisees.length ; i++){
        listeTacheRealisees[i].remove();
    }
})

/* créer un élément de la liste et au clique sur cet élément
lui appliquer le style done-style (ou retourner au style de base si
done_style est déjà appliqué)
*/
function createListElement(){
        let nouvelleTache = document.createElement("li");
        nouvelleTache.innerHTML = champSaisie.value;   
        nouvelleTache.addEventListener('click', () =>{
        nouvelleTache.classList.toggle('done-style');
        });
        return nouvelleTache;
}