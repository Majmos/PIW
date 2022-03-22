'use strict';
console.clear();

let bin;

const addItem = () => {
    const txtBox = document.getElementById("input-textbox");
    if (txtBox.value === "") {
        console.warn("Pole jest puste!");

        $("#modal").toggle();
        $("#modal").off("click").click(() => {
            $("#modal").toggle();
        });
        return;
    }
    const list = document.getElementById("example-list");
    const li = document.createElement('li');
    const toDoText = document.createElement('span');
    toDoText.className = "undone";
    const completedDate = document.createElement('span');
    completedDate.className = "date-text";
    const deleteButton = $('<button class="delete-button">Usuń</button>');
    deleteButton.click((event) => {
        if(!confirm("Czy na pewno chcesz usunąć element? Możesz cofnąć jedno usunięcie przy pomocy ctrl + z.")) {
            return;
        }
        const text = event.target.parentElement.children[0].innerText;
        bin = text;
        event.target.parentElement.remove();
    });
    toDoText.innerText = txtBox.value;
    li.addEventListener("click", check);
    li.append(toDoText, completedDate);
    $(li).append(deleteButton);
    list.appendChild(li);
    txtBox.value = "";
}

const check = (event) => {
    const list = document.getElementById("example-list");
    let elem = event.target;
    if (elem.className === "delete-button") {
        return;
    }
    if (elem.children.length === 0) {
        elem = elem.parentElement;
    }
    const date = new Date();
    if (elem.children[0].className == "undone") {
        elem.children[0].className = "done";
        elem.children[1].innerText = date.toLocaleString("pl-PL");
    } else {
        elem.children[0].className = "undone";
        elem.children[1].innerText = "";
    }
}

const deleteItem = (event) => {
    console.log("B)");
}

document.getElementById("input-textbox").addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

$(document).keyup((event) => {
    if (event.key === 'z' && event.ctrlKey && bin) {
    const list = document.getElementById("example-list");
    const li = document.createElement('li');
    const toDoText = document.createElement('span');
    toDoText.className = "undone";
    const completedDate = document.createElement('span');
    completedDate.className = "date-text";
    const deleteButton = $('<button class="delete-button">Usuń</button>');
    deleteButton.click((event) => {
        if(!confirm("Czy na pewno chcesz usunąć element? Możesz cofnąć jedno usunięcie przy pomocy ctrl + z.")) {
            return;
        }
        const text = event.target.parentElement.children[0].innerText;
        bin = text;
        event.target.parentElement.remove();
    });
    toDoText.innerText = bin;
    li.addEventListener("click", check);
    li.append(toDoText, completedDate);
    $(li).append(deleteButton);
    list.appendChild(li);
        bin = null;
    }
});