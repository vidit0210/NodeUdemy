const request = require('request')
const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/820a7a3a9ee8766f4c0c4195c09035b3/" + encodeURIComponent(longitude) + "," + encodeURIComponent(latitude) + "?lang=en";
    request({
        url: url,
        json: true
    }, (err, res) => {
        if (err) {
            callback('Cannot Connect ot the DataBase', undefined);
        } else if (res.body.error) {
            callback('Got an Error,Check the Arguments being Passed', undefined);
        } else {
            let temp = res.body.currently.temperature;
            let precip = res.body.currently.precipProbability;
            let status = res.body.daily.data[0].summary;
            callback(undefined, status + ' Temperature is :' + temp + ' Raining Probability ' + precip);
        }
    })
}
module.exports = forecast;