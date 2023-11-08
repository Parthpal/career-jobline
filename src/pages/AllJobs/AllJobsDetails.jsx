import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const AllJobsDetails = ({job}) => {
    const {userName,jobTitle,jobDateDeadline,salary,photo,_id}=job;
    return (<>
        
        <div className="card rounded-none w-96 bg-base-100 shadow-xl mx-auto my-2">
                            <figure><img className='w-96' src={photo} alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Post: {jobTitle}</h2>
                                <p>Job Posted By: {userName}</p>
                                <p>Job Deadline: {jobDateDeadline.slice(0, 10)}</p>
                                <p>Salary Range: ${salary}</p>
                                <Link to={`/jobs/${_id}`} className="text-white btn bg-[#523B9B] font-semibold w-full my-5">Details</Link>
                          </div>
        </div>
        
        </>);
};

export default AllJobsDetails;