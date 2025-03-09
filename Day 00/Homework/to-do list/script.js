const form = document.getElementById('form');
const ul = document.getElementById("ul");

let arr = [];

const renderFunc = () => {
    ul.innerHTML = "";
    for (let i of arr){
        const li = document.createElement("li");
        li.innerHTML = `
            <li>
                <input type="checkbox" ${i.isComplete ? "checked" : "!checked"} />
                <p>${i.task}</p>
                <button>delete</button>
            </li>
        `;
        const btn = li.querySelector("button");
        btn.addEventListener('click', () => {
            arr = arr.filter(curval => curval.id != i.id);
            renderFunc();
        });
        ul.appendChild(li);
    }
}

function delTask(delId){
    arr = arr.filter(curval => curval.id != delId);
    renderFunc();
}

const handleSubmit = () => {
    ul.innerHTML = "";
    arr.push({id: Date.now(), task: form.elements.task.value, isComplete: false});
    renderFunc();
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    handleSubmit();
})