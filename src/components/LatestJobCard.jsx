import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoBriefcaseOutline, IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LatestJobCard = ({ job }) => {
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
    <div className="border border-zinc-400 p-5 rounded-xl flex flex-col">
      <div className="flex gap-2">
        <img src={company_logo} className="h-12 object-contain" />
        <div>
          <h2 className="font-semibold">{company}</h2>
          <p className="flex items-center gap-1 text-sm text-zinc-500">
            <FiMapPin />
            <span>{location}</span>
          </p>
        </div>
      </div>
      <Link to={`/jobs/${_id}`}><h2 className="text-blue-700 font-semibold text-lg mt-4">{title}</h2></Link>
      <div className="flex items-center gap-4 text-sm text-zinc-500 my-2">
        <p className="flex items-center gap-1">
          <IoBriefcaseOutline />
          <span>{jobType}</span>
        </p>
        <p className="flex items-center gap-1">
          <IoCalendarOutline />
          <span>Deadline: {applicationDeadline}</span>
        </p>
      </div>
      <p className="text-zinc-700 grow">{description}</p>
      <div className="flex gap-2 flex-wrap mt-3">
        {requirements.map((req, idx) => (
          <button key={idx} className="bg-zinc-800 text-xs text-white px-4 py-2 rounded-lg">
            {req}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <p className="text-zinc-700">Salary Range: <span className="text-blue-800 font-bold text-xl">{salaryRange.min}-{salaryRange.max}</span> <span className="uppercase">{salaryRange.currency}</span></p>
      </div>
      <div className="mt-3">
        <Link to={`/jobs/${_id}`}>
        <button type="button" className="hover:bg-zinc-800 hover:text-white duration-200 text-black border border-black w-full py-3 rounded-lg">Apply Now</button></Link>
      </div>
    </div>
  );
};

export default LatestJobCard;
