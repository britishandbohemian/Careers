import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from '../Data'; // Ensure path is correct
import './JobDetails.css';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  const job = jobsData.find(job => job.id === Number(id));

  const handleBack = () => {
    navigate(-1); // Go back one page in history
  };
  return (
    <div className="job-detail-page">
              <button className="back-btn" onClick={handleBack}>
        Back
      </button>
      <h1>{job?.title}</h1>
      <h2>{job?.company}</h2>
      {job?.logo && <img src={job?.logo} alt={`${job?.company} logo`} style={{ width: 100, height: 100 }} />}
      <p><strong>Description:</strong> {job?.description}</p>
      <p><strong>Pay:</strong> {job?.pay}</p>
      <p><strong>Type:</strong> {job?.type}</p>
      <p><strong>Location:</strong> {job?.location}</p>
      <div>
        <h3>Skills Needed:</h3>
        <ul>
          {job?.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobDetail;
