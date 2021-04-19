import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Dashobard from './Components/Dashboard/Dashboard/Dashobard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Orders from './Components/Orders/Orders/Orders';

export const userContext = createContext();


function App() {
// Context api
const[user,setUser] = useState({
  isSignedIn:false
});
  return (
    <div className="App">
      <userContext.Provider value={[user,setUser]}>
     <Router>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
          <PrivateRoute path="/dashboard">
              <Dashobard></Dashobard>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
       </Switch>
     </Router>
     </userContext.Provider>
    </div>
  );
}

export default App;
