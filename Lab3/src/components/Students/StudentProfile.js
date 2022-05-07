import { useParams, Link } from "react-router-dom";
import Student from "./Student";

const StudentProfile = ({ getStudent }) => {

  const { studentid } = useParams();

  const student = getStudent(studentid);

  return (
    <div className="student-profile">
      <div className="student">
        <Student student={student} />
        <Link to="/sendMessage"><button className="submitButton">Wyślij wiadomość</button></Link>
      </div>
    </div>
  );
};

export default StudentProfile;