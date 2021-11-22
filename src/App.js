
import './App.css';
import { ServiceIndex, ServiceShow } from './components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <>
      <h1>Redux Spa</h1>
      <Switch>
        <Route path="/services/:id"><ServiceShow/></Route>
        <Route path="/services"><ServiceIndex/></Route>
      </Switch>
      </>
    </div>
  );
}



export default App;
