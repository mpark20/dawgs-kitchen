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

const Login = () => {
  const auth = getAuth(); 
  const db = getDatabase(); 
  
  
  return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                id="new-email"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                id="username"
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
              id="new-password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
  )
}
export default Login; 