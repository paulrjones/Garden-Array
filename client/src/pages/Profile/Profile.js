import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Container,
    makeStyles,
    Grid,
    GridList,
    GridListTile,
    ListSubheader,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import ProfileHeader from '../../components/ProfileHeader'
import UserContext from '../../utils/UserContext'
import Navbar from '../../components/Navbar'
import GardenDisplayCard from '../../components/GardenDisplayCard'
import db from '../../mockdb/db.json'

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
    }
}));

const Profile = () => {

    const classes = useStyles()

    const { isLoggedIn } = useContext(UserContext)

    return (
        <>
            {isLoggedIn ?
                (<>
                    <Navbar />
                    <Container className={classes.root}>
                        <Grid className={classes.header} container>
                            <ProfileHeader />
                            <Grid item xs={12}>
                                <div className={classes.gridListRoot}>
                                    <GridList className={classes.gridList}>
                                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                            <ListSubheader component="div">Garden Name Here</ListSubheader>
                                        </GridListTile>
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