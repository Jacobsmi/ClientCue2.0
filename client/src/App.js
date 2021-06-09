import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing/Landing'; 
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path ='/home'>
            <Home />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/'>
            <Landing />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
