import { useState } from "react";
import './App.css';
import Student from "./Student";

function App() {
  const [students, setStudents] = useState([
      { name: "Adam", description: "Jestem studentem. Szukam grupy do kursu Architektura Komputerów 2. Potrafię pisać kod w C.", tags: ["C", "Kotlin"], subjects: ["AK2"] },
      { name: "Wojtek Konon", description: "Udaje studenta", tags: ["C", "JS"], subjects: ["PIW", "AK2"]}
  ])
  const [searchBy, setSearchBy] = useState("description")
  const [searchText, setSearchText] = useState("")
  return (
    <div className="App">
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

export default App;
