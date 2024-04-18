import React, { useState, useEffect } from 'react';
import './Jobs.css';
// Import the data at the top of your component file
import jobsData from '../Data'; // Update the path according to your file structure

// Now you can use jobsData in your component


const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);
  const [animate, setAnimate] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);


  useEffect(() => {}, []);

  const handleJobClick = (jobId) => {
    const job = jobsData.find((job) => job.id === jobId);
    setSelectedJob(job);
    setIsDescriptionOpen(!isDescriptionOpen); // Toggle open/closed state
  };
  

  return (
    <section className="job">
      <div className="container">
        <div className="row">
          <div className="col-md-5 job-listings">
            {jobsData.map((job) => (
              <div className="job-card" key={job.id} onClick={() => handleJobClick(job.id)}>
                <h1>{job.title}</h1>
                <h2>{job.company}</h2>
                <div className="job-details">
                  <span>{job.pay}</span>
                  <span> - </span>
                  <span>{job.type}</span>
                  <span> - </span>
                  <span>{job.location}</span>
                </div>
                <p>{job.description.slice(0, 100)}...</p>
                <button className="jobbtn">View</button>
              </div>
            ))}
          </div>
          <div className="col-md-7 job-description-container">
            {selectedJob && (
              <div className={`job-description ${animate ? 'fade-in' : ''}`}>
                <h1>{selectedJob.title}</h1>
                <h2>{selectedJob.company}</h2>
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
