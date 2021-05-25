const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const existDuplicate = notes.find((note) => note.title === title);
    if (!existDuplicate) {
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse(`Your notes`));
    notes.forEach(note => {
        console.log(`Title: ${note.title}`);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse(`title: ${title}`));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse(`Note not found`));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

