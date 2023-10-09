import { Link } from "react-router-dom";
const NotesListComponent = (props) => {
    const { notes, title } = props
    return (
        <div className="note-list">
        <h2>{ title }</h2>
        <hr/>
        {notes.map((note) => (
            
            <div className="note-preview" key={note.id}>
            <Link to={`/notes/${note.id}`}><h3>{note.title}</h3></Link>
            <small>Date: {note.date}</small><br/>
            <small>Time: {note.time}</small><br/>
            </div>
        ))}

        </div>
    );
}
 
export default NotesListComponent;