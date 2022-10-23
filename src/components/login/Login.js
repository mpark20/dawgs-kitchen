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
    var email = document.getElementById("new-email").value;
    var password = document.getElementById("new-password").value;
    var uname = document.getElementById("username").value;
    

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(email)
      set(ref(db, 'users/' + user.uid), {
        displayName: uname,
        email: email,
        savedLists: "",
      });
      
      updateProfile(auth.currentUser, {
        displayName: uname, email: email
      });
      
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
  <>
  <img src={Mascot} width="100" id="mascot"/>
  <div className="signin" id="signup">

    <h3>sign up</h3>
    <div>
      <input type="text" className="text-field" id="new-email" placeholder="e-mail address"/>
      <input type="text" className="text-field" id="username" placeholder="username"/>
      <input type="password" className="text-field" id="new-password" placeholder="password (6+ characters)"/>
      <button className="btn" onClick={signUp} style={{margin: "10px 5px 20px 0"}}>sign up</button> 
    </div>
    <div className="message"><button>log into an existing account</button></div>
  </div>
  
  </>
  )
}
export default Login; 