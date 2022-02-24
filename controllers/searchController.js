


const axios = require('axios');
const key = process.env.KEY
const { History } = require('../models')

class Controller {

    static searchLocation = async (req, res, next) => {
        try {
            const { location } = req.query

            const { data: place } = await axios({
                method: 'get',
                url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=geometry&key=${key}`,
                headers: {}
            })
            const { data: nearbyPlace } = await axios({
                method: 'get',
                url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${place.candidates[0].geometry.location.lat},${place.candidates[0].geometry.location.lng}&radius=2000&type=lodging&key=${key}`,
                headers: {}
            })
            if (place) {
                let UserId = req.session.id
                let name = `Searching for hotels near ${location} by ${req.session.email}`
                const input = { name, UserId }
                const history = await History.create(input)
            }
            res.status(200).json({ place, nearbyPlace })

        } catch (err) {
            console.log(err)
        }
    }



}



module.exports = Controller