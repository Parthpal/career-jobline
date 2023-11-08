import React, { useEffect, useState } from 'react';
import { Tab } from 'react-tabs';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import JobCategory from './jobCategory';
//import JobCatDetailsTab from './JobCatDetailsTab';
const JobCategoryDetails = ({cat,TabPanel,Tabs}) => {
    const {cat_name}=cat;
    const [jobs,setJobs]=useState([]);
    const matchedData=jobs.filter(job=>job.jobCategory===cat_name);
  // console.log(matchedData);
    // const [toggleState,setToggleState]=useState('null');
  useEffect(()=>{
    fetch('https://ph-job-line-server.vercel.app/jobs')
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[])

const toggleTab=(cat_name)=>{
  setToggleState(cat_name);
  console.log(cat_name);
}

//console.log(cat_name)

    return (<>
    {/* <h3>togglestate:{toggleState}</h3>
                 <Link className={toggleState===cat_name ? "tab-active":"tab"} onClick={()=>toggleTab(cat_name)}>
                     {cat_name}
                </Link> */}

                  {/* <h3>{matchedData.length}</h3> 
                  {
                      matchedData.map(data=><h2>{data.jobTitle}</h2>)
                  } */}
                  
                  <Tab>{cat_name}</Tab>
                  {/* {
                      matchedData.map(data=><JobCategory data={data}></JobCategory>)
                  } */}
                  <Tabs>
                  <TabPanel>
                    {matchedData.map(data=><h2>{data.jobTitle}</h2>)}
                  </TabPanel>
                    
                  </Tabs>
                  {/* <Tabs>
                  <TabPanel> */}
                   {/* <h3>{matchedData.jobTitle}</h3>  */}
                  {/* {
                      matchedData.map(data=><JobCatDetailsTab data={data}></JobCatDetailsTab>)
                  }  */}
                  {/* </TabPanel>
                  </Tabs> */}

    </>);
};

export default JobCategoryDetails;