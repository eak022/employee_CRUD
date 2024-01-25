import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    date: "",
    time: "",
    id: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://calm-gold-fish-gear.cyclic.app/employees/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data.employee); // ตั้งค่าข้อมูลพนักงานที่ได้รับมาเป็นค่าเริ่มต้นใน state
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      name: employee.name,
      date: employee.date,
      time: employee.time,
      id: employee.id,
      section: employee.section, // ปรับให้รวม section ลงไปด้วย
    };
    fetch(`https://teal-sleepy-armadillo.cyclic.app/employee/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employeeData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Save successfully");
          navigate("/employee/list"); // เมื่อบันทึกเสร็จสิ้นให้นำไปยังหน้ารายการพนักงาน
        } else {
          throw new Error("Failed to save");
        }
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
                <h2>Edit Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">Id</label>
                      <input
                        type="text"
                        disabled
                        name="id"
                        id="id"
                        value={id}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
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

export default EditEmployee;
