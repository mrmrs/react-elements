import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Div from './components/Div'

import { ThemeProvider } from 'glamorous' 
import theme from './theme'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Div style={{
            fontFamily: theme.fontFamily.sansSerif
          }}>
            <Route exact path="/" component={Home} />
          </Div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
