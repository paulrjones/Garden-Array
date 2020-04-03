import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/SignIn'
import Profile from './pages/Profile'
import ProfileInfo from './pages/ProfileInfo'
import ProfileEdit from './pages/ProfileEdit'
import CreateGarden from './pages/CreateGarden'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import UserContext from './utils/UserContext'
import PlantContext from './utils/PlantContext'
import User from './utils/Users';
import Plant from './utils/Plant'
import PlantInfo from './pages/PlantInfo'
import GardenContext from './utils/GardenContext'
import Garden from './utils/Garden'


function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Courier Prime',
        'monospace'
      ].join(','),
    }
  });

  // Context/State Defined
  const [userState, setUserState] = useState({
    user: '',
    first: '',
    last: '',
    username: '',
    email: '',
    password: '',
    editUser: localStorage.getItem('username'),
    editFirst: localStorage.getItem('first_name'),
    editLast: localStorage.getItem('last_name'),
    editEmail: localStorage.getItem('email'),
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

  const [gardenState, setGardenState] =
  useState({
    garden: {},
    garden_name: '',
    about: '',
    location: '',
    my_garden: '',
  })

  // User Handlers
  userState.handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  userState.handleProfileEditChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  gardenState.handleGardenInputChange = ({ target }) => {
    setGardenState({ ...gardenState, [target.name]: target.value })
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
    localStorage.setItem('username', userState.username)
    const user = {
      username: userState.username,
      password: userState.password
    }

    User.login(user)
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('isLoggedIn', data.isLoggedIn)
        setUserState({ ...userState, username: '', password: '', isLoggedIn: data.isLoggedIn })
      })
      .catch(e => console.error(e))

    User.getOneUser(userState.username)
      .then(({ data: userData }) => {
        localStorage.setItem('id', userData._id)
        localStorage.setItem('username', userData.username)
        localStorage.setItem('first_name', userData.first_name)
        localStorage.setItem('last_name', userData.last_name)
        localStorage.setItem('email', userData.email)
      })
      .catch(e => console.error(e))
  }

  userState.handleEditProfileSubmit = event => {
    event.preventDefault()

    const user = {
      first_name: userState.editFirst,
      last_name: userState.editLast,
      username: userState.editUser,
      email: userState.edutEmail
    }

    User.editUserInfo(localStorage.getItem('id'), user)
      .then(({ data }) => {
        localStorage.setItem('username', data.username)
        localStorage.setItem('first_name', data.first_name)
        localStorage.setItem('last_name', data.last_name)
        localStorage.setItem('email', data.email)
      })
      .catch(e => console.error(e))
  }

  userState.handleLogOut = () => {
    localStorage.clear()
    setUserState({ ...userState, isLoggedIn: false })
  }


  // Plant Handlers 
  plantState.handlePlantInputChange = ({ target }) => {
    setPlantState({ ...plantState, [target.name]: target.value })
  }

  plantState.handleSelectInputChange = ({ target }) => {
    setPlantState({ ...plantState, [target.name]: target.value })
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
  
  
  gardenState.handleCreateGarden = event => {
    event.preventDefault()

    const garden = {
      garden_name: gardenState.garden_name,
      about: gardenState.about,
      location: gardenState.location,
      my_garden: gardenState.my_garden
    }

    Garden.create(garden)
      .then(() => {
        setGardenState({ ...gardenState, redirect: true, garden })
      })
      .catch(e => console.error(e))
  }
  

  return (
    <>
      <UserContext.Provider value={userState} >
        <PlantContext.Provider value={plantState}>
          <GardenContext.Provider value={gardenState}>
          <ThemeProvider theme={theme} >
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={LogIn} />
            <Route path="/plant_info" component={PlantInfo} />
            <Route path="/user/:userid" component={Profile} />
            <Route path="/info/:userid" component={ProfileInfo} />
            <Route path="/edit" component={ProfileEdit} />
            <Route path="/creategarden" component={CreateGarden} />
          </ThemeProvider>
          </GardenContext.Provider>
        </PlantContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
