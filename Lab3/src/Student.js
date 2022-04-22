const Student = ({student}) => (
    <div>
        <div>
            <h2>Nazwa:</h2>
            {student.name}
        </div>
        <div>
            <h2>Opis:</h2>
            {student.description}
        </div>
        <div>
            <h2>Tags:</h2>
            <ul className="tags">
            {student.tags.map((tag, i) => <li key={i} className="tag">{tag}</li>)}
            </ul>
        </div>
        <div>
            <h2>Subjects:</h2>
            <ul className="subjects">
            {student.subjects.map((subject, i) => <li key={i} className="subject">{subject}</li>)}
            </ul>
        </div>
    </div>
)

export default Student;