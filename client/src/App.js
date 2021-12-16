import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './components/Layout';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import About from './screens/About';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/auth.js'

function App() {

  const [places, setPlaces] = useState([]);
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
    history.push('/places');
  };

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/places');
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">        
      <Layout
        currentUser={currentUser}
        places={places}
        handleSignOut={handleSignOut}
      >
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/signin'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
          <Route path='/signup'>
            <SignUp handleSignUp={handleSignUp}/>
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
