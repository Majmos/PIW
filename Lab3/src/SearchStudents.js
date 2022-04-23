import Student from "./Student";
import { useState } from "react";

function SearchStudents({students}) {
    const [searchBy, setSearchBy] = useState("name")
    const [searchText, setSearchText] = useState("")

    return (
        <div>
            <h1>Studenci poszukujący grupę:</h1>
            <input type="search" onChange={(e) => setSearchText(e.target.value)}></input>
            <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
              <option value="name">Nazwa</option>
              <option value="description">Opis</option>
              <option value="tags">Tagi</option>
              <option value="subjects">Przedmioty</option>
            </select>
            <ul className="students-list">
              {students.filter(student => {
                if (searchBy==="name" || searchBy==="description") {
                  return student[searchBy].toLowerCase().includes(searchText.toLowerCase())
                } else {
                  return student[searchBy].find(element => element.toLowerCase().includes(searchText.toLowerCase()))
                }
              }).map((s, i) => <li key={i} className="student"><Student student={s} /></li>)}
            </ul>
        </div>
    );
}

export default SearchStudents;