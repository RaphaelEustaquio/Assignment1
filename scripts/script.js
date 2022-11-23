const newNoteButton = document.querySelector(".b1");

const darkThemeButton = document.querySelector(".b2");

const saveButton = document.querySelector(".b3");

const cancelButton = document.querySelector(".b4");

const sideBar = document.querySelector(".sidebar");

const textArea = document.querySelector(".notes");

const saveCancel = document.querySelector(".d2");

const sideBarList = document.querySelector(".asidelist");

const notesArray = [
    {
        title: "note one", 
        body: "this is my first note"
    },
    {
        title: "note two",
        body: "this is my second note"
    }
];

function darkTheme(){
    newNoteButton.classList.toggle("b1dark");
    saveButton.classList.toggle("b3dark");
    cancelButton.classList.toggle("b4dark");
    sideBar.classList.toggle("sidebardark");
    document.body.classList.toggle("textcontainerdark");
}

function changeName(){
    if (darkThemeButton.textContent === "Dark Theme"){
        darkThemeButton.textContent = "Light Theme";
    }
    else if (darkThemeButton.textContent === "Light Theme"){
        darkThemeButton.textContent = "Dark Theme";
    }
}

function hideTextArea(){
    textArea.classList.add("hidetext");
    saveCancel.classList.add("hidetext");
}

function newNote(){
    if (textArea.classList.contains("hidetext")){
        textArea.classList.remove("hidetext");
        saveCancel.classList.remove("hidetext");
    }
    else{
        textArea.value = '';
    }
}

function textAreaCheck(){
    if (textArea.value !== ""){
        let input = prompt("What is the title of the note?");
        notesArray.push({title:input, body: textArea.value});
        const listItemElement = document.createElement("li");
        listItemElement.textContent = input;
        sideBarList.appendChild(listItemElement);

    }
}

function displayNote(event){
    for(let note of notesArray){
        if(note.title.includes(event.target.textContent)){
            textArea.value = note.body;
        }
    }
}

darkThemeButton.addEventListener("click", darkTheme);

darkThemeButton.addEventListener("click", changeName);

cancelButton.addEventListener("click", hideTextArea);

newNoteButton.addEventListener("click", newNote);

saveButton.addEventListener("click", textAreaCheck);

sideBarList.addEventListener("click", displayNote);
