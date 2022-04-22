const Student = (student = { name: String, description, tags, subjects }) => (
    <div className="student">
        <div>
            <h1>Nazwa: {student.name}</h1>
        </div>
        <div>
            <h1>Opis:</h1>
            {student.description}
        </div>
        <div>
            <h1>Tags:</h1>
            <ul>
            {student.tags.map((tag, i) => <li key={i}>{tag}</li>)}
            </ul>
        </div>
        <div>
            <h1>Subjects:</h1>
            <ul>
            {student.subjects.map((subject, i) => <li key={i}>{subject}</li>)}
            </ul>
        </div>
    </div>
)

export default Student;