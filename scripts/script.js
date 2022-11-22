const darkThemeButton = document.querySelector(".b2");

const newNoteButton = document.querySelector(".b1");

const saveButton = document.querySelector(".b3");

const cancelButton = document.querySelector(".b4");

function darkTheme(){
    newNoteButton.classList.add("b1dark");
    saveButton.classList.add("b3dark");
    cancelButton.classList.add("b4dark");
};

darkThemeButton.addEventListener("click", darkTheme);