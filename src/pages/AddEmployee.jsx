import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });
  const [localTime, setLocalTime] = useState(""); // State to hold the local time
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://your-backend-url/localTime")
      .then((res) => res.json())
      .then((data) => {
        setLocalTime(data.localTime);
      })
      .catch((error) => {
        console.error("Error fetching local time:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleSubmit = (e) => {
    e.preventDefault();
    // Rest of your code for handling employee submission
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    {/* ... (rest of your form) */}
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="localTime">Local Time</label>
                      <input
                        type="text"
                        name="localTime"
                        id="localTime"
                        value={localTime}
                        className="form-control"
                        readOnly // Make it read-only to prevent user input
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/employee/list" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
