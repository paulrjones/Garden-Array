import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlantContext from '../../utils/PlantContext'
import { Redirect } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 8
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        paddingBottom: 0
    }
});


const PlantQueryCard = () => {

    const classes = useStyles();

    const { plants, isInfo,  handlePlantInfo} = useContext(PlantContext)

    return (
        <>
            {
             isInfo ? <Redirect to='/plant_info' /> 
             :   
             plants.map((plantsMap, i) =>
                    <Card key={i} className={classes.root} variant="outlined">
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.title}>
                                Scientific Name: 
                            </Typography>
                            <Typography>
                            {plantsMap.scientific_name}
                            </Typography>
                            {plantsMap.common_name ? (
                                <Typography className={classes.title}>
                                    Common Name:
                                </Typography>) : <></>}
                            {plantsMap.common_name ? (
                                <Typography>
                                    {plantsMap.common_name}
                                </Typography>) : <></>}
                        </CardContent> 
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                            <Button onClick={event => handlePlantInfo(event, i, plantsMap)} size="small">Learn More</Button>
                            {/* <Button onClick={(e) =>handlePlantInfo(e, i, `${plantsMap.scientific_name}`)}size="small">Learn More</Button> */}
                            <Button href={`/plants/${plantsMap.common_name}`} size="small">Save</Button>
                        </CardActions>
                    </Card>)
            }
        </>
    )
}

export default PlantQueryCard