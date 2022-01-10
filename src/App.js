
import './App.css';
import { ServiceIndex, ServiceShow, SortedServiceCards, EmployeeIndex, EmployeeShow, ContactUs, Nav, Auth } from './components';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'

function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  
  return (
      <>
      <h1>Redux Spa</h1>
      <Nav/>
      { user.username ? 
      <Switch>
        <Route path="/services/:id"><ServiceShow/></Route>
        <Route path="/services"><ServiceIndex/></Route>
        <Route path="/services/?sort=duration"><SortedServiceCards/></Route>
        <Route path="/employees/:id"><EmployeeShow/></Route>
        <Route path="/employees"><EmployeeIndex></EmployeeIndex></Route>
        <Route path="/contact"><ContactUs></ContactUs></Route>
        <Route exact path="/"><ServiceIndex/></Route>
      </Switch> :
      <Auth/> 
    }
      </>
    
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
