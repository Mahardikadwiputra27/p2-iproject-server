


const axios = require('axios');
const key = process.env.KEY

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

            res.status(200).json({place, nearbyPlace})

        } catch (err) {
            console.log(err)
        }
    }



}



module.exports = Controller