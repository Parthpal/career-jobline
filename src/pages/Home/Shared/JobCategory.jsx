import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import JobCategoryDetails from './JobCategoryDetails';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {  

const [category,setCategory]=useState([]);
const [jobs,setJobs]=useState([]);
const category_name=category.map(cat=>(cat.cat_name));
//console.log(category_name.length)
const matchedData_onsite=jobs.filter(job=>job.jobCategory==category_name[0]);
const matchedData_remote=jobs.filter(job=>job.jobCategory==category_name[1]);
const matchedData_hybrid=jobs.filter(job=>job.jobCategory==category_name[2]);
const matchedData_partTime=jobs.filter(job=>job.jobCategory==category_name[3]);
//console.log(matchedData_onsite);
//console.log();
//console.log(jobs);
// const [toggleState,setToggleState]=useState('null');
useEffect(()=>{
fetch('https://ph-job-line-server.vercel.app/jobs')
.then(res=>res.json())
.then(data=>setJobs(data))
},[])

useEffect(()=>{
    fetch('https://ph-job-line-server.vercel.app/jobCategory')
    .then(res=>res.json())
    .then(data=>setCategory(data))
},[])



    return (<>
        
           {/* <h3>{category.length}</h3>  */}
           {/* <h3>{data.length}</h3>  */}
           {/* <h3>{jobTitle}</h3>  */}
        <div>
        <Tabs className='text-center '>
        <TabList className='border-b-2 text-[#523B9B] font-bold border-[#523B9B]'>
            <Tab>ALL</Tab>
                {
                    category.map(cat=><Tab>{cat.cat_name.toUpperCase()}</Tab>)
                }
        </TabList>     
        
        <TabPanel className=''>
        <div data-aos='fade-out' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 '>
            {
                jobs.map(job=><>
                <div className="card rounded-none lg:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                        <figure><img className='w-full h-56' src={job.photo} alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Post: {job.jobTitle}</h2>
                                <p>Posted By: {job.userName}</p>
                                <p>Job Post: {job.jobPostingDate.slice(0, 10)}</p>
                                <p>Job Deadline: {job.jobDateDeadline.slice(0, 10)}</p>
                                <p>Salary Range: ${job.salary}</p>
                                <p>Total Applicants: {job.applicants}</p>
                                <Link to={`/jobs/${job._id}`} className="text-white btn bg-[#523B9B] font-semibold w-full my-5">Details</Link>
                          </div>
                          </div>
                </>)
               
            }
            </div> 
        </TabPanel>
        
        <TabPanel>
        <div data-aos='fade-out' className='grid lg:grid-cols-3 md:grid-cols-2 mx-2  grid-cols-1 my-10 '>
            {
                matchedData_onsite.map(job=><>
                <div className="card rounded-none lg:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                        <figure><img className='w-full h-56' src={job.photo} alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Post: {job.jobTitle}</h2>
                                <p>Posted By: {job.userName}</p>
                                <p>Job Post: {job.jobPostingDate.slice(0, 10)}</p>
                                <p>Job Deadline: {job.jobDateDeadline.slice(0, 10)}</p>
                                <p>Salary Range: ${job.salary}</p>
                                <p>Total Applicants: {job.applicants}</p>
                                <Link to={`/jobs/${job._id}`} className="text-white btn bg-[#523B9B] font-semibold w-full my-5">Details</Link>
                          </div>
                          </div>
                </>)
               
            }
            </div> 
        </TabPanel>
        <TabPanel>
        <div data-aos='fade-out' className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 my-10 '>
            {
                matchedData_remote.map(job=><>
                <div className="card rounded-none lg:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                        <figure><img className='w-full h-56' src={job.photo} alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Post: {job.jobTitle}</h2>
                                <p>Posted By: {job.userName}</p>
                                <p>Job Post: {job.jobPostingDate.slice(0, 10)}</p>
                                <p>Job Deadline: {job.jobDateDeadline.slice(0, 10)}</p>
                                <p>Salary Range: ${job.salary}</p>
                                <p>Total Applicants: {job.applicants}</p>
                                <Link to={`/jobs/${job._id}`} className="text-white btn bg-[#523B9B] font-semibold w-full my-5">Details</Link>
                          </div>
                          </div>
                </>)
               
            }
            </div> 
        </TabPanel>
        <TabPanel>
        <div data-aos='fade-out' className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 my-10 '>
            {
               matchedData_hybrid.map(job=><>
                <div className="card rounded-none lg:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                        <figure><img className='w-full h-56' src={job.photo} alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Post: {job.jobTitle}</h2>
                                <p>Posted By: {job.userName}</p>
                                <p>Job Post: {job.jobPostingDate.slice(0, 10)}</p>
                                <p>Job Deadline: {job.jobDateDeadline.slice(0, 10)}</p>
                                <p>Salary Range: ${job.salary}</p>
                                <p>Total Applicants: {job.applicants}</p>
                                <Link to={`/jobs/${job._id}`} className="text-white btn bg-[#523B9B] font-semibold w-full my-5">Details</Link>
                          </div>
                          </div>
                </>)
               
            }
            </div> 
        </TabPanel>
        <TabPanel>
        <div data-aos='fade-out' className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 my-10 '>
            {
                matchedData_partTime.map(job=><>
                <div className="card rounded-none lg:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                        <figure><img className='w-full h-56' src={job.photo} alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Post: {job.jobTitle}</h2>
                                <p>Posted By: {job.userName}</p>
                                <p>Job Post: {job.jobPostingDate.slice(0, 10)}</p>
                                <p>Job Deadline: {job.jobDateDeadline.slice(0, 10)}</p>
                                <p>Salary Range: ${job.salary}</p>
                                <p>Total Applicants: {job.applicants}</p>
                                <Link to={`/jobs/${job._id}`} className="text-white btn bg-[#523B9B] font-semibold w-full my-5">Details</Link>
                          </div>
                          </div>
                </>)
               
            }
            </div> 
        </TabPanel>

        </Tabs> 
        </div>
        </>);
};

export default JobCategory;