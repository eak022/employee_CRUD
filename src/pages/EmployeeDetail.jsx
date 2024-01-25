import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    fetch(`https://teal-sleepy-armadillo.cyclic.app/employee/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data && data.employee) {
          setEmployeeData(data.employee);
        } else {
          console.error("Employee not found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Employee Detail</h2>
            </div>
            {console.log(employeeData)}
            {employeeData && (
              <div className="card-body">
                <div className="card-text">
                  <h3>
                    {employeeData.name} - ({employeeData.id})
                  </h3>
                  <h4>Date: {employeeData.date}</h4>
                  <h4>Time: {employeeData.time}</h4>
                  <h4>Section: {employeeData.section}</h4> {/* เพิ่มการแสดงข้อมูล Section */}
                </div>
                <Link className="btn btn-danger" to="/employee">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
