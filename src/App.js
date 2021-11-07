
import './App.css';
import AppHeader from './components/AppHeader'
import CreatePlayerPage from './pages/CreatePlayerPage'
import ListPlayersPage from './pages/ListPlayers'
import UpdatePlayePage from './pages/UpdatePlayerPage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {isAuthenticated} from './services/auth'
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout'
function App() {
  return (
    <div className="App">
      <BrowserRouter >
     {isAuthenticated() ?<AppHeader /> : null} 
      <PrivateRoute exact path="/">
        <ListPlayersPage />
      </PrivateRoute>
      <PrivateRoute path ="/create">
        <CreatePlayerPage />
      </PrivateRoute>
      <PrivateRoute path ="/update/:id">
        <UpdatePlayePage />
      </PrivateRoute>
      <Route path ="/login">
      <LoginPage />
      </Route>
      <Route path="/logout">
          <Logout />
        </Route>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute({ children, ...rest }){
  return (
    <Route { ...rest }>
       { isAuthenticated() ? children : <Redirect to="/login"/>}
    </Route>
  )
}

export default App;
