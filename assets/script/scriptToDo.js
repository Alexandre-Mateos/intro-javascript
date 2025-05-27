function addNewTask (){
    let inputContent = document.querySelector("#inputContent").value;  
    let taskList = document.querySelector("#to-do");
    let newTask = document.createElement("p");
    taskList.append(inputContent, newTask);
}

