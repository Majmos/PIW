import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ReducerContext } from "../Contexts/ReducerContext";
import Student from "./Student";

const StudentProfile = ({ getStudent }) => {

  const { studentid } = useParams();
  const [state, dispatch] = useContext(ReducerContext);

  const student = getStudent(studentid);

  return (
    <div className="student-profile">
      <div className="student">
        <Student student={student} />
      </div>
      <div>
        <Link to="/sendMessage"><button className="messageButton">Wyślij wiadomość</button></Link>
        {
          state.favList.find(st => st.id === student.id) ?
            <button onClick={() => dispatch({ type: "removeFromFavourite", payload: student })} className="unfavButton">Usuń z ulubionych</button>
            :
            <button onClick={() => dispatch({ type: "addToFavourite", payload: student })} className="favButton">Dodaj do ulubionych</button>
        }
      </div>
    </div>
  );
};

export default StudentProfile;