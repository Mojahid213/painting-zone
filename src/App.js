import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';



function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
