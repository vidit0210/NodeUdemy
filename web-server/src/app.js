const path = require('path');
const express = require('express');
//hbs for partials only
const hbs = require('hbs')
const app = express();
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');


{
    // app.get('', (req, res) => {
    //     res.send('Home Page');
    //servinng static way --- Index.html has a special meaning..
    // })
}

const pathToPublicDirectory = path.join(__dirname, '../public')
const pathToViewDirectory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsDirectory)

app.set('view engine', 'hbs')
app.set('views', pathToViewDirectory)


app.use(express.static(pathToPublicDirectory))


//Using Handle bars 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Vidit'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        page: 'Help',
        title: 'HELP TITLE',
        name: 'Vidit'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        Profession: 'BlockChain Developer',
        name: 'Vidit'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'No Address given'
        })

    }

    geocode(req.query.address, (err, {
        longitiude,
        latitude,
        location
    }) => {
        if (err) {
            return res.send({
                err
            })
        }

        forecast(longitiude, latitude, (err, foreCastData) => {
            if (err) {
                return res.send({
                    err
                })
            }
            res.send({
                longitiude,
                latitude,
                location,
                address: req.query.address,
                foreCastData
            })

        })
    })


})

//404-if no page is found

app.get('*', (req, res) => {
    res.render('404')

})
app.listen(3000, () => {
    console.log('Listening to Port 3000')
})