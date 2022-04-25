import { useState } from "react";

const AddGroup = ({ students, addGroup }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState("");
  const [searchText, setSearchText] = useState("");
  const [subject, setSubject] = useState("");

  const handleAddMember = () => {
    console.log(member?.type);
    console.log(document.getElementById("select").value);
    let selectedStudent = students.find((student) => student.email === document.getElementById("select").value);
    console.log({ selectedStudent });
    if (selectedStudent) {
      setMember(selectedStudent);
    } else {
      console.log("DZIWNE");
      setMember(null);
    }
    console.log({ member });
    let foundMember = members.map((v) => v.email).includes(member?.email);
    console.log(foundMember);
    if (!foundMember && member !== "" && member !== null) {
      setMembers([...members, member]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGroup({ name, description, members, subject });
    e.target.reset();
    setMembers([]);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(document.getElementById("select").value);
    let selectedStudent = students.find((student) => student.email === document.getElementById("select").value);
    console.log(selectedStudent?.name);
    if (selectedStudent) {
      setMember(selectedStudent);
    } else {
      setMember(null);
    }
  };

  return (
    <div className="formBox">
      <h1>Nowa grupa</h1>
      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label>Nazwa:</label>
          <input required placeholder="Nazwa" type={"text"} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formElement">
          <label>Opis:</label>
          <textarea required placeholder="Opis" onChange={(e) => setDescription(e.target.value)} /></div>
        <div className="formElement">
          <label>Członkowie:</label>
          <div className="inputBox">
            <input onChange={handleChange} placeholder="" type={"search"} />
            <button
              onFocus={() => setMember(students.find((student) => student.email === document.getElementById("select").value))}
              type="button" onClick={handleAddMember} className="formButton">Dodaj</button>
          </div>
          <div>
            <select id="select" onClick={(e) => setMember(students.find((student) => student.email === e.target.value))}>
              {students
                .filter((student) => student.name.toLowerCase().includes(searchText.toLowerCase()))
                .map((student, i) => <option value={student.email} key={i}>{student.name}</option>)}
            </select>
          </div>
          <ul>
            {members.map((member, i) => <li key={i} className="member">{member.name}</li>)}
          </ul>
        </div>
        <div className="formElement">
          <label>Przedmiot:</label>
          <input onChange={(e) => setSubject(e.target.value)} placeholder="Przedmiot" type={"text"} />
        </div>
        <input className="submitButton" value="Dodaj ogłoszenie" type="submit" />
      </form >
    </div >
  );
};

export default AddGroup;