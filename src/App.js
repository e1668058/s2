import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Content from './components/Content';
import './App.css';

class App extends Component {

  render() {

    return(
      <Router>

        <div class="global">
        
          <div class="menu">
            <Route
              path="/"
              render = { ()=>
                <Menu/>
              }
            />
          </div>
          
          <div class="content">
            <Route
              path="/"
              render = { ()=>
                <Content/>
              }
            />
          </div>

              
        </div>
              
      </Router>
    )

  }
}

export default App;
