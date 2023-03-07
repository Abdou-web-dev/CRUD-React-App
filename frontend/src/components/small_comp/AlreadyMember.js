import { Button } from "antd";
import { Link } from "react-router-dom";

export function AlreadyMember() {
  return (
    <div className="signup-form-not-a-member">
      <span className="signup-form-text1">Have already an account ?</span>
      <Button className="signup-form-not-a-member-register-btn">
        <Link to="/login">
          <span className="signup-form-text2"> Login</span>
        </Link>
      </Button>
    </div>
  );
}
