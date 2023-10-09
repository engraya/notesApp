import NotesListComponent from "./NotesListComponent";
import useFetchDataHook from "./useFetchDataHook";

const HomeComponent = () => {
    const url = 'http://localhost:8000/notes'
    const {data: notes, fetchIsLoading, errorMessageLog } = useFetchDataHook(url)

    return (
        <div className="home">
        { errorMessageLog && <div>{ errorMessageLog }</div>}
        { fetchIsLoading && <div>Fetching Data...........</div>}
        { notes && <NotesListComponent notes={notes} title="Recent Notes!"/>}
        </div>
        
    );
}
 
export default HomeComponent;


