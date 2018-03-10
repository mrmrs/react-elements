import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './pages/Home'

import { ThemeProvider } from 'glamorous' 
import theme from './theme'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
