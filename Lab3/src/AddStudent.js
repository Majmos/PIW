import { useState } from "react"

function AddStudent({addStudent}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState("");

    const handleAddTag = (e) => {
        if (tag !== "") {
            setTags([...tags, tag]);
        }
    }

    const handleAddSubject = (e) => {
        if (subject !== "") {
            setSubjects([...subjects, subject]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ name, description, tags, subjects })
        e.target.reset();
        setTags([]);
        setSubjects([]);
    }

    return (
        <div className="formBox">
            <h1>Nowe ogłoszenie</h1>
            <form onSubmit={handleSubmit}>
                <div className="formElement">  
                    <label>Nazwa:</label>
                    <input required placeholder="Nazwa" type={"text"} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="formElement">
                    <label>E-mail:</label>
                    <input required placeholder="E-mail" type={"email"}/></div>
                <div className="formElement">
                    <label>Opis:</label>
                    <textarea required placeholder="Opis" onChange={(e) => setDescription(e.target.value)}/></div>
                <div className="formElement">
                    <label>Tag:</label>
                    <div className="inputBox">
                        <input onChange={(e) => setTag(e.target.value)} placeholder="Tag" type={"text"}/><button type="button" onClick={handleAddTag} className="formButton">Dodaj</button>
                    </div>
                    <ul>
                        {tags.map((tag, i) => <li key={i} className="tag">{tag}</li>)}
                    </ul>
                </div>
                <div className="formElement">
                    <label>Przedmiot:</label>
                    <div className="inputBox">
                        <input onChange={(e) => setSubject(e.target.value)} placeholder="Przedmiot" type={"text"}/><button type="button" onClick={handleAddSubject} className="formButton">Dodaj</button>
                    </div>
                    <ul>
                        {subjects.map((tag, i) => <li key={i} className="tag">{tag}</li>)}
                    </ul>
                </div>
                <input className="submitButton" value="Dodaj ogłoszenie" type="submit"/>
            </form>
        </div>
    );
}

export default AddStudent;