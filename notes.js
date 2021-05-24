const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log(chalk.green.inverse(`New note added!`));
    } else {
        console.log(chalk.red.inverse(`Note title '${title}' already taken`));
    }
}

const addNoteV2 = function(title, body) {
    const notes = loadNotes();
    isUnique = true;
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].title == title) {
            console.log(`Note title '${title}'. Please use another title`);
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        notes.push({
            title: title,
            body: body
        });
        // save to File
        saveNotes(notes);
        console.log(chalk.green.inverse(`New note added!`));
    }
    else {
        console.log(chalk.red.inverse(`Note title '${title}' already taken`));
    }
}

const saveNotes = (notes) => {
    const  dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);    // return JObject
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    notes = loadNotes();
    isModified = false;
    const modNotes = notes.filter((note) => {
        if (note.title === title) {
            isModified = true;
        }
        return note.title !== title;
    });
    if (isModified) {
        console.log(chalk.black.bgGreen(`Note removed!`));
        saveNotes(modNotes);    // save to File
    } else {
        console.log(chalk.red.inverse(`No note found!`));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}

// Sample export only function getNotes
//module.exports = getNotes;


