import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/SignIn'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import UserContext from './utils/UserContext'
import PlantContext from './utils/PlantContext'
import User from './utils/Users';
import Plant from './utils/Plant'
import PlantInfo from './pages/PlantInfo'

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Courier Prime',
        'monospace'
      ].join(','),
    }
  });

  const [userState, setUserState] = useState({
    user: {},
    first: '',
    last: '',
    username: '',
    email: '',
    password: '',
    redirect: false,
    isLoggedIn: localStorage.getItem('isLoggedIn')
  });

  const [plantState, setPlantState] = useState({
    plants: [],
    result: 'No results',
    searchPlant: '',
    searchedPlant: '',
    sortBy: 'Common or Scientific Name',
    name: '',
    isInfo: false,
    currentPlant: {}
  });

  userState.handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  plantState.handlePlantInputChange = ({ target }) => {
    setPlantState({ ...plantState, [target.name]: target.value })
  }

  plantState.handleSelectInputChange = ({ target }) => {
    setPlantState({ ...plantState, [target.name]: target.value })
  }

  userState.handleRegisterUser = event => {
    event.preventDefault()

    const user = {
      first_name: userState.first,
      last_name: userState.last,
      username: userState.username,
      email: userState.email,
      password: userState.password
    }

    User.register(user)
      .then(() => {
        setUserState({ ...userState, redirect: true })
      })
      .catch(e => console.error(e))
  }

  userState.handleSignInUser = event => {
    event.preventDefault()

    const user = {
      username: userState.username,
      password: userState.password
    }

    User.login(user)
      .then(({ data }) => {
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('isLoggedIn', data.isLoggedIn)
        setUserState({ ...userState, username: '', password: '', isLoggedIn: data.isLoggedIn })
      })
      .catch(e => console.error(e))
  }

  plantState.handleSearchPlant = event => {
    event.preventDefault()
    Plant.getPlants(`${plantState.sortBy}`, `${plantState.searchPlant}`)
      .then(({ data: plantsObj }) => {
        console.log(plantsObj)
        console.log(plantState.searchPlant)

        let resultCount = plantsObj.length
        let searchedPlantResult = plantState.searchPlant
        setPlantState({ ...plantState, plants: plantsObj, result: resultCount, searchedPlant: ` for '${searchedPlantResult}'`, searchPlant: '' })
      })
      .catch(e => console.error(e))
  }


  // plantState.handlePlantinfo = ( index, scientific_name,
  //   common_name) => {
  plantState.handlePlantInfo = (event,index, plant) =>{
     event.preventDefault()
     Plant.getPlant(`${plant.id}`)
     .then(({ data: plantObj }) => {
      console.log('Plant Details: ', plantObj)
      console.log('plant: ', plant)
    //  setPlantState({ ...plantState, isInfo: true, currentPlant: plant })
     setPlantState({ ...plantState, isInfo: true, currentPlant: plantObj })
     })
     .catch(e => console.error(e))
    
     // Plant.getPlants(`${plantState.sortBy}`, scientific_name)
    //   .then(({ data: plantsObj }) => {
    //     let resultCount = plantsObj.length
    //     let searchedPlantResult = plantState.searchPlant
    //     PlantInfo(scientific_name)
    //   })
      // .catch(e => console.error(e))
  }
  return (
    <>
      <UserContext.Provider value={userState} >
        <PlantContext.Provider value={plantState}>
          <ThemeProvider theme={theme} >
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={LogIn} />
            <Route path="/plant_info" component={PlantInfo} />
          </ThemeProvider>
        </PlantContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
