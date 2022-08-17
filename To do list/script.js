const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (task === '') {
        alert("Please enter a task");
        return;
    }
        
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("task-content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("task-text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", true);

    task_content_el.appendChild(task_input_el);
        
    const task_fiture_el = document.createElement("div");
    task_fiture_el.classList.add("fiture");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_fiture_el.appendChild(task_edit_el);
    task_fiture_el.appendChild(task_delete_el);

    task_el.appendChild(task_fiture_el);

    ul.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
        } else {
            task_input_el.setAttribute("readonly", true);
            task_edit_el.innerText = "Edit";
        }
    });

    task_delete_el.addEventListener('click', () => {
        ul.removeChild(task_el);
    });
});