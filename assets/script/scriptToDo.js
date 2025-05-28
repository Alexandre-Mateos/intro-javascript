let ajouterUneTache = document.querySelector("#addTask");
let selectionnerToutesLesTaches = document.querySelector("#selectAllTasks");
let champSaisie = document.querySelector("#inputContent");
let listeDeTaches = document.querySelector("#toDoTasks");

/*
 * Listener ajoute une tâche au clique
 */
ajouterUneTache.addEventListener('click', () => {
    if(champSaisie.value.length >0){
        let nouvelleTache = createListElement();
        listeDeTaches.appendChild(nouvelleTache);
        nouvelleTache.classList.add("a-faire");
        champSaisie.value = "";
    }
});

// applique le style done-style à tout les éléments de liste
selectionnerToutesLesTaches.addEventListener('click', () => {
    let toDoLists = document.querySelectorAll("li");
    for (let i = 0 ; i < toDoLists.length ; i++){
        toDoLists[i].classList.add("done-style");
    }
})


// créer un élément de la liste
function createListElement(){
        let nouvelleTache = document.createElement("li");
        nouvelleTache.innerHTML = champSaisie.value;   
        nouvelleTache.addEventListener('click', () =>{
            nouvelleTache.classList.toggle('done-style');
        });
        return nouvelleTache;
}