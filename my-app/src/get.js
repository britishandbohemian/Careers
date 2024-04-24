import React, { useEffect, useState } from 'react';
import { getAllJobs } from './FirebaseOperations'; // Adjust the import path according to your project structure

const TestJobsComponent = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const loadedJobs = await getAllJobs();
            console.log('Fetched jobs:', loadedJobs);
            setJobs(loadedJobs);
        };

        fetchJobs();
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
