import React from "react";
import useAuth from "../hooks/useAuth";

const AddJob = () => {
    const {user} = useAuth();
  const handleJobSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialFormData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialFormData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split(",");
    newJob.responsibilities = newJob.responsibilities.split(",");
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    //const form = e.target;
    // const job = {
    //   title: form.title.value,
    //   location: form.location.value,
    //   type: form.type.value,
    //   company: form.company.value,
    //   deadline: form.deadline.value,
    //   logo: form.logo.value,
    //   salaryRange: {
    //     min: form.min.value,
    //     max: form.max.value,
    //   },
    //   requirements: form.requirements.value.split(",").map((req) => req.trim()),
    //   category: form.category.value,
    //   description: form.description.value,
    // };
    //console.log("Submitted Job:", job);
    // Reset the form after submission
    //form.reset();
  };
  return (
    <div className="w-10/12 mx-auto my-8">
      <div>
        <form
          className="w-full max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg"
          onSubmit={handleJobSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a Job</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* title */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                id="name"
                name="title"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Job Title"
              />
            </div>
            {/* location */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="email"
                name="location"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Location"
              />
            </div>
            {/* job type */}
            <div className="mb-4">
              <label
                htmlFor="linkedin"
                className="block text-gray-700 font-medium mb-2"
              >
                Job Type
              </label>
              <select
                name="jobType"
                className="select select-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Choose a Job Type
                </option>
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
            {/* category */}
            <div className="mb-4">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Choose a Category
                </option>
                <option>Development</option>
                <option>Marketing</option>
                <option>Data Science</option>
                <option>Engineering</option>
                <option>Management</option>
                <option>Teaching</option>
                <option>Design</option>
              </select>
            </div>
            {/* application deadline */}
            <div className="mb-4 col-span-2">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Application Deadline
              </label>
              <input
                type="date"
                id="resumeUrl"
                name="applicationDeadline"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Application Deadline"
              />
            </div>
            {/* Salary */}
            <div className="mb-4 col-span-2">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Salary Range
              </label>
              <div className="flex gap-5">
                <input
                  type="number"
                  id="resumeUrl"
                  name="min"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Min"
                />
                <input
                  type="number"
                  id="resumeUrl"
                  name="max"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Max"
                />
                <select
                  name="currency"
                  className="select select-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled selected>
                    Choose a Currency
                  </option>
                  <option>USD</option>
                  <option>CAD</option>
                  <option>BDT</option>
                </select>
              </div>{" "}
            </div>
            {/* description */}
            <div className="mb-4 col-span-2">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                type="text"
                name="description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
                id=""
                rows="5"
              ></textarea>
            </div>
            {/* company */}
            <div className="mb-4">
              <label
                htmlFor="github"
                className="block text-gray-700 font-medium mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="github"
                name="company"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company"
              />
            </div>
            {/* requirements */}
            <div className="mb-4">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Requirements
              </label>
              <input
                type="text"
                id="resumeUrl"
                name="requirements"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Requirements (separate with comma)"
              />
            </div>
            {/* responsibilities */}
            <div className="mb-4">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Responsibilities
              </label>
              <input
                type="text"
                id="resumeUrl"
                name="responsibilities"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Responsibilities (separate with comma)"
              />
            </div>
            {/* status */}
            <div className="mb-4">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Status
              </label>
              <select
                name="status"
                className="select select-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Choose a Status
                </option>
                <option>Active</option>
                <option>Unactive</option>
              </select>
            </div>
            {/* hr email */}
            <div className="mb-4">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                HR Email
              </label>
              <input
                type="text"
                defaultValue={user.email}
                id="resumeUrl"
                name="hr_email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="HR Email"
              />
            </div>
            {/* hr name */}
            <div className="mb-4">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                HR Name
              </label>
              <input
                type="text"
                id="resumeUrl"
                name="hr_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="HR Name"
              />
            </div>
            {/* logo */}
            <div className="mb-4 col-span-2">
              <label
                htmlFor="resumeUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Company Logo
              </label>
              <input
                type="url"
                id="resumeUrl"
                name="company_logo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company Logo"
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
    </div>
  );
};

export default AddJob;
