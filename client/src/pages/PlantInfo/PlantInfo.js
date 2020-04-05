import React from 'react'
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

    return (
        <>
            <Navbar />
            <Container>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant='h5' className={classes.text}>
                        Common Name:
                    </Typography>
                    <Typography variant='h4' className={classes.text}>
                        'Plant Name Here'
                    </Typography>
                    <Typography variant='subtitle1'>
                        Scientific Name: 'Plant Name Here'
                    </Typography>
                    <p>Family Common Name:</p>
                    <p>Duration:</p>
                    <p>Precipitation(MAX):</p>
                    <p>Precipitation(MIN):</p>
                    <p>Specifications:</p>
                    <p>Native Status:</p>
                    <p>Growth Habit:</p>
                    <p>Drought Tolerance:</p>
                    <p>Foliage Color:</p>
                    <p>Lifespan:</p>
                    <p>Mature Height (ft):</p>
                    <p>Shade Tolerance:</p>
                    <p>Fruit or Seed Color:</p>
                    <p>Bloom Period:</p>
                    <p>Growth Period:</p>
                    <p>Flower Color:</p>
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