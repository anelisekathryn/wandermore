import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Places from '../screens/Places';

export default function MainContainer() {
  return (
    <div>
      <Switch>

      <Route path='/places'>
          <Places />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  )
}
