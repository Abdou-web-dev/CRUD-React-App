import { Button, Input } from "antd";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, fullName);
  };

  return (
    <>
      <div className="signup-form-container">
        <div className="signup-form-inner">
          <form className="signup-form" name="form" onSubmit={handleSubmit}>
            <label htmlFor="">Email : </label>

            <Input
              className="signup-form-email-item-input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              allowClear
            />

            <label htmlFor="">Full Name : </label>
            <Input
              className="signup-form-full-name-item-input"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              placeholder="Full Name"
              allowClear
            />

            <label htmlFor="">Password : </label>
            <Input.Password
              className="signup-form-password-item-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              allowClear
            />

            <div className="signup-form-btn-and-error">
              <Button
                className="signup-form-btn-item-button"
                disabled={isLoading}
                type="primary"
                htmlType="submit"
              >
                <span>Sign up</span>
              </Button>
              {error && (
                <div className="text-error">
                  <span>{error} !</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
