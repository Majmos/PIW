import { useState, useEffect } from "react";
import "./App.css";
import AddStudent from "./AddStudent";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import SearchStudents from "./SearchStudents";
import SearchGroups from "./SearchGroups";
import AddGroup from "./AddGroup";
import SendMassage from "./SendMassage";

function App() {
  const [students, setStudents] = useState([]);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/PIW/Lab3/build/data/data.json", {
      method: "GET",
    }).then(response => {
      response.json().then(data => {
        setStudents(data.students);
        setGroups(data.groups);
      });
    });
  }, []);


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
