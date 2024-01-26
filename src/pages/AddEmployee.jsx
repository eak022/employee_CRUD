const [localTime, setLocalTime] = useState("");

useEffect(() => {
  fetch("https://your-backend-url/localTime")
    .then((res) => res.json())
    .then((data) => {
      setLocalTime(data.localTime);
    })
    .catch((error) => {
      console.error("Error fetching local time:", error);
    });
}, []);   ใส่ตรงไหน                                                                                                                                                                         import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
  name: "",
  section: "ส่วนอำนวยการ", // Default section value
});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
app.post('/employees', (req, res) => {
  const lastEmployeeId = employeeData.employee.length > 0 ? employeeData.employee[employeeData.employee.length - 1].id : 0;
  const newEmployeeId = lastEmployeeId + 1;

  const newEmployee = req.body;
  newEmployee.id = newEmployeeId;

  const currentDate = new Date().toISOString(); // Add the current date with timezone
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  newEmployee.date = currentDate;
  newEmployee.time = formattedTime;

  // Set the section to "ส่วนอำนวยการ" if not provided
  newEmployee.section = newEmployee.section || "ส่วนอำนวยการ";

  employeeData.employee.push(newEmployee);

  // ... (save data to the employee.json file or database)

  res.json(newEmployee); // Send the data of the newly added employee
});

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
                        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
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
                        onChange={(e) => setEmployee({ ...employee, section: e.target.value })}
                        className="form-control"
                        disabled // ทำให้ Input เป็น disabled
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
