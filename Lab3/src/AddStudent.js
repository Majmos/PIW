import { useState } from "react"

function AddStudent({addStudent}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [subjects, setTSubjects] = useState([]);

    return (
        <div className="formBox">
            <h1>Nowe ogłoszenie</h1>
            <form>
                <div className="formElement">  
                    <label>Nazwa:</label>
                    <input placeholder="Nazwa" type={"text"} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="formElement">
                    <label>E-mail:</label>
                    <input placeholder="E-mail" type={"email"}/></div>
                <div className="formElement">
                    <label>Opis:</label>
                    <textarea placeholder="Opis" onChange={(e) => setDescription(e.target.value)}/></div>
                <div className="formElement">
                    <label>Tag:</label>
                    <div className="inputBox">
                        <input placeholder="Tag" type={"text"}/><button className="formButton">Dodaj</button>
                    </div>
                    <ul>
                        {tags.map((tag, i) => <li key={i} className="tag">{tag}</li>)}
                    </ul>
                </div>
                <div className="formElement">
                    <label>Przedmiot:</label>
                    <div className="inputBox">
                        <input placeholder="Przedmiot" type={"text"}/><button className="formButton">Dodaj</button>
                    </div>
                </div>
                <input className="submitButton" value={"Dodaj ogłoszenie"} type={"submit"} onClick={() => addStudent(name, description, tags, subjects)}/>
            </form>
        </div>
    );
}

export default AddStudent;