import React from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/SignIn'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Courier Prime',
        'monospace'
      ].join(','),
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={LogIn} />
      </ThemeProvider>
    </>
  );
}

export default App;
