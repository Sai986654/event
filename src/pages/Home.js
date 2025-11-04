import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to SPG Events</h1>
      <p>Plan your perfect event with our customized packages.</p>
      <Link to="/service-selection" className="btn btn-primary">
        Get Quotation
      </Link>
    </div>
  );
}

export default Home;
