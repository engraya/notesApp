import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const CreateNewNoteComponent = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [dataPostIsPending, setDataPostIsPending] = useState(false);
    const historyRedirect = useHistory();

    const handleSubmitDataFunction = (e) => {
        e.preventDefault();
        const newNoteData = {title, body, date, time }

        setDataPostIsPending(true);
        const url = 'http://localhost:8000/notes'

        fetch(url, {
            method : 'POST',
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(newNoteData)
        })
        .then(() => {
            console.log("New Note Added Succesfully!.......")
            setDataPostIsPending(false);
            historyRedirect.push('/');
        })

    }
    return (
        <div className="create">
            <h2>Add New Note</h2>
            <form onSubmit={handleSubmitDataFunction}>
                <label>Title</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Date</label>
                <input 
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)} />
                <label>Time</label>
                <input 
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)} />
                <label>Content</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} />
                { !dataPostIsPending && <button>Add Note</button>}
                { dataPostIsPending && <button>Adding New Note..........</button>}
            </form>
            <Link to="/"><button className="back-home">Cancel</button></Link>
        </div>
    );
}
 
export default CreateNewNoteComponent;