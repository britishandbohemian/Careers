import React from 'react';
import { useParams } from 'react-router-dom';
import jobsData from '../Data'; // Ensure path is correct

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find(job => job.id === Number(id));

  return (
    <div className="job-detail-page">
      <h1>{job?.title}</h1>
      <h2>{job?.company}</h2>
      <img src={job?.logo} alt={`${job?.company} logo`} />
      <p>{job?.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default JobDetail;
