const request = require('request')

const geocode = (address, callback) => {
    const m_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidmlkaXQwMjEwIiwiYSI6ImNqdTRmeW9lZzB1czczeXBlMDQ2aHUwN2UifQ.6mX4k9mmkr-KEM-9PbeZtQ&limit=1";
    request({
        url: m_url,
        json: true
    }, (err, res) => {
        if (err) {
            callback('Cannot Connect to the DataBase', undefined)
        } else if (res.body.features.length == 0) {
            callback('Cannot Find the Location Please try again', undefined);
        } else {
            callback(undefined, {
                longitiude: res.body.features[0].center[0],
                latitude: res.body.features[0].center[1],
                location: res.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode