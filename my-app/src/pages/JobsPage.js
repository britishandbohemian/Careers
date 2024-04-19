import React, { useState } from 'react';
import './Jobs.css';
import jobsData from '../Data'; // Update the path according to your file structure
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true); 
  const navigate = useNavigate();

  const handleJobClick = (event, jobId) => {
    event.stopPropagation(); 
    if (window.innerWidth < 768) {
      navigate(`/job-details/${jobId}`);
    } else {
      const job = jobsData.find(job => job.id === jobId);
      setSelectedJob(job);
      setIsDescriptionOpen(true);
    }
  };

  const handleViewDetailsClick = (event, jobId) => {
    event.stopPropagation(); 
    const job = jobsData.find(job => job.id === jobId);
    setSelectedJob(job);
    setIsDescriptionOpen(prev => !prev); 
  };

  return (
    <section className="job">
      <div className="container">
        <div className="row">
          <div className="col-md-5 job-listings">
            {jobsData.map((job) => (
              <div className="job-card" key={job.id} onClick={(event) => handleJobClick(event, job.id)}>
                <h1>{job.title}</h1>
                <h2>{job.company}</h2>
                <div className="job-details">
                  <span>{job.pay}</span>
                  <span> - </span>
                  <span>{job.type}</span>
                  <span> - </span
                  <span>{job.location}</span>
                </div>
                <p>{job.description.slice(0, 100)}...</p>
                <button className="jobbtn" onClick={(event) => handleViewDetailsClick(event, job.id)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
          <div className="col-md-7 job-description-container">
            {selectedJob && isDescriptionOpen && (
              <div className={`job-description ${isDescriptionOpen ? 'fade-in' : ''}`}>
                <div className="job-description-header">
                  <div className='job-description-header-text'>
                    <h1>{selectedJob.title}</h1>
                    <h2>{selectedJob.company}</h2>
                  </div>
                  {selectedJob.logo && <img src={selectedJob.logo} alt="Company Logo" />}
                </div>
                <h4>Location: {selectedJob.location}</h4>
                <p>Type: {selectedJob.type}</p>
                <p>Salary: {selectedJob.pay}</p>
                <h5>Skills Needed:</h5>
                <ul className="skills-breadcrumbs">
                  {selectedJob.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <hr />
                <h5>Description</h5>
                <p>{selectedJob.description}</p>
                <button className="btnJob">Apply Now</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
