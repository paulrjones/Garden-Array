import React from 'react';
import { Route } from 'react-router-dom'
import Narbar from './components/Navbar/Navbar.js'
import SignUp from './pages/Register'

function App() {
  return (
    <>
    
    <Narbar />
    <Route exact path="/" component={SignUp} />
    </>
  );
}

export default App;
