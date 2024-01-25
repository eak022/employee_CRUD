import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    date: "",
    time: "",
    id: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://teal-sleepy-armadillo.cyclic.app/employee")
      .then((res) => res.json())
      .then((data) => {
        let newEmployeeId;
        if (data.employee.length > 0) {
          const lastEmployeeId = data.employee[data.employee.length - 1].id;
          newEmployeeId = lastEmployeeId + 1;
        } else {
          newEmployeeId = 1;
        }

        const employeeData = {
          id: newEmployeeId, // ใช้ไอดีใหม่ที่ได้จากการคำนวณ
          name: employee.name,
          date: employee.date,
          time: employee.time,
          section: "ส่วนอำนวยการ", // เพิ่ม section เป็นส่วนอำนวยการ
        };

        fetch("https://tiny-pear-caiman-hem.cyclic.app/employeeห", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(employeeData),
        })
          .then((res) => res.json())
          .then(() => {
            alert("Save successfully");
            navigate("/employee/list");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
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
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input
                        type="text"
                        required
                        name="date"
                        id="date"
                        value={employee.date}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="time">Time</label>
                      <input
                        type="text"
                        required
                        name="time"
                        id="time"
                        value={employee.time}
                        onChange={handleChange}
                        className="form-control"
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
