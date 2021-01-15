import Header from './componentes/Header'
import Section from './componentes/Section'
import Cities from './componentes/Cities'
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <>
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Section} />
          <Route path="/cities" component={Cities} />
        </Switch>

      </Router>
  </>
  )
}

export default App
