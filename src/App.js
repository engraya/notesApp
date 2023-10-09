import NavBarComponent from './NavBarComponent';
import HomeComponent from './HomeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewNoteComponent from './CreateNewNoteComponent';
import NotesDetailsComponent from './NoteDetailsComponent';
import PageNotFoundComponent from './PageNotFoundComponent';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBarComponent/>
      <div className='content'>
      <Switch>
        <Route exact path="/">
        <HomeComponent/>
        </Route>
        <Route path="/new">
        <CreateNewNoteComponent/>
        </Route>
        <Route path="/notes/:id">
        <NotesDetailsComponent/>
        </Route>
        <Route path="*">
        <PageNotFoundComponent/>
        </Route>
      </Switch>
      </div>

      </div>
    </Router>
  );
}

export default App;
