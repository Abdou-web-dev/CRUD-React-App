import { Button } from "antd";
import { Link } from "react-router-dom";
import "./pages_styles.scss";

function Home() {
  return (
    <>
      <div className="home-container">
        <Link to="/workouts" className="home-begin">
          <Button className="home-begin-btn">
            <span>Begin</span>
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
