import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Container,
    makeStyles,
    Grid,
    GridList,
    Typography
} from '@material-ui/core'
import ProfileHeader from '../../components/ProfileHeader'
import UserContext from '../../utils/UserContext'
import Navbar from '../../components/Navbar'
import GardenDisplay from '../../components/GardenDisplay'
import Garden from '../../utils/Garden'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            marginTop: '4rem',
        },
        marginBottom: '3rem'
    },
    gridListRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 500
        }
    },
    gridListImg: {
        cellHeight: 450,
        [theme.breakpoints.down('sm')]: {
            cellHeight: 180
        }
    },
    gardensTitle: {
        fontWeight: 'bold',
        margin: 8
    }
}));

const Profile = () => {
    const classes = useStyles()
    const { isLoggedIn } = useContext(UserContext)

    const [gardenInfoState, setGardenInfoState] = useState({
        gardens: []
    })

    useEffect(() => {
        Garden.getGardenByUser(localStorage.getItem('id'))
      .then(({data}) => {
         setGardenInfoState({ ...gardenInfoState, gardens: data.gardens })
      })
      .catch(e => console.error(e))
    }, [isLoggedIn, gardenInfoState])

    return (
        <>

            {isLoggedIn ?
                (<>
                    <Navbar />
                    <Container className={classes.root}>
                        <Grid className={classes.header} container>
                            <ProfileHeader gardenAmount={gardenInfoState.gardens.length} />
                            <Grid item xs={12}>
                                <Typography 
                                variant="subtitle1"
                                className={classes.gardensTitle}
                                >My Gardens</Typography>
                                <div className={classes.gridListRoot}>
                                    <GridList className={classes.gridList}>
                                        {gardenInfoState.gardens.length > 1 ?
                                            (gardenInfoState.gardens.map((data, i) => 
                                                (<GardenDisplay
                                                    key={i}
                                                    title={data.garden_name}
                                                    plants={data.plants}
                                                />)
                                            )) :
                                                <GardenDisplay
                                                title='You do not have any gardens! Please add a garden'
                                                disabled={true}
                                                plants={[]}
                                                />
                                        }
                                    </GridList>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </>
                ) : <Redirect to={{ pathname: '/signin' }} />}
        </>
    )
}


export default Profile