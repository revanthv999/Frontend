// Variables
const inputBox = document.getElementById("task-input");
const addBtn = document.querySelector(".action-flex button");
const taskList = document.querySelector(".tasks-display ul.task-list");
const alertBox = document.querySelector(".alert-box");
const closeBtn = document.getElementById("close"); 
let loaderIntervalId;
let alertBoxTimerId;

const addTask = () => {
    if(!inputBox.value.trim()){
        showAlert();
    } else {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = "./images/unchecked.svg";
        li.appendChild(img);
        li.innerHTML += inputBox.value.trim();
        li.classList.add("task");
    
        taskList.appendChild(li);
        saveData();
    }

    inputBox.value = "";
};

const showAlert = () => {
    addBtn.style.pointerEvents = "none";
    alertBox.classList.add("alert-box-active");
    let loaderWidth = 100;
    const loaderEl = document.querySelector(".alert-box .loader");
    const totalDuration = 5000;

    loaderIntervalId = setInterval(() => {
        loaderWidth -= 1;
        loaderEl.style.width = loaderWidth + "%";
    }, (totalDuration/100));

    alertBoxTimerId = setTimeout(() => {
        closeAlert();
    }, totalDuration);
};

const closeAlert = () => {
    clearInterval(loaderIntervalId);
    clearTimeout(alertBoxTimerId);
    alertBox.classList.remove("alert-box-active");
    alertBox.querySelector(".loader").style.width = "100%";
    addBtn.style.pointerEvents = "all";
};

const taskCompleteHandler = (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.classList.add("completed");
        e.target.src = "./images/checked.svg";
        setTimeout(() => {
            taskList.removeChild(e.target.parentElement);
            saveData();        
        }, 700);
    }
};

const saveData = () => {
    localStorage.setItem("tasks", taskList.innerHTML);
};

const fetchData = () => {
    taskList.innerHTML = localStorage.getItem("tasks");
};

// Event Listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", (e) => {taskCompleteHandler(e)});
closeBtn.addEventListener("click", closeAlert);
fetchData();