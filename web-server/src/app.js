const path = require('path');
const express = require('express');
const app = express(); {
    // app.get('', (req, res) => {
    //     res.send('Home Page');
    //servinng static way --- Index.html has a special meaning..
    // })
}

const pathToPublicDirectory = path.join(__dirname, '../public')
app.use(express.static(pathToPublicDirectory))

app.get('/weather', (req, res) => {
    res.send([{
        location: 'Mumbai',
        temp: 33
    }])
})
app.listen(3000, () => {
    console.log('Listening to Port 3000')
})