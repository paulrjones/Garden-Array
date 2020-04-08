const router = require('express').Router()
const axios = require('axios')
const { Garden } = require('../models')

// Fixes CORS error
router.get('/plants/:type/:plantname/:data', (req, res) => {
    axios.get(`http://trefle.io/api/plants/?token=MTlkYVBRamp0Q3ZzaG5NQ2JEbHYrQT09&${req.params.type}=${req.params.plantname}&page_size=100`)
        .then(({ data: plants }) => {
            if (req.params.data === 'incompleteData') {
                res.json(plants)
            } else {
                let arrPlants = []
                plants.forEach((completeData, i) => {
                    if (completeData.complete_data === true) {
                        arrPlants.push(completeData)
                    }
                    // At last index -> Send Array of Plants
                    if (i === plants.length - 1) {
                        res.json(arrPlants)
                    }
                })
            }
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
            res.json(plant)
        })
        .catch(e => console.error(e))
})

// Get One Plant from DB
router.get('/savedplant/:id', (req, res) => {
    Garden.findById(req.params.id)
        .then(plant => {
            res.json(plant)
        })
        .catch(e => console.error(e))
})

// Add Plant to Garden
router.put('/addplant/:id', (req, res) => {
    Garden.findByIdAndUpdate(req.params.id, { $push: { plants: req.body } })
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

// Delete Plant from Garden
router.put('/deleteplant/:gardenId', (req, res) => {
    Garden.findByIdAndUpdate(req.params.gardenId, {
        $pull: {
            plants: {
                saved_plant_id: req.body.plantid,
                saved_common_name: req.body.common_name,
                saved_scientific_name: req.body.scientific_name,
                saved_family_common_name: req.body.family_common_name,
                saved_duration: req.body.duration,
                saved_precipitation_max: req.body.precipitation_max,
                saved_precipitation_min: req.body.precipitation_min,
                saved_native_status: req.body.native_status,
                saved_growth_habit: req.body.growth_habit,
                saved_foliage_color: req.body.foliage_color,
                saved_lifespan: req.body.lifespan,
                saved_drought_tolerance: req.body.drought_tolerance,
                saved_mature_height: req.body.mature_height,
                saved_shade_tolerance: req.body.shade_tolerance,
                saved_fruit_seed_color: req.body.fruit_seed_color,
                saved_bloom_period: req.body.bloom_period,
                saved_growth_period: req.body.growth_period,
                saved_flower_color: req.body.flower_color,
                saved_plant_qty: req.body.plant_qty
            }
        }
    })
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

module.exports = router