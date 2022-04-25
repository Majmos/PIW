import { useState } from "react";

const AddGroup = ({ students, addGroup }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState("");
  const [searchText, setSearchText] = useState("");
  const [subject, setSubject] = useState("");

  const handleAddMember = () => {
    let foundMember = members.map((v) => v.email).includes(member?.email);
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

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleMemberChange = () => {
    let selectedStudent = students.find((student) => student.email === document.getElementById("select").value);
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
            <input onChange={handleTextChange} placeholder="" type={"search"} />
            <button onFocus={handleMemberChange} type="button" onClick={handleAddMember} className="formButton">Dodaj</button>
          </div>
          <div>
            <select id="select" onClick={(e) => setMember(students.find((student) => student.email === e.target.value))}>
              {students
                .filter((student) => student.name.toLowerCase().includes(searchText.toLowerCase()))
                .map((student, i) => <option value={student.email} key={i}>{student.name}</option>)}
            </select>
          </div>
          <ul>
            {members.map((member, i) => <li key={i} className="member">{member?.name}</li>)}
          </ul>
        </div>
        <div className="formElement">
          <label>Przedmiot:</label>
          <input required onChange={(e) => setSubject(e.target.value)} placeholder="Przedmiot" type={"text"} />
        </div>
        <input className="submitButton" value="Dodaj ogłoszenie" type="submit" />
      </form >
    </div >
  );
};

export default AddGroup;