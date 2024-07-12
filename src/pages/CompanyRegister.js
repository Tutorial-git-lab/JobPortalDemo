import React, { useState } from "react";
export default function CompanyRegister() {
  return (
    <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
      <div className="form_container rounded bg-silver w-80 my-1 ">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <h5 className="text-center mb-3 my-3 "> Company Registration</h5>
          </div>

          <div className="col-6 d-flex-col p-2 ">
            <div className="form-group d-flex mb-2 my-3 row">
              <label
                htmlFor="companyName"
                className="form-label col-4 text-end"
              >
                <strong>Company Name:</strong>
              </label>
              <input
                type="text"
                className="col-6"
                placeholder="Enter Company's name"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="address" className="form-label col-4 text-end">
                <strong>Address:</strong>
              </label>
              <input
                type="text"
                className="col-6"
                placeholder="Enter Address"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="city" className="form-label col-4 text-end">
                <strong>City:</strong>
              </label>
              <select name="select" className="col-3">
                <option value="0">Mohali</option>
                <option value="1">Chandigarh</option>
                <option value="2">Chenai</option>
                <option value="3">Pune</option>
              </select>
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="pincode" className="form-label col-4 text-end">
                <strong>Pincode:</strong>
              </label>
              <input
                type="text"
                className="col-6"
                placeholder="Enter Pinecode"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label
                htmlFor="contact person"
                className="form-label col-4 text-end"
              >
                <strong>Contact:</strong>
              </label>
              <input
                type="text"
                className="col-6"
                placeholder="Enter Contact Person"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="mobile" className="form-label col-4 text-end">
                <strong>Mobile:</strong>
              </label>
              <input type="text" className="col-6" placeholder="Enter Mobile" />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="type" className="form-label col-4 text-end">
                <strong>Type:</strong>
              </label>
              <select name="select" className="col-6">
                <option value="0">Software Developer</option>
                <option value="1">Database Engineer</option>
                <option value="2">DevOps Engineer</option>
                <option value="3">Software Engineer</option>
              </select>
            </div>
          </div>

          <div className="col-6 d-flex-col p-2 ">
            <div className="form-group d-flex mb-2 my-3 row ">
              <label htmlFor="email" className="form-label col-4 text-end ">
                <strong>Email Address:</strong>
              </label>
              <input
                type="email"
                className="col-6 "
                placeholder="Enter Email address"
              />
            </div>
            <div className="form-group d-flex mb-2 row">
              <label htmlFor="password" className="form-label col-4 text-end">
                <strong>Password:</strong>
              </label>
              <input
                type="password"
                className="col-6"
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
                className="col-6"
                placeholder="Enter Confirm-password"
              />
            </div>
            <div className="text-center">
              <a href="/">
                <button type="submit" className="btn btn-success mt-3">
                  Submit
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
