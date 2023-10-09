import { Link } from "react-router-dom";
const PageNotFoundComponent = () => {
    return (
        <div className="page-not-found">
            <h2>Page Not Found</h2><br />
            <p>The Requested Page is not Found, you can redirect to other pages or check your requested Urls Properly!.....</p><br />
            <Link to="/"><button>Back to Notes</button></Link>
        </div>
    );
}
 
export default PageNotFoundComponent;