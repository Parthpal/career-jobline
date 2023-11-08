import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyJobsDetails = ({job,myJob,setMyJob}) => {
    const {userName,jobTitle,jobDateDeadline,salary,photo,_id}=job;
    
    const handleDelete=(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove this from cart?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ph-job-line-server.vercel.app/jobsDel/${_id}`,{
                        method:'DELETE'
                    })
                    .then(res=> res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.deletedCount > 0){
                           Swal.fire(
                            'Deleted!',
                            'Product Removed From the Cart',
                            'success'
                           )
                             const remaining=myJob.filter(jobs=>jobs._id!==_id)
                             setMyJob(remaining);
                            //  console.log('remainin',remaining);
                        }
                    }) 
            }
        })
       
    }

    return (<>
        
        <tr className="hover text-center">
             <td>
             {userName}
            </td>
             <td>
             {jobTitle}
            </td>
             <td>
             {jobDateDeadline.slice(0, 10)}
            </td>
             <td>
             ${salary}
            </td>
             <td>
             <div className='space-x-2'>
             <Link to={`/UpdateJobs/${_id}`} className="btn btn-outline">Update</Link>
             <Link onClick={()=>handleDelete(_id)} className="btn btn-outline btn-secondary">Delete</Link>
             </div>
            </td>
         </tr>

        </>);
};

export default MyJobsDetails;