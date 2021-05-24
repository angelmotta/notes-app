const chalk = require('chalk');
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
    handler: function(argv) {
        console.log('Adding a new note');
        notes.addNote(argv.title, argv.body);
    }
});

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing the note');
    }
});

// List
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing all notes');
    }
});

// Read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note');
    }
});

yargs.argv;
// console.log(yargs.argv);