import Header from './componentes/Header'
import HomePage from './componentes/HomePage'
import CitiesPage from './componentes/CitiesPage'
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cities" component={CitiesPage} />
      </Switch>
    </Router>
  </>
  )
}

export default App
