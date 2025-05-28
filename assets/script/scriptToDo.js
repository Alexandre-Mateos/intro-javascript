

addTask.addEventListener('click', () => {
    let inputContent = document.querySelector("#inputContent").value;  
    let taskList = document.querySelector("#toDoTasks");
    let newTask = document.createElement("li");
    let taskContent = document.createTextNode (inputContent);

    newTask.addEventListener('click', () =>{
        const newTaksClassLists = newTask.classList;
        if (newTaksClassLists.toggle("doneStyle")){
            newTask.classList.add("doneStyle");
        }
    });

    newTask.appendChild(taskContent);
    taskList.appendChild(newTask);
    newTask.classList.add("a-faire");
});

