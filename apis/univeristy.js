const axios = require("axios")

const university = axios.create({
    baseURL: 'http://universities.hipolabs/'
})

module.exports = {university}
