const arr = [];

function addTask(task){
    arr.push({ task, completed: false });
}

function toggleTask(index){
    arr[index].completed = true;
}

function removeTask(index){
    arr.splice(index, 1);
}

export { addTask, toggleTask, removeTask };