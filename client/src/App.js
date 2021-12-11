import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';


function App() {

  return (
    <div className="App">        
      <Layout>
        <Switch>

          <Route path='/signin'>
            <SignIn/>
          </Route>

          <Route path='/signup'>
            <SignUp/>
          </Route>

          <Route path='/'>
            <MainContainer/>
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
