import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  fetch(`https://calm-gold-fish-gear.cyclic.app/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); 
      setEmployeeData(data);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);

  const loadEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const loadDetail = (id) => {
    navigate(`/employee/detail/${id}`);
  };

  const removeEmployee = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`https://calm-gold-fish-gear.cyclic.app/employee/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then(() => {
          const updatedEmployees = employeeData.filter((item) => item.id !== id);
          setEmployeeData(updatedEmployees);
          alert("Remove successfully");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/employee/create" className="btn btn-success">
              เพิ่ม(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ลำดับ</td>
                <td>ชื่อ-สกุล</td>
                <td>วันที่</td>
                <td>เวลา</td>
                <td>ฝ่าย</td> {/* เพิ่มคอลัมน์ Section */}
                <td>การดำเนินการเพิ่มเติม</td>
              </tr>
            </thead>
            <tbody>             
              {employeeData &&
                employeeData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.section}</td> {/* แสดงข้อมูล Section */}
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => loadEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeEmployee(item.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => loadDetail(item.id)}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
