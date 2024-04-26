import React, { useState, useEffect } from 'react';
import './Jobs.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { format } from 'date-fns'; // Make sure to install date-fns if not already done

const Jobs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Jobs'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedJobs = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const postedDate = data.posted.toDate();
        const formattedDate = format(postedDate, 'PP');
        return { id: doc.id, ...data, posted: formattedDate };
      });
      setJobs(fetchedJobs);
      setFilteredJobs(fetchedJobs);
      if (fetchedJobs.length > 0) {
        setSelectedJob(fetchedJobs[0]); // Set the first job as selected on load
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const jobTitle = params.get('title');
    const jobLocation = params.get('location');
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(jobTitle?.toLowerCase() || '') &&
      job.location.toLowerCase().includes(jobLocation?.toLowerCase() || '')
    );
    setFilteredJobs(filtered);
  }, [location.search, jobs]);

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
            {filteredJobs.map((job) => (
              <div className="job-card" key={job.id} onClick={() => handleJobClick(job)}>
                <h1>{job.title}</h1>
                <h2>{job.company}</h2>
                <p>{job.description ? job.description.slice(0, 100) : "Description Unavailable"}...</p>
                <div style={{display:'flex', flexDirection:'column',marginBottom:'1rem'}}>
                  <small>Posted on: {job.posted}</small>
                  <small>Closing Date on: {job.posted}</small>
                </div>
                <button className="jobbtn" onClick={() => handleJobClick(job)}>View Details</button>
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
