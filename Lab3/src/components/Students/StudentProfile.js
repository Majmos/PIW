import { useParams, Link } from "react-router-dom";

const StudentProfile = ({ getStudent }) => {

  const { studentid } = useParams();

  const student = getStudent(studentid);

  return (
    <div>
      <div>
        <img src={student.imgUrl} alt="Zdjęcie profilowe" />
      </div>
      <div>
        <h2>Nazwa:</h2>
        {student.name}
      </div>
      <div>
        <h2>Opis:</h2>
        {student.description}
      </div>
      <div>
        <h2>Tags:</h2>
        <ul className="tags">
          {student.tags.map((tag, i) => <li key={i} className="tag">{tag}</li>)}
        </ul>
      </div>
      <div>
        <h2>Subjects:</h2>
        <ul className="subjects">
          {student.subjects.map((subject, i) => <li key={i} className="subject">{subject}</li>)}
        </ul>
      </div>
      <Link to="/sendMessage"><button className="submitButton">Wyślij wiadomość</button></Link>
    </div>
  );
};

export default StudentProfile;