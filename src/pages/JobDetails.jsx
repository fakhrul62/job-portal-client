import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  IoCalendarOutline,
  IoPhonePortraitOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { p } from "motion/react-client";

const JobDetails = () => {
    const job = useLoaderData();
    const {
      _id,
      title,
      location,
      jobType,
      category,
      applicationDeadline,
      salaryRange,
      description,
      company,
      requirements,
      responsibilities,
      status,
      hr_email,
      hr_name,
      company_logo,
    } = job;

  return (
    <div>
      <div className="text-center py-24">
        <h4 className="font-extrabold text-2xl">Job Details</h4>
      </div>
      <div className="grid md:grid-cols-3 w-10/12 mx-auto py-12">
        <div className="md:col-span-2">
          <p className="mb-2">
            <h2 className="font-extrabold leading-loose">Job Description: </h2>{" "}
            {company}
          </p>
          <p className="mb-2">
            <h2 className="font-extrabold leading-loose">Job Description: </h2>{" "}
            {description}
          </p>
          <p className="mb-2">
            <h2 className="font-extrabold leading-loose">
              Job Responsibility:{" "}
            </h2>{" "}
            {responsibilities.map(req=> <li>{req}</li>)}
          </p>
          <p className="mb-2">
            <h2 className="font-extrabold leading-loose">
              Requirements:{" "}
            </h2>{" "}
            {requirements.map(req=> <li>{req}</li>)}
          </p>
          <p className="mb-2">
            <h2 className="font-extrabold leading-loose">Application Deadline: </h2>{" "}
            {applicationDeadline}
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-5">
          <h4 className="font-bold text-xl">Job Details</h4>
          <hr className="my-3" />
          <p className="flex items-center">
            <AiOutlineDollar className="mr-2" />
            <span className="font-bold mr-2"> Salary: </span>
            <span>{salaryRange.min}-{salaryRange.max}</span>
          </p>
          <p className="flex items-center">
            <IoCalendarOutline className="mr-2" />
            <span className="font-bold mr-2"> Job Title:</span> {title}
          </p>
          <h4 className="font-bold text-xl mt-5">Contact information</h4>
          <hr className="my-3" />
          <p className="flex items-center">
            <IoPhonePortraitOutline className="mr-2" />
            <span className="font-bold mr-2"> Category:</span>{" "}
            {category}
          </p>
          <p className="flex items-center">
            <IoMailOutline className="mr-2" />
            <span className="font-bold mr-2"> Job Type:</span>{" "}
            {jobType}
          </p>
          <p className="flex items-center">
            <IoLocationOutline className="mr-2" />
            <span className="font-bold mr-2"> Address:</span>{" "}
            {location}
          </p>
          <div className="text-center">
            <Link to={`/apply/${_id}`}>
            <button
              className="btn bg-gradient-to-r from-blue-500 to-blue-700 mt-5 w-full text-white "
              type="button"
            >
              Apply Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
