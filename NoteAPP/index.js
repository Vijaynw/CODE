const btnEl = document.getElementById("btn");

const appEL = document.getElementById("app");

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content)
    appEL.insertBefore(noteEl, btnEl);

})


function addnote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
    
    const noteEl = createNoteEl(noteObj.id, noteObj.content)
    
    appEL.insertBefore(noteEl, btnEl)
    notes.push(noteObj);
    saveNote(notes);
}

function createNoteEl(id, content) {
    
    const element = document.createElement("textarea")
    
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;
    
    element.addEventListener("dblclick", () => {
        const warning = confirm("Are you sure you want to delete this note?");
        
        if (warning) {
            
            deleteNote(id, element)
        }
    })
    element.addEventListener("input", () => {
        updateNote(id, element.value);
        
    });
    return element;
};

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
    
}

function saveNote(note) {
    localStorage.setItem("note-app", JSON.stringify(note));
    
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id)
    saveNote(notes);
    appEL.removeChild(element);
    
}

function updateNote(id, content) {
    
    const notes = getNotes();
    
    const target = notes.filter((note) => note.id == id)[0];
    
    target.content = content;
    saveNote(notes);
    
}

btnEl.addEventListener("click", addnote)