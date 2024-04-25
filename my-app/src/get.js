
import React, { useEffect, useState } from 'react';
import { getAllJobs, addFakeJobs } from './FirebaseOperations'; 

const TestJobsComponent = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        await addFakeJobs(); // Wait for fake job addition to complete

        const fetchedJobs = await getAllJobs(); 
        setJobs(fetchedJobs); // Set jobs after the fake job is added

      } catch (error) {
        console.error('Failed to load jobs:', error); 
        // Consider adding UI error handling here
      }
    };

    loadJobs(); 
  }, []); 

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestJobsComponent;
