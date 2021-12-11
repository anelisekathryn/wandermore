import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">        
      <Switch>

        <Route path='/'>
          <Home />
        </Route>

          
      </Switch>
    </div>
  );
}

export default App;
