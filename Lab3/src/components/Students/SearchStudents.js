import Student from "./Student";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchStudents({ students }) {
  const [searchBy, setSearchBy] = useState("name");
  const [searchText, setSearchText] = useState("");
  const [modal, setModal] = useState("susModal");
  const [canToggle, setToggle] = useState(true);

  const handleChangeSearch = (e) => {
    if (e.target.value.toLowerCase() === "sus" && canToggle) {
      setModal("susModal-active");
      setToggle(false);
    } else {
      setModal("susModal");
    }
    setSearchText(e.target.value);
  };

  const toggle = () => {
    setModal("susModal");
    setToggle(false);
  };

  return (
    <div>
      <h1>Studenci poszukujący grupę:</h1>
      <input type="search" onChange={handleChangeSearch}></input>
      <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
        <option value="name">Nazwa</option>
        <option value="description">Opis</option>
        <option value="tags">Tagi</option>
        <option value="subjects">Przedmioty</option>
      </select>
      <div className={modal}>
        <img className="sus" src="https://mytopkid.com/wp-content/uploads/mytopid.com-wallpaper-among-us-44.jpg" alt="" onClick={toggle} />
      </div>
      <ul className="students-list">
        {students.filter(student => {
          if (searchBy === "name" || searchBy === "description") {
            return student[searchBy].toLowerCase().includes(searchText.toLowerCase());
          } else {
            return student[searchBy].find(element => element.toLowerCase().includes(searchText.toLowerCase()));
          }
        }).map((s, i) => <li key={i} className="student"><Link to={`profile/${s.id}`}><Student student={s} /></Link></li>)}
      </ul>
    </div>
  );
}

export default SearchStudents;