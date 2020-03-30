const router = require('express').Router()
const axios = require('axios')

// Fixes CORS error
router.get('/plants/:type/:plantname', (req, res) => {
    console.log(req.params.type, req.params.plantname)
    axios.get(`http://trefle.io/api/plants/?token=MTlkYVBRamp0Q3ZzaG5NQ2JEbHYrQT09&${req.params.type}=${req.params.plantname}`)
        .then(({ data: plants }) => {
            res.json(plants)
        })
        .catch(e => console.error(e))
})

module.exports = router