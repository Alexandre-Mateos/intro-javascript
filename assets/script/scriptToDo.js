function addNewTask (){
    let inputContent = document.querySelector("#inputContent").value;  
    let taskList = document.querySelector("#to-do");
    let newTask = document.createElement("p");
    let taskContent = document.createTextNode (inputContent);
    newTask.appendChild(taskContent);
    taskList.appendChild(newTask);
}




