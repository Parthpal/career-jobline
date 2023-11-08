import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Header from '../Home/Shared/Header';
import MyJobsDetails from './MyJobsDetails';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';

const MyJobs = () => {
    const loadedData=useLoaderData();
    const {user}=useContext(AuthContext);
   // const [jobs,setJobs]=useState([]);
    const matchedData=loadedData.filter(job=>job.userEmail == user.email);
    const [myJob,setMyJob]=useState(matchedData);

    console.log(myJob);
    console.log(matchedData);
    
    // useEffect(()=>{
    //     fetch('https://ph-job-line-server.vercel.app/jobs')
    //     .then(res=>res.json())
    //     .then(data=>setJobs(data))
    // },[])


    return (<>
        <Header/>
        <Helmet>
                <title>My Job | Jobline</title>
            </Helmet>
        <h3 className='text-3xl text-center font-semibold mb-5 my-10'>My Posted Jobs</h3>
        { myJob.length?<div className="overflow-x-auto w-3/4 text-center container my-10 mx-auto">
        <table className="table mx-auto border-2 border-violet-500">
    {/* head */}
                <thead className='bg-[#E6DFFC] text-black text-center text-base'>
                <tr>
                    <th>Posted By</th>
                    <th>Job Post</th>
                    <th>Deadline</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                
                    {
                    myJob.map(job=><MyJobsDetails setMyJob={setMyJob} myJob={myJob} job={job}></MyJobsDetails>)
                    }

                </tbody>

        </table>
 
    </div>:<>
            
            <h3 className='text-xl text-center text-black'>You did not Post Any Job Yet</h3> </>}
           <Footer/>
            </>);
    };

export default MyJobs;