import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './components/Layout';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import {
  loginUser,
  verifyUser,
} from './services/auth.js'

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  return (
    <div className="App">        
      <Layout>
        <Switch>

          <Route path='/signin'>
            <SignIn handleSignIn={handleSignIn}/>
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
