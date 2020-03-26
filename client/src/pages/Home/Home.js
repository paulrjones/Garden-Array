import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

    // const [sessionState, setSessionState] = useState({
    //     redirect: false
    // })

    const handleLogOut = () => {
        axios.get('/api/users/logout')
            .then(user => {
                // setSessionState({ ...sessionState, redirect: true })
            })
            .catch(e => console.error(e))
    }

    return (
        <>
            {/* {sessionState.redirect ? <Redirect to={{ pathname: '/signin' }} /> :
                ( */}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogOut}
                >
                    Logout
                </Button>
                {/* )
             } */}
        </>
    )
}

export default Home