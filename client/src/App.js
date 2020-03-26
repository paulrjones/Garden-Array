import React from 'react';
import { Route } from 'react-router-dom'
import SignUp from './pages/Register'

function App() {
  return (
    <>
    <Route exact path="/" component={SignUp} />
    </>
  );
}

export default App;
