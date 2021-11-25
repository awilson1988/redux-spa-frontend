
import './App.css';
import { ServiceIndex, ServiceShow, Nav, Auth } from './components';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  return (
      <>
      <h1>Redux Spa</h1>
      <Nav/>
      { props.user.username ? 
      <Switch>
        <Route path="/services/:id"><ServiceShow/></Route>
        <Route path="/services"><ServiceIndex/></Route>
        <Route exact path="/"><ServiceIndex/></Route>
      </Switch> :
      <Auth/> 
    }
      </>
    
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps) (App);
