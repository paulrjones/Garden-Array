import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InfoIcon from '@material-ui/icons/Info'
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import SaveIcon from '@material-ui/icons/Save';
import tileData from '../../mockdb/db.json'


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 8
  },
  
  media: {
    height: 180,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  
  
}));


const GardenDisplayCard = () => {

  const classes = useStyles();


  return (
    <>
      {
        tileData.map((tile, i) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/500x450"
                title={tile.title}
              />
              <CardContent>
                <Typography className={classes.title}>
                  {tile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tile.author}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button aria-label={`info about ${tile.title}`} className={classes.icon}>
                <InfoIcon />
              </Button>
              <Button className={classes.icon}>
                Delete
              </Button>
              <Button className={classes.icon}>
                Save
              </Button>
            </CardActions>
          </Card>
        ))}
    </>
  )
}


export default GardenDisplayCard