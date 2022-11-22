const darkThemeButton = document.querySelector(".b2");

const newNoteButton = document.querySelector(".b1");

const saveButton = document.querySelector(".b3");

const cancelButton = document.querySelector(".b4");

const sideBar = document.querySelector(".sidebar");

const textContainer = document.querySelector(".textcontainer");

const textArea = document.querySelector(".notes");

const saveCancel = document.querySelector(".d2");

function darkTheme(){
    newNoteButton.classList.toggle("b1dark");
    saveButton.classList.toggle("b3dark");
    cancelButton.classList.toggle("b4dark");
    sideBar.classList.toggle("sidebardark");
    document.body.classList.toggle("textcontainerdark");
};

function changeName(){
    if (darkThemeButton.textContent === "Dark Theme"){
        darkThemeButton.textContent = "Light Theme"
    }
    else if (darkThemeButton.textContent === "Light Theme"){
        darkThemeButton.textContent = "Dark Theme";
    };
};

function hideTextArea(){
    textArea.classList.add("hidetext");
    saveCancel.classList.add("hidetext")
}

function newNote(){
    if (textArea.classList.contains("hidetext")){
        textArea.classList.remove("hidetext")
        saveCancel.classList.remove("hidetext")
    }
    else{
        textArea.value = ''
    }
}

darkThemeButton.addEventListener("click", darkTheme);

darkThemeButton.addEventListener("click", changeName);

cancelButton.addEventListener("click", hideTextArea);

newNoteButton.addEventListener("click", newNote)
