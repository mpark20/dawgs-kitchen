import "./App.css"
import Login from "./components/login/Login"
import Home from "./screens/home/Home";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  Route,
  Link,
  NavLink,
  Switch,
  HashRouter
} from "react-router-dom";
import { useState } from "react";
import Challenges from "./screens/challenges/Challenges";

const App = () => {
  const auth = getAuth(); 
  const [user, setUser] = useState(auth.currentUser); 

  onAuthStateChanged(auth, (user) => {
    setUser(auth.currentUser);
    if (user) {
      window.location.href = '#/challenges'; 
      
    }
  })

  function logout() {
    signOut(auth).then(() => {
      setUser(null);
      window.location.href = "#/login";
    }).catch((error) => {
        console.log(error); 
    });   
  }

  return (
    <HashRouter>
    <div className="nav-container">
      <div id="navbar">
        <ul className="nav">
          <li id="app-title"><NavLink exact to="/">DUBS GO GREEN</NavLink></li>
          <li>{user ? <button onClick={logout} className="logout-btn">LOGOUT</button> : <NavLink to="/login"><button>login</button></NavLink>}</li>
          <li><NavLink to="/challenges">challenges</NavLink></li>
          <li><NavLink exact to="/">home</NavLink></li>
          
          
        </ul>
      </div>
    </div>
    <div className="content">
    <Switch>
    <Route path="/challenges" component={()=> <Challenges/>}/>
      <Route path="/login" component={()=> <Login/>}/>
      <Route exact path="/" component={()=> <Home/>}/>
    </Switch>
    </div>
    
    </HashRouter>
  );
}

export default App;