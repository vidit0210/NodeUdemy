// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {
    MongoClient,
    ObjectID
} = require('mongodb');

const id = new ObjectID();
// console.log(id)
const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'tast-manager';
MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log(error);
    }
    const db = client.db(database);

    { // // db.collection('users').insertOne({
        // //     name: 'Vidit',
        // //     age: 22
        // // }, (error, result) => {
        // //     if (error) {
        // //         return console.log(error);
        // //     }
        // //     console.log(result.ops)
        // // })

        // // db.collection('users').insertMany([{
        // //     name: 'Rahul',
        // //     age: 22
        // // }, {
        // //     name: 'Ash',
        // //     age: 23
        // // }], (error, result) => {
        // //     if (error) {
        // //         return console.log("Unable to INsert Documenst")
        // //     }
        // //     console.log(result.ops)
        // // })
        // db.collection('tasks').insertMany([{
        //     description: 'Learn German',
        //     completed: false
        // }, {
        //     description: 'ES6',
        //     completed: false
        // }, {
        //     description: 'Assignments',
        //     completed: false
        // }], (error, result) => {
        //     if (error) {
        //         return console.log(error)
        //     }
        //     console.log(result.ops)
        // })
    }

    {
        // db.collection('users').findOne({
        //     name: 'Vidit'
        // }, (error, user) => {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log(user)
        // })
        // db.collection('tasks').find({
        // //     completed: false
        // // }).toArray((error, task) => {
        // //     console.log(task)
        // // })

        // db.collection('tasks').find({
        //     completed: false
        // }).count((error, task) => {
        //     console.log(task)
        // })

        // db.collection('tasks').findOne({
        //     _id: new ObjectID('5ca9b265b33bd14e5aa53571')
        // }, (error, result) => {
        //     if (error) {
        //         return console.log(error)
        //     }
        //     console.log(result);
        // })

    }
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ca9af18b2b0e54e078805d3')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})