import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    console.log(id, e.target.value);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount){
          Swal.fire({
          title: "Status Changed!",
          // text: "You clicked the button!",
          icon: "success",
          iconColor: "#3575dd",
          confirmButtonText: "Okay",
          customClass: {
            confirmButton: "bg-blue-500 text-white font-body px-32",
            title: "font-head font-bold text-2xls",
          },
        });
        }
        
      });
  };
  return (
    <div className="my-8 w-10/12 mx-auto">
      <h2 className="text-center font-bold text-3xl mb-5">
        Review Applications: {applications.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{app.applicant}</td>
                  <td>{app.applicant_email}</td>
                  <td>{app.status}</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      name="status"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        Change Status
                      </option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
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

export default ReviewApplications;
