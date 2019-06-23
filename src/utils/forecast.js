const request = require('request')

// const url = 'https://api.darksky.net/forecast/5130eaeb521ae8e0ecf03bb5d8f607c1/37.8267,-122.4233'
// request({ url: url, json: true }, (error, response) => {
//     //console.log(response.body.currently)
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
// })

const forecast = (lat, lng, callback) => {
    const url = 'https://api.darksky.net/forecast/5130eaeb521ae8e0ecf03bb5d8f607c1/' + encodeURIComponent(lat) + ',' + encodeURIComponent(lng)
    request({ url: url, json: true }, (error, response) => {
        const {body:b} = response
        const {currently:curr} = response.body
        if (error) {
            callback('Unable to reach forecast service..', undefined)
        } else if (b.error) {
            callback('Unable to get forecast for this location..', undefined)
        } else {
            callback(undefined, b.daily.data[0].summary + ' It is currently ' + curr.temperature + ' degrees out. There is a ' + curr.precipProbability + '% chance of rain.')
        }
    })

}

module.exports = forecast