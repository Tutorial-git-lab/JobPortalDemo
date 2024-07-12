import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    //Add your login logic here
    try {
      const response = await axios.post(
        "https://localhost:7053/api/User/Login",
        { email, password }
      );
      console.log(response);
      const accessToken = response.data.token;
      console.log(accessToken);
      if (response.data.role === "Admin") {
        nav("/admin");
      } else if (response.data.role === "Company") {
        nav("/company");
      } else if (response.data.role === "Jobseeker") {
        nav("/jobseeker");
      }
      localStorage.setItem("accessToken", accessToken);

      onLogin();
    } catch (error) {
      console.log("error");
    }
  };
  // import React, { useEffect, useState } from "react";
  // import { useNavigate } from "react-router-dom";
  // import axios from "axios";

  // function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const nav = useNavigate();

  //   useEffect(() => {
  //     if (localStorage.getItem("user-info")) {
  //       if (response.data.Role === "admin") {
  //         nav("/admin");
  //       } else if (response.data.Role === "company") {
  //         nav("/company");
  //       } else if (response.data.Role === "jobseeker") {
  //         nav("/jobseeker");
  //       }
  //     }
  //   }, []);

  // async function login() {
  //   const item = { email, password };

  //   try {
  //     const response = await axios.post(
  //       "https://localhost:7053/api/User/Login",
  //       item,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //       console.log(response.data);
  //       localStorage.setItem("user-info", JSON.stringify(response.data));
  //       if (response.data.Role === "admin") {
  //         nav("/admin");
  //       } else if (response.data.Role === "company") {
  //         nav("/company");
  //       } else if (response.data.Role === "jobseeker") {
  //         nav("/jobseeker");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle errors here
  //     }
  //   }
  // const Login = ({ onLogin }) => {
  //   // const nav = useNavigate();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const history=useHistory();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   //Add your login logic here
  //   console.log();
  //   try {
  //     const response = await axios.post(
  //       "https://localhost:7053/api/User/Login",
  //       { email, password }
  //     );

  //     console.log({ response });
  //     const accessToken = response.data.Token;
  //     if (response.data.Role === "admin") {
  //       nav("/admin");
  //     } else if (response.data.Role === "company") {
  //       nav("/company");
  //     } else if (response.data.Role === "jobseeker") {
  //       nav("/jobseeker");
  //     }
  //     localStorage.setItem("accessToken", accessToken);

  //     onLogin();
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };
  return (
    <>
      <div className="col-4 d-flex-col my-0">
        <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver ">
          <div className="form_container p-5 rounded bg-dark text-white w-80 my-1">
            <h5 className="text-center mb-2">Login Form</h5>
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
              <div className="row ">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary mt-3">
                    Login
                  </button>
                </div>
                <div className="col-8 ">
                  <p className=" cur d-flex justify-content-center ">
                    <div class="dropdown">
                      <button
                        class="btn btn-primary mt-3"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SignUp
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="jobseekerregister">
                            JobSeeker Register
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="companyregister">
                            Company Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
