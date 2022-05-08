import { Link } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <nav>
      <div className="log-in-box">
        <span>{user === null ? "Gość" : user}</span>
        <Link to={`/${user === null ? "login" : ""}`}>
          {
            user === null ?
              <button className="navButton">Zaloguj się</button>
              :
              <button onClick={() => setUser(null)} className="navButton">Wyloguj się</button>
          }
        </Link>
      </div>
      <Link to="/groups"><button className="navButton">Przeglądaj grupy</button></Link>
      <Link to="/addGroup"><button className="navButton">Dodaj grupę</button></Link>
      <Link to="/"><button className="navButton">Szukaj ogłoszeń</button></Link>
      <Link to="/addStudent"><button className="navButton">Dodaj ogłoszenie</button></Link>
    </nav>
  );
};

export default Header;