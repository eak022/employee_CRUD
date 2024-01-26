import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://your-backend-url/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...employee,
        section: employee.section || "ส่วนอำนวยการ",
      }),
    });

    if (response.ok) {
      // Successfully added employee, redirect to the list page or do something else
      navigate("/employee/list");
    } else {
      console.error("Error adding employee:", response.statusText);
    }
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
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        id="name"
                        value={employee.name}
                        onChange={(e) =>
                          setEmployee({ ...employee, name: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="section">Section</label>
                      <input
                        type="text"
                        required
                        name="section"
                        id="section"
                        value={employee.section}
                        onChange={(e) =>
                          setEmployee({ ...employee, section: e.target.value })
                        }
                        className="form-control"
                        disabled // Make it disabled to prevent user input
                      />
                    </div>
                  </div>
                  {/* You don't need to include the local time input here */}
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
