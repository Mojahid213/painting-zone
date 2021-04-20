import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Booking from './Components/Bookings/Bookings/Booking';
import AllBokings from './Components/Bookings/AllBokings/AllBokings';
import Reviews from './Components/Bookings/Reviews/Reviews';
import Orders from './Components/Dashboard/Orders/Orders';
import Addservice from './Components/Dashboard/AddService/Addservice';
import ManageService from './Components/Dashboard/ManageService/ManageService';


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
          <Route path="/dashboard/orders">
            <Orders></Orders>
          </Route>
          <Route path="/dashboard/addservice">
            <Addservice></Addservice>
          </Route>
          <Route path="/dashboard/menageservice">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/allbokings">
            <AllBokings></AllBokings>
          </PrivateRoute>
          <PrivateRoute path="/reviews">
              <Reviews></Reviews>
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
