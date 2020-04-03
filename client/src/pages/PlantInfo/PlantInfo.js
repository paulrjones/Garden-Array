import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
// import { Redirect } from 'react-router-dom'
import UserContext from '../../utils/UserContext'
import PlantContext from '../../utils/PlantContext'
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


// const { plants } = useContext(PlantContext)

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Garden Array
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

  export default function PlantInfo() {
  // const classes = useStyles();
  const { plants, currentPlant } = useContext(PlantContext)
  const { images, main_species }      = currentPlant
  const { specifications,  growth }   = main_species

  console.log('growth.precipitation_maximum : ', growth.precipitation_maximum)


  //---------------- Images -------------------
  let plantImage
  if (images.length > 0) {
  const image           = images[0]
        plantImage      = image.url
  console.log('images: ', images)
  console.log('image: ', image)
  console.log('image url: ', plantImage)
  }
  else {
    plantImage  = '****'
    console.log('image url: ', plantImage)
  }
   //---------------- Images END ----------------


  const { 
    email,
    password,
    username,
    last, 
    first,
    redirect, 
    handleInputChange, 
    handleRegisterUser 
  } = useContext(UserContext)
      //  console.log('Write This: 'plantName)
  return (
         <>
      {/* // <>
      //   <p>{JSON.stringify(currentPlant)}</p>
      //   <h1>Hello World!</h1>
      //   <h1>Here: {JSON.stringify(currentPlant)}</h1>
      //   <h1>Hello World!</h1>
      //   <h1>Hello World!</h1>
      // </>     */}
    <div> 
     <Grid container spacing={3}>
      <Grid item xs={3}>
          <div className="one">xs=3.0</div>
          <Card className="flower">
            <CardActionArea>
              <CardMedia
                className="media"
                image="https://www.fleursdeparis.com/media/catalog/product/cache/4/image/1800x/040ec09b1e35df139433887a97daa66f/r/o/rosen_herz_box_medium_infinite_love_vibrant_red_wei_.jpg"
                 title="Contemplative Reptile" 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flower
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
      </Grid>
      <Grid item xs={6}>
      <div className="two">xs=6.0</div>
        


        <Card  className="classes" variant="outlined">
           <CardContent className="{classes.cardContent}">
             <Typography>Scientific Name:      {currentPlant.scientific_name}</Typography>
             <Typography>Common Name:          {currentPlant.common_name}</Typography>
             <Typography>Family Common Name:   {currentPlant.family_common_name}</Typography>
             <Typography>Duration:             {currentPlant.duration}</Typography>
             <Typography>precipitation_maximum (in.): {growth.precipitation_maximum.inches}</Typography>
             <Typography>precipitation_minimum (in.): {growth.precipitation_minimum.inches}</Typography>
             <Typography>specifications:              {specifications.toxicity}</Typography>
             <Typography>Native Status:     {currentPlant.native_status}</Typography>
             <Typography>Growth Habit:      {specifications.growth_habit}</Typography>
             <Typography>Drought Tolerance: {growth.drought_tolerance}</Typography>
             <Typography>Foliage Color:     {main_species.foliage.color}</Typography>
             <Typography>Lifespan:          {specifications.lifespan}</Typography>
             <Typography>Mature Height (ft):  {specifications.mature_height.ftn}</Typography>
             <Typography>Shade Tolerance:     {growth.shade_tolerance}</Typography>
             <Typography>Fruit or Seed Color: {main_species.fruit_or_seed.color}</Typography>
             <Typography>Bloom Period:        {main_species.seed.bloom_period}</Typography>
             <Typography>Palatable Human:     {main_species.products.palatable_human}</Typography>
             <Typography>Growth Period:       {specifications.growth_period}</Typography>
             <Typography>Flower Color:        {main_species.flower.color}</Typography>
             <Typography>Duration:            {currentPlant.duration}</Typography>
              <Typography>
                 Image:      {plantImage}
             </Typography>

             <br></br><br></br>
             {/* <Divider /> */}
             {/* <Typography> Add Notes:</Typography> */}
             <Box boxShadow={3}>
              <form className="Form" noValidate autoComplete="off"> 
                <TextField id="filled-basic" label="Add Notes:" variant="filled" 
                  fullWidth
                  margin="normal"
                  InputLabelProps={{shrink: true,}}/> 
              </form>
            </Box>

            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
              <Button href={`/plants/${currentPlant.common_name}`} size="small" color="primary">Save</Button>
            </CardActions>
        </Card>
      </Grid>
     </Grid>
    </div>         
        </>
       );
}