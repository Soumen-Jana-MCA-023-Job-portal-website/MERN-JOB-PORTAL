import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_URL+`/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
      document.title = job.jobTitle;
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter your Linkdin URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={job.jobTitle} path={"single job"} />
      <div className="my-4 p-4 border shadow-md">
      <h2>Job ID: {id}</h2>
      <p><span className="font-bold">Posting Date:</span> {job.postingDate}</p>
      <p><span className="font-bold">Company Name:</span> {job.companyName}</p>
      <p><span className="font-bold">Job Location:</span> {job.jobLocation}</p>
      <p><span className="font-bold">Salary Range:</span> ${job.minPrice} - ${job.maxPrice}</p>
      <p><span className="font-bold">Salary Type:</span> {job.salaryType}</p>
      <p><span className="font-bold">Experience:</span> {job.experienceLevel}</p>
      <p><span className="font-bold">Description:</span> {job.description}</p>
      <button className="mt-5 bg-blue px-8 py-2 text-white rounded-md" onClick={handleApply}>
        Apply Now
      </button>
      </div>
    </div>
  );
};

export default JobDetails;
