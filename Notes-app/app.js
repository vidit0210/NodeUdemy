const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes')
// console.log(validator.isEmail('vidit'))
// console.log(chalk.red('Error'));

yargs.command({
    command: 'add',
    describe: 'Adds a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title : ', argv.title)
        console.log('Body : ', argv.body)
        notes.AddNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes The Note ',
    builder: {
        title: {
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Removing the Note')
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading the Notes',
    builder: {
        title: {
            describe: 'read a Particular Load',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'Listing all the Notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()