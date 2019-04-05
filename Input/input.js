const yargs = require('yargs');
// const command = process.argv[2].toLowerCase();
// if (command == 'add') {
//     console.log('Adding')
// }
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
        console.log('Title : ', argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes The Note ',
    handler() {
        console.log('Removing the Note')
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading the Notes',
    handler() {
        console.log('Reading out the Strings')
    }
})
yargs.command({
    command: 'list',
    describe: 'Listing all the Notes',
    handler() {
        console.log('Listing out the Commands')
    }
})

yargs.parse()