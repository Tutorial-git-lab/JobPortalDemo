import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login1 = ({ onLogin }) => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    //Add your login logic here
    try {
      const response = await axios.post(
        `https://localhost:7053/api/User/Login?email=${email}&password=${password}`,
        { email, password }
      );
      console.log(response);
      const accessToken = response.data.Token;
      if (response.data.Role === "admin") {
        nav("/admin");
      } else if (response.data.Role === "company") {
        nav("/company");
      } else if (response.data.Role === "jobseeker") {
        nav("/jobseeker");
      }
      localStorage.setItem("accessToken", accessToken);

      onLogin();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 d-flex-col">
            <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver">
              <div className="form_container p-5 rounded bg-dark text-white w-40 my-1">
                <form onSubmit={handleLogin}>
                  <div className="form-group mb-2 ">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group  mb-2">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input type="checkbox" />
                    <label htmlFor="check">Remember me</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login1;
