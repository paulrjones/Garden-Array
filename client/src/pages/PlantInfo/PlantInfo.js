import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
    makeStyles,
    Container,
    Button,
    Typography,
    Divider,
    Paper
} from '@material-ui/core'
import PlantInfoContext from '../../utils/PlantInfoContext'
import UserContext from '../../utils/UserContext'

const useStyles = makeStyles({
    paper: {
        padding: 10,
        marginTop: 10
    },
    mediaDiv: {
        width: '100%',
    },
    media: {
        height: 390,
        width: 390
    },
    text: {
        overflow: 'hidden'
    },
    divider: {
        marginBottom: 10
    },
    button: {
        margin: 8
    }
});

const PlantInfo = () => {

    const classes = useStyles()

    const plantId = (window.location.pathname).slice(12)
    const { isLoggedIn } = useContext(UserContext)
    const {
        common_name,
        scientific_name,
        family_common_name,
        duration,
        precipitation_max,
        precipitation_min,
        native_status,
        growth_habit,
        foliage_color,
        lifespan,
        drought_tolerance,
        mature_height,
        shade_tolerance,
        fruit_seed_color,
        bloom_period,
        growth_period,
        flower_color,
        handleRenderPlant
    } = useContext(PlantInfoContext)

    useEffect(() => {
        handleRenderPlant(plantId)
    }, [isLoggedIn])

    return (
        <>
            {console.log(plantId)}
            <Navbar />
            <Container>
                <Paper elevation={3} className={classes.paper}>
                    {common_name ?
                        (
                            <>
                                <Typography variant='h5' className={classes.text}>
                                    Common Name:
                    </Typography>
                                <Typography variant='h4' className={classes.text}>
                                    {common_name}
                                </Typography>
                            </>
                        ) : <></>}
                    {scientific_name ? 
                    (<Typography variant='subtitle1'>
                        Scientific Name: {scientific_name}
                    </Typography>) : <></>}
                    {family_common_name ? (<p>Family Common Name: {family_common_name}</p>) : <></>}
                    {duration ? (<p>Duration: {duration}</p>) : <></>}
                    {precipitation_max ? (<p>Precipitation(MAX): {precipitation_max}</p>) : <></>}
                    {precipitation_min ? (<p>Precipitation(MIN): {precipitation_min}</p>) : <></>}
                    {native_status ? (<p>Native Status: {native_status}</p>) : <></>}
                    {growth_habit ? (<p>Growth Habit: {growth_habit}</p>) : <></>}
                    {drought_tolerance ? (<p>Drought Tolerance: {drought_tolerance}</p>) : <></>}
                    {foliage_color ? (<p>Foliage Color: {foliage_color}</p>) : <></>}
                    {lifespan ? (<p>Lifespan: {lifespan}</p>) : <></>}
                    {mature_height ? (<p>Mature Height (ft): {mature_height}</p>) : <></>}
                    {shade_tolerance ? (<p>Shade Tolerance: {shade_tolerance}</p>) : <></>}
                    {fruit_seed_color ? (<p>Fruit or Seed Color: {fruit_seed_color}</p>) : <></>}
                    {bloom_period ? (<p>Bloom Period: {bloom_period}</p>) : <></>}
                    {growth_period ? (<p>Growth Period: {growth_period}</p>) : <></>}
                    {flower_color ? (<p>Flower Color: {flower_color}</p>) : <></>}
                    <Divider className={classes.divider} />
                    <Button
                        className={classes.button}
                        size='small'
                        color='primary'
                        variant='outlined'
                    >Save Info</Button>
                    <Button
                        size='small'
                        color='primary'
                        variant='outlined'
                    >More Plants</Button>
                </Paper>
            </Container>
            <Footer />
        </>
    )
}

export default PlantInfo