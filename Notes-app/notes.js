const fs = require('fs');

function getNotes() {
    console.log("your notes")
}

function AddNote(title, body) {
    let notes = loadNotes()
    let duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {

        notes.push({
            title,
            body
        })
        console.log('added')
        saveNotes(notes);
    } else {
        console.log('Duplicate Note Already Exist')
    }
}

function removeNote(title) {
    let notes = loadNotes();
    let filtered_notes = notes.filter((note) => {
        return note.title !== title;
    })
    saveNotes(filtered_notes);
}

function saveNotes(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))

}

function listNotes() {
    let notes = loadNotes();
    notes.forEach((note) => {
        console.log(note);
    })
}

function readNote(title) {
    let notes = loadNotes();
    let search_note = notes.find((note) => {
        return note.title == title;
    })
    console.log(search_note);

}

function loadNotes() {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        return []
    }
}

module.exports = {
    AddNote,
    removeNote,
    listNotes,
    readNote,

};