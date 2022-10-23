import "./Login.css"; 
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup, 
  updateProfile, 
  setPersistence,
  signOut, 
  browserSessionPersistence
} from "firebase/auth";
import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import "../../firebase";
import Mascot from "../../img/little-man.png";

const Login = () => {
  const auth = getAuth(); 
  const db = getDatabase(); 
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(auth.currentUser);

  function signUp() {   //runs when signup button is clicked
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var uname = document.getElementById("username").value;
    

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(email)
      set(ref(db, 'users/' + user.uid), {
        displayName: uname,
        email: email,
      });
      
      updateProfile(auth.currentUser, {
        displayName: uname, email: email
      });
      
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function logIn() {    //runs when login button is clicked
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(auth.currentUser);
        window.location.href = '#/challenges';
      })
    })
  }

  function switchButtons() {
    var signup = document.getElementById("signup-btn");
    var login = document.getElementById("login-btn");
    var userField = document.getElementById("username");
    var toggleBtn = document.getElementById("toggleSignup");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    if (login.style.display === "none") {
      login.style.display = "block";
      signup.style.display = "none";
      userField.style.display = "none";
      toggleBtn.innerText = "create a new account";
    } else {
      login.style.display = "none";
      signup.style.display = "block";
      userField.style.display = "block";
      toggleBtn.innerText = "log in to an existing account";
    }
    
  }
  return (
    <>

    <div className="signin" id="signup">
      <h2 style={{display: "inline", float: "left", padding: "8px 0"}}>sign up</h2>
      <img src={Mascot} width="70" id="mascot"/>
      <div>
        <input type="text" className="text-field" id="email" placeholder="e-mail address"/>
        <input type="text" className="text-field" id="username" placeholder="username"/>
        <input type="password" className="text-field" id="password" placeholder="password (6+ characters)"/>
        <button className="btn" onClick={signUp} style={{margin: "10px 5px 20px 0"}} id="signup-btn">sign up</button> 
        <button className="btn" onClick={logIn} style={{margin: "10px 5px 20px 0", display: "none"}} id="login-btn">log in</button> 
      </div>
      <button onClick={switchButtons} id="toggleSignup">log into an existing account</button>
    </div>

    </>
  )
}
export default Login; 