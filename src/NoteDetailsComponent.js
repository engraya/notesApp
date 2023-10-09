import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetchDataHook from "./useFetchDataHook";
import { Link } from "react-router-dom";

const NotesDetailsComponent = () => {
    const { id } = useParams();
    const url = 'http://localhost:8000/notes/'
    const {data: note, fetchIsLoading, errorMessageLog } = useFetchDataHook(url + id)
    const historyRedirectHook = useHistory();

    const handleDataDeleteFunction = () => {
        fetch(url + note.id, {
            method : 'DELETE'
        })
        .then(() => {
            historyRedirectHook.push('/')
        })
    }
    return (
        <div className="note-details">
        { errorMessageLog && <div>{ errorMessageLog }</div>}
        { fetchIsLoading && <div>Fetching Data...........</div>}
        { note && (
            <article>
                <h2>{ note.title }</h2><br />
                <small>Date : { note.date }</small><br />
                <small>Time : { note.time }</small><br />
                <hr />
                <div className="container">
                    { note.body }
                </div>
                <button onClick={handleDataDeleteFunction}>Delete Note</button>
                <Link to="/"><button className="redirect">Back to Notes</button></Link>
            </article>
        )}


        </div>
    );
}
 
export default NotesDetailsComponent;