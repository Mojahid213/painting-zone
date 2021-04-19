import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config"
import { userContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

 }else {
    firebase.app(); // if already initialized, use that one
 }

const Login = () => {
    //context api
    const[logedInUser,setlogedInUser] = useContext(userContext);

    //Redirect auth || private route
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    // Login button click event
    const handleLogin = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const{displayName,email,photoURL} = user;
            const newLogedInuser = {...logedInUser};
            newLogedInuser.name = displayName;
            newLogedInuser.email = email;
            newLogedInuser.photo = photoURL;
            newLogedInuser.isSignedIn = true;
            setlogedInUser(newLogedInuser);
            history.replace(from);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    }
    console.log(logedInUser);
    return (
        <div>
            <Navbar></Navbar>
            <div style={{height:'450px'}} className="d-flex align-items-center justify-content-center">
            <div>
                <button onClick={handleLogin} className="btn btn-success"> <i class="bi bi-google"></i> Login with google</button>
            </div>
        </div>
        </div>
    );
};

export default Login;