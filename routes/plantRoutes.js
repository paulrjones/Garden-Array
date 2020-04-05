const router = require('express').Router()
const axios = require('axios')

// Fixes CORS error
router.get('/plants/:type/:plantname', (req, res) => {
    axios.get(`http://trefle.io/api/plants/?token=MTlkYVBRamp0Q3ZzaG5NQ2JEbHYrQT09&${req.params.type}=${req.params.plantname}&page_size=100`)
        .then(({ data: plants }) => {
            let arrPlants = []
            plants.forEach((completeData, i) => {
                if(completeData.complete_data === true) {
                    arrPlants.push(completeData)
                }
                // At last index -> Send Array of Plants
                if(i === plants.length - 1) {
                    res.json(arrPlants)
                }
            })
        })
        .catch(e => console.error(e))
})

router.get('/plants/:id', (req, res) => {
    axios.get(`http://trefle.io/api/plants/${req.params.id}?token=MTlkYVBRamp0Q3ZzaG5NQ2JEbHYrQT09`)
        .then(({ data: plant }) => {
            res.json(plant)
        })
        .catch(e => console.error(e))
})

// Gets One Plant for Info Page
router.get('/plantinfo/:id', (req, res) => {
    axios.get(`http://trefle.io/api/plants/${req.params.id}?token=MTlkYVBRamp0Q3ZzaG5NQ2JEbHYrQT09`)
        .then(({ data: plant }) => {
            // console.log(plant)
            res.json(plant)
        })
        .catch(e => console.error(e))
})

module.exports = router