const axios = require('axios');
const key = process.env.KEY


const gmap = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/place/`
})

// const findPlace = axios.create({
//     method: 'get',
//     url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=geometry&key=${key}`,
//     headers: {}
// });


// const findNearby = axios.create({
//     method: 'get',
//     url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=hotel&key=${key}`,
//     headers: {}
// });


// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


module.exports = { gmap }