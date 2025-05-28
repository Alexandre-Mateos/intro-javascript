

addTask.addEventListener('click', () => {
    let inputContent = document.querySelector("#inputContent").value;  
    let taskList = document.querySelector("#toDoTasks");
    if(inputContent.length >0){
        let newTask = document.createElement("li");
        let taskContent = document.createTextNode (inputContent);
        
        newTask.addEventListener('click', () =>{
            const newTaksClassLists = newTask.classList;
            if (newTaksClassLists.toggle("done-style")){
                newTask.classList.add("done-style");
            }
        });
        
        newTask.appendChild(taskContent);
        taskList.appendChild(newTask);
        newTask.classList.add("a-faire");
        document.querySelector("#inputContent").value = "";
    }
});

selectAllTasks.addEventListener('click', () => {
    let toDoLists = document.querySelectorAll("li");
    for (let i = 0 ; i < toDoLists.length ; i++){
        toDoLists[i].classList.add("done-style");
    }
})

