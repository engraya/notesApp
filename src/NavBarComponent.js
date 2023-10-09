import { Link } from "react-router-dom";
const NavBarComponent = () => {
    return (
        <nav className="navbar">
            <h2>NotesApp</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/new" className="new">New Note</Link>
            </div>
        </nav>
    );
}
 
export default NavBarComponent;