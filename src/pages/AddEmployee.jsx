import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    section: "ส่วนอำนวยการ", // Default section value
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0];
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const employeeData = {
      name: employee.name,
      date: currentDate,
      time: currentTime,
      section: employee.section,
    };

    fetch("https://calm-gold-fish-gear.cyclic.app/employees", {
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
  };

  return (
    <div>
      {/* ... (previous JSX code) */}
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

