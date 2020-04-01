import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Container,
    makeStyles,
    Typography,
    TextField,
    Button
} from '@material-ui/core'
import UserContext from '../../utils/UserContext'
import Navbar from '../../components/Navbar'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 48
    },
    username: {
        fontSize: 64,
        [theme.breakpoints.down('sm')]: {
            fontSize: 32
        }
    },
    textField: {
        marginTop: 8,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
            width: '100%'
        },
    },
    btn: {
        marginTop: 8,
        margin: 2
    }
}));

const ProfileEdit = () => {

    const classes = useStyles()

    const { handleInputValue, handleProfileEditChange, isLoggedIn } = useContext(UserContext)

    return (
        <>
            {isLoggedIn ?
                (<>
                    <Navbar />
                    <Container className={classes.root}>
                        <div>
                            <Typography variant="h1" className={classes.title} >Edit Profile</Typography>
                        </div>
                        <TextField
                            id=""
                            label="Username"
                            variant="outlined"
                            className={classes.textField}
                            value={handleInputValue}
                            onChange={handleProfileEditChange}
                        />
                        <TextField
                            id=""
                            label="First Name"
                            variant="outlined"
                            className={classes.textField}
                            value={handleInputValue}
                            onChange={handleProfileEditChange}
                        />
                        <TextField
                            id=""
                            label="Last Name"
                            variant="outlined"
                            className={classes.textField}
                            value={handleInputValue}
                            onChange={handleProfileEditChange}
                        />
                        <TextField
                            id=""
                            label="Email"
                            variant="outlined"
                            className={classes.textField}
                            value={handleInputValue}
                            onChange={handleProfileEditChange}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.btn}
                        >
                            Cancel
                        </Button>
                    </Container>
                </>)
                : <Redirect to={{ pathname: '/signin' }} />
            }
        </>
    )
}

export default ProfileEdit