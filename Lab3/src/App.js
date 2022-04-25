import { useState } from "react";
import "./App.css";
import AddStudent from "./AddStudent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchStudents from "./SearchStudents";
import SearchGroups from "./SearchGroups";

function App() {
  const [students, setStudents] = useState([
    { name: "Adam", description: "Jestem studentem. Szukam grupy do kursu Architektura Komputerów 2. Potrafię pisać kod w C.", tags: ["C", "Kotlin"], subjects: ["AK2"] },
    { name: "Wojtek Konon", description: "Udaje studenta", tags: ["C", "JS"], subjects: ["PIW", "AK2"] },
    { name: "Maciej Suchodolski", description: "Lubie tworzyć ładne strony internetowe.", tags: ["CSS", "JS"], subjects: ["PIW"] },
    { name: "Artur Sus", description: "Chcę dostać się do jakiejkolwiek grupy.", tags: ["CSS", "JS", "C", "Java", "Kotlin", "C++"], subjects: ["PIW", "AK2"] },
  ]);

  const [groups, setGroups] = useState([
    { name: "Web-Dev", members: [students[1], students[2]], description: "Grupa zajmuje się tworzeniem stron internetowych", subject: "PIW" },
    { name: "Architektura komputerów", members: [students[0], students[1]], description: "Tworzymy szybkie programy", subject: "AK2" },
  ]);

  return (
    <BrowserRouter basename="PIW/Lab3/build">
      <div className="App">

        <nav>
          <Link to="/groups"><button className="navButton">Przeglądaj grupy</button></Link>
          <Link to="/"><button className="navButton">Szukaj ogłoszeń</button></Link>
          <Link to="/addStudent"><button className="navButton">Dodaj ogłoszenie</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<SearchStudents students={students} />} />
          <Route path="/addStudent" element={<AddStudent addStudent={(student) => setStudents([...students, student])} />} />
          <Route path="/groups" element={<SearchGroups groups={groups} />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
