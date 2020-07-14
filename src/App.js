import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
// import {checkLogin} from './components/Backend/Controller/userController'
import routes from './routes';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //    checkLogin()
  //   this.state = {
  //     show: false
  //   }
  // }
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            {routes.map((route) => {
              return <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
