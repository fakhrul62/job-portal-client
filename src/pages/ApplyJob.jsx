import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resumeUrl = form.resumeUrl.value;
    const application = {
      job_id: id,
      applicant: name,
      applicant_email: email,
      linkedin,
      github,
      resumeUrl,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Job Applied!",
          // text: "You clicked the button!",
          icon: "success",
          iconColor: "#3575dd",
          confirmButtonText: 'Okay',
          customClass: {
            confirmButton: "bg-blue-500 text-white font-body px-32",
            title: "font-head font-bold text-2xls",
          },
        });
        console.log(data);
        navigate("/my-applications");
      });
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-10/12 mx-auto my-8">
      <form
        className="w-full max-w-5xl bg-white p-8 shadow-lg rounded-lg"
        onSubmit={handleJobSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Job Application
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.displayName ? user.displayName : "John Doe"}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-gray-700 font-medium mb-2"
            >
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://linkedin.com/in/your-profile"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-gray-700 font-medium mb-2"
            >
              GitHub Profile
            </label>
            <input
              type="url"
              id="github"
              name="github"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://github.com/your-profile"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="resumeUrl"
              className="block text-gray-700 font-medium mb-2"
            >
              Resume URL
            </label>
            <input
              type="url"
              id="resumeUrl"
              name="resumeUrl"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://your-resume-link.com"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
