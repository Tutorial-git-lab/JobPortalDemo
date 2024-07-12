import React from "react";
import { Link } from "react-router-dom";
export default function JobSeekerRegistration() {
  return (
    <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
      <div className="form_container rounded bg-white w-80 my-1">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <h5 className="text-center mb-3 my-3 ">Job Seeker Registration</h5>
          </div>

          <div className="col-6 d-flex-col p-3  ">
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="firstName" className="form-label col-4 text-end">
                <strong>First Name:</strong>
              </label>
              <input
                type="text"
                className="col-5"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="lastname" className="form-label col-4 text-end">
                <strong>Last Name:</strong>
              </label>
              <input
                type="text"
                className="col-5"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="address" className="form-label col-4 text-end">
                <strong>Address:</strong>
              </label>
              <input
                type="text"
                className="col-5"
                placeholder="Enter Address"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="city" className="form-label col-4 text-end">
                <strong>City:</strong>
              </label>
              <select name="select" className="col-5">
                <option value="0">Pune</option>
                <option value="1">Mumbai</option>
                <option value="2">Mohali</option>
                <option value="3">jaipur</option>
              </select>
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="pincode" className="form-label col-4 text-end">
                <strong>Pincode:</strong>
              </label>
              <select name="select" className="col-5">
                <option value="0">Software Developer</option>
                <option value="1">Database Engineer</option>
                <option value="2">DevOps Engineer</option>
                <option value="3">Software Engineer</option>
              </select>
            </div>

            <div className="form-group d-flex mb-2 row">
              <label htmlFor="mobile" className="form-label col-4 text-end">
                <strong>Mobile:</strong>
              </label>
              <input type="text" className="col-5" placeholder="Enter Mobile" />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="gender" className="form-label col-4 text-end">
                <strong>Gender:</strong>
              </label>
              <select name="select" className="col-5">
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </div>
          </div>

          <div className="col-6 d-flex-col p-3 ">
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="degree" className="form-label col-4 text-end">
                <strong>Degree:</strong>
              </label>
              <select name="select" className="col-5">
                <option value="0">MCA</option>
                <option value="1">BCA</option>
                <option value="2">B.Tech</option>
                <option value="3">B.Com</option>
                <option value="4">MBA</option>
              </select>
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="skill" className="form-label col-4 text-end">
                <strong>Skill:</strong>
              </label>
              <select name="select" id="select" className="col-5">
                <option value="0">ASP.Net</option>
                <option value="1">Javascript</option>
                <option value="2">Angular</option>
                <option value="3">React Js</option>
                <option value="4">.Net</option>
              </select>
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="exprience" className="form-label col-4 text-end">
                <strong>Exprience:</strong>
              </label>
              <select name="select" className="col-5">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="form-group d-flex mb-2 my-3 row ">
              <label htmlFor="email" className="form-label col-4 text-end ">
                <strong>Email Address:</strong>
              </label>
              <input
                type="email"
                className="col-5 "
                placeholder="Enter Email address"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="password" className="form-label col-4 text-end">
                <strong>Password:</strong>
              </label>
              <input
                type="password"
                className="col-5"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label
                htmlFor="confirmPassword"
                className="form-label col-4 text-end "
              >
                <strong>ConfirmPassword:</strong>
              </label>
              <input
                type="password"
                className="col-5"
                placeholder="Enter Confirm-password"
              />
            </div>
            <div className="text-center">
              <Link to="/">
                <button type="submit" className="btn btn-success mt-2">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
