import { useState, useEffect, useReducer } from "react";
import "./App.css";
import AddStudent from "./components/Students/AddStudent";
import { HashRouter, Routes, Route } from "react-router-dom";
import SearchStudents from "./components/Students/SearchStudents";
import SearchGroups from "./components/Groups/SearchGroups";
import AddGroup from "./components/Groups/AddGroup";
import SendMessage from "./components/Messages/SendMessage";
import StudentProfile from "./components/Students/StudentProfile";
import Login from "./components/User/Login";
import UserContext from "./components/Contexts/UserContext";
import Header from "./components/Header";
import { reducer, initState, ReducerContext } from "./components/Contexts/ReducerContext";

function App() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [nextStudentId, setNextStudentId] = useState();
  const [nextGroupId, setNextGroupId] = useState();
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetch("/PIW/Lab3/build/data/data.json", {
      method: "GET",
    }).then(response => response.json())
      .then(data => {
        setGroups(data.groups);
        setNextGroupId(data.groups.length + 1);
        fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 30)}&limit=${data.students.length}`, {
          method: "GET",
        }).then(response => response.json())
          .then(images => {
            let studentsWithImg = data.students.map((student, i) => ({ ...student, imgUrl: `https://picsum.photos/id/${images[i].id}/100` }));
            setStudents(studentsWithImg);
            setNextStudentId(data.students.length + 1);
          });
      });
  }, []);

  const addStudent = (student) => {
    student.id = nextStudentId;
    student.imgUrl = `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/100`;
    setNextStudentId(nextStudentId + 1);
    setStudents([...students, student]);
  };

  const addGroup = (group) => {
    group.id = nextGroupId;
    setNextGroupId(nextGroupId + 1);
    setGroups([...groups, group]);
  };

  const getStudentById = (id) => {
    return students.find((student) => student.id === parseInt(id));
  };

  return (
    <UserContext.Provider value={useState(null)}>
      <ReducerContext.Provider value={[state, dispatch]}>
        <HashRouter>
          <div className="App">

            <Header />

            <Routes>
              <Route path="/" element={<SearchStudents students={students} />} />
              <Route path="/addStudent" element={<AddStudent addStudent={addStudent} />} />
              <Route path="/groups" element={<SearchGroups groups={groups} />} />
              <Route path="/addGroup" element={<AddGroup students={students} addGroup={addGroup} />} />
              <Route path="/sendMessage" element={<SendMessage />} />
              <Route path="/profile/:studentid" element={<StudentProfile getStudent={getStudentById} />} />
              <Route path="/login" element={<Login />} />
            </Routes>

          </div >
        </HashRouter >
      </ReducerContext.Provider>
    </UserContext.Provider >
  );
}

export default App;
