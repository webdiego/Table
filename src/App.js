
import './style/App.scss'
import Nav from './Components/Nav'
import Home from './pages/Home'
import Why from './pages/Why'
import Calculator from './pages/Calculator'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route exact path="/" >
        <Home/>
        </Route>
        <Route path="/why">
        <Why/>
        </Route>
        <Route path="/calculator">
        <Calculator/>
        </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
