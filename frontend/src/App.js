import HomePage from './componentes/HomePage'
import CitiesPage from './componentes/CitiesPage'
import ItineraryPage from './componentes/ItineraryPage';
import ScrollToTop from './componentes/ScrollToTop'
import AdminPage from './componentes/AdminPage';
import LoginPage from './componentes/LoginPage';
import Terms from './componentes/Terms';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
 <>
    <Router>
      <ScrollToTop>  
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cities" component={CitiesPage} />
          <Route path="/cities/:city" component={ItineraryPage} />
          <Route path="/admin" component={AdminPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/terms-conditions" component={Terms}/>
        </Switch>
      </ScrollToTop>  
    </Router>
  </>
  )
}

export default App
