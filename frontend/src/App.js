import Header from './componentes/Header'
import Home from './componentes/Home'
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
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
        </Switch>

      </Router>
  </>
  )
}

export default App
