import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pagewrapper from './comp/Pagewrapper';
import Home from './comp/pages/Home';
import About from './comp/pages/About'




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Pagewrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />

            <Route
              path="/about"
              component={About}
            />
              
          </Pagewrapper>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
