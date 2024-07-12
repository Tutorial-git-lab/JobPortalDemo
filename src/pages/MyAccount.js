import axios from "axios";
import React, { useEffect, useState } from "react";
const MyAccount = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("");
  const [btnChange, setBtnChange] = useState("");

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("error fatching data:", error);
      });
  }, []);

  const AddCompanyAccount = (e) => {
    if (btnChange === "submit") {
      axios
        .post("", {
          id,
          companyname,
          address,
          city,
          pinCode,
          mobile,
          type,
        })
        .then((result) => {
          console.log(result);
          alert("Data Added");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put("", {
          id,
          companyname,
          address,
          city,
          pinCode,
          mobile,
          type,
        })
        .then((result) => {
          alert("Data Added");
          console.log(result);
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
      .delete("" + id)
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
    setCompanyname(dataedit.companyname);
    setAddress(dataedit.address);
    setCity(dataedit.city);
    setPinCode(dataedit.pinCode);
    setMobile(dataedit.mobile);
    setType(dataedit.type);
    setBtnChange("saveChange");
  };

  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
        <div className="form_container rounded bg-white w-80 my-1">
          <div className="row" onSubmit={AddCompanyAccount}>
            <div className="d-flex justify-content-center ">
              <h5 className="text-center mb-2 my-1 ">My Account</h5>
            </div>

            <div className="col-12 d-flex-col p-2np ">
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
                  value={companyname}
                  onChange={(e) => setCompanyname(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-group d-flex mb-2 row">
                <label htmlFor="city" className="form-label col-4 text-end">
                  <strong>City:</strong>
                </label>
                <select
                  name="select"
                  id="select"
                  className="col-6  "
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
                  <strong>Pincode:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  placeholder="Enter Pinecode"
                />
              </div>

              <div className="form-group d-flex mb-2 row">
                <label htmlFor="mobile" className="form-label col-4 text-end">
                  <strong>Mobile:</strong>
                </label>
                <input
                  type="text"
                  className="col-6"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter Mobile"
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
              <th>CompanyName</th>
              <th>Address</th>
              <th>City</th>
              <th>PinCode</th>
              <th>Mobile</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) &&
              user.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.companyname}</td>
                    <td>{val.address}</td>
                    <td>{val.city}</td>
                    <td>{val.pinCode}</td>
                    <td>{val.mobile}</td>
                    <td>{val.type}</td>
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
export default MyAccount;
