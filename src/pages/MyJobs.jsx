import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div className="my-8 w-10/12 mx-auto">
      <h2 className="text-center font-bold text-3xl mb-5">
        My Jobs: {jobs.length}
      </h2>
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Job Type</th>
                  <th>Application Count</th>
                  <th>Deadline</th>
                  <th>Applications</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={job._id} className="hover">
                    <th>{index + 1}</th>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.jobType}</td>
                    <td>{job.applicationCount ? job.applicationCount: 0}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>
                        <Link to={`/review-applications/${job._id}`}><button type="button" className="btn">View Applications</button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
