import React, { useState } from 'react'
import {
    TextField,
    InputAdornment,
    IconButton,
    Icon,
    Container
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

const Home = () => {

    const [sessionState, setSessionState] = useState({
        redirect: false,
        searchPlant: ''
    })

    const handleInputChange = ({ target }) => {
        setSessionState({ ...sessionState, [target.name]: target.value })
    }

    const handleInputSubmit = event => {
        event.preventDefault()
        console.log(sessionState.searchPlant)

        setSessionState({ ...sessionState, searchPlant: '' })
    }

    // const handleLogOut = () => {
    //     axios.get('/api/users/logout')
    //         .then(user => {
    //             console.log(user)
    //             setSessionState({ ...sessionState, redirect: true })
    //         })
    //         .catch(e => console.error(e))
    // }

    return (
        <>
            {sessionState.redirect ? <Redirect to={{ pathname: '/signin' }} /> :
                (
                    <Container>
                        <form mt={2}>
                            <TextField
                                label="With normal TextField"
                                id="searchPlant"
                                name="searchPlant"
                                value={sessionState.searchPlant}
                                onChange={handleInputChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton
                                                onClick={handleInputSubmit}
                                            >
                                                <Icon>
                                                    <SearchIcon />
                                                </Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </form>
                        <p>Test test test test test</p>
                    </Container>
                )
            }
        </>
    )
}

export default Home