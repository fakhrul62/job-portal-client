import React, { useState } from 'react';
import LatestJobCard from '../components/LatestJobCard';
import useJobs from '../hooks/useJobs';
import { BsSearch } from 'react-icons/bs';

const LatestJobs = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const {jobs, loading} = useJobs(sort, search,min, max);
    if(loading){
        return <div className='flex justify-center items-center w-full h-screen'><span className="loading loading-dots loading-lg"></span></div>
    }
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center font-bold text-3xl my-5'>All Latest Jobs</h2>
            <div className='p-10 flex items-center gap-5'>
                <button type="button" onClick={()=>setSort(!sort)} className={`btn text-white hover:bg-zinc-400 active:text-black ${sort ? 'bg-blue-500' : 'bg-green-700'}`}>{sort ? "Sort by Salary" : "Sorted by Salary"}</button>
                <BsSearch></BsSearch>
                <input type="text" onKeyUp={(e)=> setSearch(e.target.value)} name="search" placeholder='Search jobs by location' className='input border-blue-500' id="" />
                <input type="number" onKeyUp={(e)=> setMin(e.target.value)} name="min" placeholder='Min Salary' className='input border-blue-500' id="" />
                <input type="number" onKeyUp={(e)=> setMax(e.target.value)} name="max" placeholder='Max Salay' className='input border-blue-500' id="" />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    jobs?.map(job=><LatestJobCard key={job._id} job={job}></LatestJobCard>)
                }
            </div>
        </div>
    );
};

export default LatestJobs;