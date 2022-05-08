import { useContext, useState } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ReducerContext } from "../Contexts/ReducerContext";

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
    </div>
  );
};

export default Login;