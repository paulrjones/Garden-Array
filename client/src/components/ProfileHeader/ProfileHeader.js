import React from 'react'
import {
    Container,
    Typography,
    Button,
    Avatar,
    Grid,
    makeStyles
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    avatar: {
        color: theme.palette.getContrastText(green[300]),
        backgroundColor: green[300],
        [theme.breakpoints.down('sm')]: {
            width: 100,
            height: 100,
            marginLeft: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            width: 150,
            height: 150,
            marginLeft: '2rem'
        },
        [theme.breakpoints.up('lg')]: {
            width: 200,
            height: 200
        }
    },
    avatarDiv: {
        display: 'inline-block',
        marginRight: 10
    },
    username: {
        fontSize: 64,
        [theme.breakpoints.down('sm')]: {
            fontSize: 32
        }
    },
    usernameDiv: {
        display: 'inline'
    },
    headerBtnDiv: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            display: 'inline'
        },
        [theme.breakpoints.up('lg')]: {
            display: 'inline'
        }
    },
    headerBtn: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 1,
            marginTop: 12
        },
        [theme.breakpoints.up('md')]: {
            margin: 4
        }
    },
    divider: {
        width: '100%'
    },
    info: {
        display: 'inline',
        margin: 8
    },
    infoContent: {
        textAlign: 'center'
    },
    infoDiv: {
        justifyContent: 'space-around',
        display: 'flex'
    },
    infoTitle: {
        fontWeight: 'bold'
    },
    infoContainer: {
        marginTop: 10
    },
}));

const ProfileHeader = () => {

    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Grid item xs={12}>
                <div className={classes.avatarDiv}>
                    <Avatar className={classes.avatar}>OP</Avatar>
                </div>
                <div className={classes.usernameDiv}>
                    <Typography variant="title" className={classes.username}>
                        Username
                        </Typography>
                    <div className={classes.headerBtnDiv}>
                        <Button variant='outlined' className={classes.headerBtn}>
                            Settings
                            </Button>
                        <Button variant='outlined' className={classes.headerBtn}>
                            Edit Profile
                            </Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.infoContainer}>
                <hr />
                <div className={classes.infoDiv}>
                    <div className={classes.infoContent}>
                        <Typography>
                            5
                            </Typography>
                        <Typography className={classes.infoTitle}>
                            Posts
                            </Typography>
                    </div>
                    <div className={classes.infoContent}>
                        <Typography>
                            10
                        </Typography>
                        <Typography className={classes.infoTitle}>
                            Gardens
                        </Typography>
                    </div>
                </div>
                <hr />
            </Grid>
        </Container>
    )
}

export default ProfileHeader