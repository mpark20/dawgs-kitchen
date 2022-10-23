import "./App.css"
import Login from "./components/login/Login"

import {
  Route,
  Link,
  NavLink,
  Switch,
  HashRouter
} from "react-router-dom";

const App = () => {
  return (
    <div>
        <Login/>
    </div>
  );
}

export default App;