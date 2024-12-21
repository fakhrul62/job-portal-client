import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LatestJobCard from '../components/LatestJobCard';

const LatestJobs = () => {
    const allJobs = useLoaderData();
    const [jobs, setJobs] = useState(allJobs);
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center font-bold text-3xl my-5'>All Latest Jobs</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    jobs.map(job=><LatestJobCard key={job._id} job={job}></LatestJobCard>)
                }
            </div>
        </div>
    );
};

export default LatestJobs;