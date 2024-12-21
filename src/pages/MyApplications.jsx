import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxios();
  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/job-application?email=${user.email}`, {withCredentials: true})
    //   .then((res) => {
    //     setJobs(res.data);
    //   });
    axiosSecure.get(`/job-application?email=${user.email}`)
    .then(res=> setJobs(res.data))

  }, [user.email]);
  return (
    <div className="my-8 w-10/12 mx-auto">
      <h2 className="text-center font-bold text-3xl mb-5">
        My Job Applications: {jobs.length}
      </h2>
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
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.jobType}</td>
                  <td>{job.applicationDeadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
