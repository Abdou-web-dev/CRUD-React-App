import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "./login_signup_styles.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailClass, setemailClass] = useState("login-form-email-item-input");
  const [passwordClass, setPasswordClass] = useState(
    "login-form-password-item-input"
  );
  const [fullNameClass, setFullNameClass] = useState(
    "login-form-full-name-item-input"
  );

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "")
      setemailClass(
        "login-form-email-item-input login-form-email-item-input-empty"
      );
    if (password === "")
      setPasswordClass(
        "login-form-password-item-input login-form-password-item-input-empty"
      );
    if (fullName === "")
      setFullNameClass(
        "login-form-full-name-item-input login-form-full-name-item-input-empty"
      );

    await login(email, password, fullName);
  };

  return (
    <div className="login-form-container">
      <div className="login-form-inner">
        <form className="login-form" name="form" onSubmit={handleSubmit}>
          <Form.Item
            className="login-form-email-item"
            label={
              <div className="login-form-email-item-label">
                <span>Email address</span>
              </div>
            }
            name="Email address"
            rules={[{ required: true }]}
            // wrapperCol={{
            //   offset: 8,
            //   span: 8,
            // }}
          >
            <Input
              className={emailClass}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="login-form-full-name-item"
            label={
              <div className="login-form-full-name-item-label">
                <span>Full name</span>
              </div>
            }
            name="Full name"
            rules={[{ required: true }]}
          >
            <Input
              className={fullNameClass}
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              placeholder="Full Name"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="login-form-password-item"
            label={
              <div className="login-form-password-item-label">
                <span>Password</span>
              </div>
            }
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password
              className={passwordClass}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="login-form-btn-item"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className="login-form-btn-and-error">
              <Button
                className="login-form-btn-item-button"
                disabled={isLoading}
                type="primary"
                htmlType="submit"
              >
                <span> Login</span>
              </Button>
              {error && (
                <div className="text-error">
                  <span>{error} !</span>
                </div>
              )}
            </div>
          </Form.Item>
          <div className="login-form-not-a-member">
            <span className="login-form-text1"> not a member ?</span>
            <Button className="login-form-not-a-member-register-btn">
              <Link to="/signup">
                <span className="login-form-text2"> Register</span>
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/
