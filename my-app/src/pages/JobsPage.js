import React, { useState, useEffect } from 'react';
import './Jobs.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllJobs } from '../FirebaseOperations';

const Jobs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchAndFilterJobs = async () => {
      const fetchedJobs = await getAllJobs();
      filterJobs(fetchedJobs, location.search);
    };

    fetchAndFilterJobs();
  }, [location.search]);

  // Function to filter jobs based on search parameters
  const filterJobs = (fetchedJobs, search) => {
    const params = new URLSearchParams(search);
    const title = params.get('title');
    const locations = params.get('locations') ? params.get('locations').split(',') : [];
    
    const filtered = fetchedJobs.filter(job => {
      const titleMatch = title ? job.title.toLowerCase().includes(title.toLowerCase()) : true;
      const locationMatch = locations.length ? locations.some(loc => job.location.toLowerCase().includes(loc.toLowerCase())) : true;
      return titleMatch && locationMatch;
    });

    setJobs(filtered);
    setSelectedJob(null); // Reset selected job on filter change
  };

  const handleJobClick = (job) => {
    if (window.innerWidth < 768) {
      navigate(`/jobs/${job.id}`);
    } else {
      setSelectedJob(job);
    }
  };

  return (
    <section className="job">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 job-listings">
            {jobs.map((job) => (
              <div className="job-card" key={job.id} onClick={() => handleJobClick(job)}>
                <h1>{job.title}</h1>
                <h2>{job.company}</h2>
                <p>{job.description.slice(0, 100)}...</p>
                <button className="jobbtn" onClick={() => handleJobClick(job)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
          {selectedJob && (
            <div className="col-md-7 job-description-container">
              <div className="job-description fade-in">
                <div className="job-description-header">
                  <h1>{selectedJob.title}</h1>
                  <h2>{selectedJob.company}</h2>
                  {selectedJob.logo && <img src={selectedJob.logo} alt="Company Logo" />}
                </div>
                <p>Location: {selectedJob.location}</p>
                <p>Type: {selectedJob.type}</p>
                <p>Salary: {selectedJob.pay}</p>
                <ul className="skills-breadcrumbs">
                  {selectedJob.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p>{selectedJob.description}</p>
                <button className="btnJob">Apply Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
