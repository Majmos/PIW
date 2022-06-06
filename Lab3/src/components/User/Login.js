import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ReducerContext } from "../Contexts/ReducerContext";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA0g0yEp55dhS_PdYnZd_7luUHbErSxpM",
  authDomain: "projektowanie-iw.firebaseapp.com",
  projectId: "projektowanie-iw",
  storageBucket: "projektowanie-iw.appspot.com",
  messagingSenderId: "465516386658",
  appId: "1:465516386658:web:ee1805489110266c03b43b",
  measurementId: "G-3E53D015FD"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const [state, dispatch] = useContext(ReducerContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(email);
    dispatch({ type: "setFavList", payload: { favList: JSON.parse(localStorage.getItem(email)) || [] } });
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    e.target.reset();
    setEmail("");
    navigate("/", { replace: true });
  };

  const logInWithGoogle = (user) => {
    setUser(user.email);
    dispatch({ type: "setFavList", payload: { favList: JSON.parse(localStorage.getItem(user.email)) || [] } });
    dispatch({ type: "setApp", payload: { app: app } });
    localStorage.setItem("password", "hidden");
    localStorage.setItem("email", user.email);
    navigate("/", { replace: true });
  };

  useEffect(() => {

    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          logInWithGoogle(authResult.user);
          return false;
        },
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      signInFlow: "popup",
    });
  }, []);

  return (
    <div className="formBox">
      <h1>Logowanie</h1>
      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label>E-mail:</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </div>
        <div className="formElement">
          <label>Hasło:</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </div>
        <input className="submitButton" type="submit" value={"Zaloguj"} />
      </form>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default Login;