import React from 'react';
import { Route } from 'react-router-dom'
import Narbar from './components/Navbar/Navbar.js'
import SignUp from './pages/Register'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/SignIn'

function App() {

  return (
    <>
    
    <Narbar />
    <Route exact path="/" component={SignUp} />
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={LogIn} />
    </>
  );
}

export default App;
 