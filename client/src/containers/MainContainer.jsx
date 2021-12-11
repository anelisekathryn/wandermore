import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';

export default function MainContainer() {
  return (
    <div>
      <Switch>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  )
}
