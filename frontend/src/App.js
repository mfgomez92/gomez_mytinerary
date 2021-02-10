import HomePage from './componentes/HomePage'
import CitiesPage from './componentes/CitiesPage'
import ItineraryPage from './componentes/ItineraryPage';
import ScrollToTop from './componentes/ScrollToTop'
import LoginPage from './componentes/LoginPage';
import Terms from './componentes/Terms';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import authActions from './redux/actions/authActions'
import React, { useState } from 'react'



import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  const [reload, setReload] = useState(false)
  console.log(props.loggedUser)
  if (props.loggedUser) {
    var routes = <>
        {console.log("if")}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cities" component={CitiesPage} />
        <Route path="/cities/:city" component={ItineraryPage} />
        <Redirect to="/" />
    </>
  } else if (localStorage.getItem('token')) { 
    {console.log("else if")}

      props.logFromLS(localStorage.getItem('token'))
      .then(respuesta => {
        if (respuesta === '/') setReload(!reload)
        console.log(respuesta) 
      })
  } else {
    var routes = <>
            {console.log("else")}

      <Route exact path="/" component={HomePage} />
      <Route exact path="/cities" component={CitiesPage} />
      <Route path="/cities/:city" component={ItineraryPage} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/terms-conditions" component={Terms}/>
      <Redirect to="/" />
    </>
  }    
  return (
 <>
    <Router>
      <ScrollToTop>  
        <Switch>
    
        {routes}
        </Switch>
      </ScrollToTop>  
    </Router>
  </>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.authReducer.loggedUser
  }
}

const mapDispatchToProps = {
  logFromLS: authActions.logFromLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)