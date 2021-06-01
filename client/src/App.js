import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home.js'; 
import Signup from './pages/signup/Signup.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          <Route path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
