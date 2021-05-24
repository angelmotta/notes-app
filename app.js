const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Adding a new note');
        notes.addNote(argv.title, argv.body);
    }
});

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder : {
        title: {
            describe: 'Note to be remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Removing note');
        notes.removeNote(argv.title);
    }
});

// List
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        console.log('Listing all notes');
    }
});

// Read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note');
    }
});

yargs.argv;
// console.log(yargs.argv);