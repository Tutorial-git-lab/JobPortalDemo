import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const JobSeekerAccount = () => {
  const [id, setId] = useState();
  const [user, setuser] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [pinCode, setPinCode] = useState();
  const [mobile, setMobile] = useState();
  const [type, setType] = useState();
  const [btnchange, setBtnChange] = useState();

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        console.log(response.data); // Log the response data
        setuser(response.data); // Set the state with the array data
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const AddJobSeekerAccount = (e) => {
    if (btnchange === "submit") {
      axios
        .post("", {
          firstName,
          lastName,
          address,
          city,
          pinCode,
          mobile,
          type,
        })
        .then((result) => {
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put("", {
          firstName,
          lastName,
          address,
          city,
          pinCode,
          mobile,
          type,
          id,
        })
        .then((result) => {
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    debugger;
    e.preventDefault();
  };

  const DeleteData = (id) => {
    axios
      .delete(
        "https://localhost:7195/api/Qualification/DeleteQualification?Id=" + id
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const EditData = (dataedit) => {
    setId(dataedit.id);
    setFirstName(dataedit.firstName);
    setLastName(dataedit.lastName);
    setAddress(dataedit.address);
    setCity(dataedit.city);
    setPinCode(dataedit.pinCode);
    setMobile(dataedit.mobile);
    setType(dataedit.type);
    setBtnChange("saveChange");
  };

  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-90 vh-40 ">
        <div className="form_container rounded bg-white w-90 my-1">
          <div className="row" onSubmit={AddJobSeekerAccount}>
            <div className="d-flex justify-content-center ">
              <h5 className="text-center mb-2 my-1 ">My Account</h5>
            </div>

            <div className="col-12 d-flex-col p-1 ">
              <div className="form-group d-flex mb-2 my-3 row">
                <label
                  htmlFor="firstname"
                  className="form-label col-4 text-end"
                >
                  <strong>First Name:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Company's name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group d-flex mb-2 my-3 row">
                <label htmlFor="lastname" className="form-label col-4 text-end">
                  <strong>Last Name:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Company's name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="city" className="form-label col-4 text-end">
                  <strong>City:</strong>
                </label>
                <select
                  name="select"
                  id="select"
                  className="col-6 "
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="0">Delhi</option>
                  <option value="1">Mumbai</option>
                  <option value="2">Pune</option>
                  <option value="3">Bangluru</option>
                  <option value="4">Mohali</option>
                </select>
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="pincode" className="form-label col-4 text-end">
                  <strong>PinCode:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter Pinecode"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="mobile" className="form-label col-4 text-end">
                  <strong>Mobile:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  placeholder="Enter your mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div className="form-group d-flex mb-2 row">
                <label htmlFor="type" className="form-label col-4 text-end">
                  <strong>Type:</strong>
                </label>
                <select
                  name="select"
                  className="col-6"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="0">Software Development</option>
                  <option value="1">DevOps Engineer</option>
                  <option value="2">Database Enginner</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  Upload Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Father Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>DOB</th>
              <th>Phone Number</th>
              <th>Education</th>
              <th>College</th>
              <th>Session</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) &&
              user.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.studentName}</td>
                    <td>{val.fatherName}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td>{val.dob}</td>
                    <td>{val.phoneNumber}</td>
                    <td>{val.education}</td>
                    <td>{val.college}</td>
                    <td>{val.session}</td>
                    <td>
                      <button
                        className="bg-primary rounded-3 mb-1"
                        onClick={(e) => EditData(val)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-primary rounded-3"
                        onClick={() => DeleteData(val.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default JobSeekerAccount;
