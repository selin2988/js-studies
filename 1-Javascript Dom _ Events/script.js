const addBtn = document.querySelector("#btnAddNewTask");
const taskInput = document.querySelector("#txtTaskName");
const list = document.querySelector("#task-list");
const deleteAllBtn = document.querySelector("#btnDeleteAll");

let tasks = JSON.parse(localStorage.getItem("tasks"));
hepsiniGoster(tasks);

function hepsiniGoster(tasks) {
    list.innerHTML = "";

    if (tasks) {
        tasks.forEach(function (task, index) {
            goster(task, index);
        });
    }
}


addBtn.addEventListener("click", ekle);
list.addEventListener("click", sil);
deleteAllBtn.addEventListener("click", hepsiniSil);
taskInput.addEventListener("keypress", ekle);

function yaz(event) {
    console.log(event.keyCode);
}

function ekle(event) {

    if (event.type == "click" || event.keyCode == 13) {
        event.preventDefault();
        if (taskInput.value != "") {
            let arr = JSON.parse(localStorage.getItem("tasks"));
            if (!arr) {
                let dizi = [taskInput.value];
                localStorage.setItem("tasks", JSON.stringify(dizi));
            } else {
                arr.push(taskInput.value);
                localStorage.setItem("tasks", JSON.stringify(arr));
            }
            goster(taskInput.value, arr.length - 1);
            taskInput.value = "";
        }

    }

}

function goster(item, index) {
    let colorClass = "";
    if (index % 2 == 0) colorClass = "text-primary";
    else colorClass = "bg-primary text-white"
    let li = `<li class="list-group-item  ${colorClass}" id="${index}">${item}
    <a href="#" class="delete-item float-right text-dark">
        <i class="fas fa-times delete-item" id="${index}"></i>
    </a>
</li>`
    list.insertAdjacentHTML("beforeend", li);

}

function sil(event) {
    event.preventDefault();
    if (event.target.className == "fas fa-times delete-item") {
        if (confirm("Silmek istediğinize emin misiniz?")) {
            let index = Number(event.target.id);
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            hepsiniGoster(tasks);
        }

    }
}

function hepsiniSil(event) {
    event.preventDefault();
    if (confirm("Her şeyi silmek istediğinize emin misiniz? ")) {
        localStorage.setItem("tasks", JSON.stringify([]));
        hepsiniGoster(null);

    }
}