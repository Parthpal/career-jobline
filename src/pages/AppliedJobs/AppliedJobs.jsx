import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Header from '../Home/Shared/Header';
import AppliedJobsDetails from './AppliedJobsDetails';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';

const AppliedJobs = () => {
    const {user}=useContext(AuthContext);
    console.log();
    const [appliedJobs,setAppliedJobs]=useState([]);
    const [displayCategory,setDisplayCategory]=useState([]);
    const matchedData=appliedJobs.filter(job=>job.user_email == user.email);
    const matchedDataCat=displayCategory.filter(job=>job.user_email == user.email);


    //const category = document.getElementById("job_cate");
    //const value = category.value;
    //console.log(value );
    useEffect(()=>{
        fetch('https://ph-job-line-server.vercel.app/resume')
        .then(res=>res.json())
        .then(data=>{
            setAppliedJobs(data),
            setDisplayCategory(data)})
    },[])

    const handleFilter=(filter)=>{
        if(filter=='all'){
            setDisplayCategory(matchedData)
        }
        else if(filter=='remote'){
            const remoteFilter=matchedData.filter(data=>data.category=='remote')
            setDisplayCategory(remoteFilter)
        }
        else if(filter=='onsite'){
            const remoteFilter=matchedData.filter(data=>data.category=='onsite')
            setDisplayCategory(remoteFilter)
        }
        else if(filter=='partTime'){
            const remoteFilter=matchedData.filter(data=>data.category=='partTime')
            setDisplayCategory(remoteFilter)
        }
        else if(filter=='hybrid'){
            const remoteFilter=matchedData.filter(data=>data.category=='hybrid')
            setDisplayCategory(remoteFilter)
        }


    }
    return (<>
        <Header/>
        <Helmet>
                <title>Applied Jobs | Jobline</title>
            </Helmet>
        <h3 className='text-3xl text-center font-semibold mb-5'>My Applied Jobs</h3>

        <div className='flex md:justify-end justify-center my-10 mr-0 md:mr-10'>
        <details className="dropdown">
        <summary className="m-1 btn">Category Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleFilter('all')}><a>All</a></li>
            <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
            <li onClick={()=>handleFilter('onsite')}><a>On Site</a></li>
            <li onClick={()=>handleFilter('partTime')}><a>Part time</a></li>
            <li onClick={()=>handleFilter('hybrid')}><a>Hybrid</a></li>
        </ul>
        </details>
        </div>


        { matchedData.length?<div className="overflow-x-auto w-3/4 text-center container mx-auto">
  <table className="table mx-auto border-2 border-violet-500">
    {/* head */}
    <thead className='bg-[#E6DFFC] text-black text-center text-base'>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Job Post</th>
        <th>Resume Link</th>
      </tr>
    </thead>
    <tbody>
      
        {
           matchedDataCat.map(data=><AppliedJobsDetails data={data}></AppliedJobsDetails>)
        }

    </tbody>

  </table>
 
</div>:<>
        <h3 className='text-xl text-center text-black'>You did not Apply For Job Yet</h3> </>}
        
        <Footer/>
        </>);
};

export default AppliedJobs;