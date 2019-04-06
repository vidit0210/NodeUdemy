const geocode = require('./Utils/geocode')
const forecast = require('./Utils/forecast')
let city = process.argv[2]
if (!city) {
    console.log('Please enter City')
} else {

    geocode(city, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log('Error', err);
        console.log('data', res);
        forecast(res.longitiude, res.latitude, (err, res) => {
            if (err) {
                return console.log(err)
            }
            console.log('Error', err);
            console.log('data', res);
        })
    })

}