import { useState } from "react";
import "./App.css";
import AddStudent from "./AddStudent";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import SearchStudents from "./SearchStudents";
import SearchGroups from "./SearchGroups";
import AddGroup from "./AddGroup";
import SendMassage from "./SendMassage";

function App() {
  const [students, setStudents] = useState([
    { name: "Adam", description: "Jestem studentem. Szukam grupy do kursu Architektura Komputerów 2. Potrafię pisać kod w C.", tags: ["C", "Kotlin"], subjects: ["AK2"], email: "adam@student.pl" },
    { name: "Krzysiek Konon", description: "Udaje studenta", tags: ["C", "JS"], subjects: ["PIW", "AK2"], email: "krzysztof.konon@student.pl" },
    { name: "Wojtek Suchodolski", description: "Lubie tworzyć ładne strony internetowe.", tags: ["CSS", "JS"], subjects: ["PIW"], email: "wojtek.suchodolski@student.pl" },
    { name: "Marek Suski", description: "Chcę dostać się do jakiejkolwiek grupy.", tags: ["CSS", "JS", "C", "Java", "Kotlin", "C++"], subjects: ["PIW", "AK2"], email: "marek.sus@pis.pl" },
  ]);

  const [groups, setGroups] = useState([
    { name: "Web-Dev", members: [students[1], students[2]], description: "Grupa zajmuje się tworzeniem stron internetowych", subject: "PIW" },
    { name: "Architektura komputerów", members: [students[0], students[1]], description: "Tworzymy szybkie programy", subject: "AK2" },
  ]);

  return (
    <HashRouter>
      <div className="App">

        <nav>
          <Link to="/groups"><button className="navButton">Przeglądaj grupy</button></Link>
          <Link to="/addGroup"><button className="navButton">Dodaj grupę</button></Link>
          <Link to="/"><button className="navButton">Szukaj ogłoszeń</button></Link>
          <Link to="/addStudent"><button className="navButton">Dodaj ogłoszenie</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<SearchStudents students={students} />} />
          <Route path="/addStudent" element={<AddStudent addStudent={(student) => setStudents([...students, student])} />} />
          <Route path="/groups" element={<SearchGroups groups={groups} />} />
          <Route path="/addGroup" element={<AddGroup students={students} addGroup={(group) => setGroups([...groups, group])} />} />
          <Route path="/sendMessage" element={<SendMassage />} />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;
