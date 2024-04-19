import React, { useState, useEffect } from 'react';
import './Jobs.css';
import jobsData from '../Data'; // Make sure the path matches your file structure
import { useNavigate, useLocation } from 'react-router-dom';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const locations = params.get('locations') ? params.get('locations').split(',') : [];
  
    // Initialize filtered here to ensure it's available in the entire scope
    let filtered = [];
  
    // If both title and locations are empty, show all jobs
    if (!title && locations.length === 0) {
      filtered = jobsData; // Assign all jobs if no filter is specified
    } else {
      // Apply filters based on title and locations
      filtered = jobsData.filter(job => {
        const titleMatch = title ? job.title.toLowerCase().includes(title.toLowerCase()) : true;
        const locationMatch = locations.length ? locations.some(loc => job.location.toLowerCase().includes(loc.toLowerCase())) : true;
        return titleMatch && locationMatch;
      });
    }
  
    setFilteredJobs(filtered);
  
    // Set the first job as selected if filtered jobs are not empty
    if (filtered.length > 0) {
      setSelectedJob(filtered[0]);
      setIsDescriptionOpen(true);
    } else {
      setSelectedJob(null);
      setIsDescriptionOpen(false);
    }
  }, [location.search]);  // Dependency on location.search to rerun when search parameters change
  
  const handleJobClick = (event, jobId) => {
    event.stopPropagation();
    const job = filteredJobs.find(job => job.id === jobId);
    setSelectedJob(job);
    setIsDescriptionOpen(true);
  };

  const handleViewDetailsClick = (event, jobId) => {
    event.stopPropagation();
    const job = filteredJobs.find(job => job.id === jobId);
  
    if (window.innerWidth < 768) {
      navigate(`/jobs/${jobId}`); // Navigate to the job detail page on smaller screens
    } else {
      // Set the selected job and ensure the details panel is open
      setSelectedJob(job);
      setIsDescriptionOpen(true); // Always open the panel when a job is clicked
    }
  };
  
  return (
    <section className="job">
      <div className="container">
        <div className="row">
          <div className="col-md-5 job-listings">
            {filteredJobs.map((job) => (
              <div className="job-card" key={job.id} onClick={(event) => handleJobClick(event, job.id)}>
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
