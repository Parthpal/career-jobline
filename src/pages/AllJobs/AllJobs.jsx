import { useEffect, useState } from "react";
import AllJobsDetails from "./AllJobsDetails";
import Header from "../Home/Shared/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
    
    const [jobs,setJobs]=useState([]);
    const [displayJobs,setDisplayJobs]=useState([]);
    const [searchVal, setSearchVal] = useState("");
   
useEffect(()=>{
    fetch('https://ph-job-line-server.vercel.app/jobs')
    .then(res=>res.json())
    .then(data=>{
        setJobs(data),
        setDisplayJobs(data)
    })
},[])

console.log(searchVal);

    function handleSearchClick(searchVal2) { 
        if (searchVal2 === " ") 
        { 
            setDisplayJobs(jobs); 
            return; 
        } 
        const filterBySearch = jobs.filter((item) => { 
            if (item.jobTitle.toLowerCase() 
                .includes(searchVal2.toLowerCase())) 
                {
                     return item;
                }
            else{
                return setDisplayJobs(jobs); 
            }     
        }) 
        setDisplayJobs(filterBySearch); 
    } 
    return (<>
        <Header/>
        <Helmet>
                <title>All Jobs | Jobline</title>
        </Helmet>
        <h3 className='text-4xl text-center font-semibold mb-5'>All Jobs</h3>
        <div className="flex md:justify-end justify-center my-10 mr-0 md:mr-10">
            <input className="input input-primary input-bordered w-full max-w-xs" placeholder="Search Job Here" onChange={e =>handleSearchClick(e.target.value)} type="text" />
            {/* <button onClick={handleSearchClick} className="btn">search</button> */}
        </div>
        <div data-aos='zoom-out' className='grid lg:grid-cols-3 grid-cols-1 my-10 '>
            {
                displayJobs.map(job=><AllJobsDetails key={job._id} job={job} ></AllJobsDetails>)
            }
        </div>
        <Footer/>
        </>);
};

export default AllJobs;