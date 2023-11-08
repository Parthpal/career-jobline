import React, { useContext, useState } from 'react';
import Header from '../Home/Shared/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';

const AddJob = () => {
    const {user}=useContext(AuthContext);
    const [startDate_deadline, setStartDate_deadline] = useState(new Date());
    const [startDate_post, setStartDate_post] = useState(new Date());

    const handleJobForm=(event)=>{
        event.preventDefault();
        const form=event.target;
        const userName=form.u_name.value;
        const jobTitle=form.job_title.value;
        const jobCategory=form.job_cat.value;
        const salary=form.salary.value;
        const description=form.desc.value;
        const jobPostingDate=startDate_post;
        const jobDateDeadline=startDate_deadline;
        const applicants_str=form.applicants.value;
        const applicants=parseInt(applicants_str);
        const photo=form.photo.value;

        const jobData={userName,userEmail:user.email,jobTitle,jobCategory,salary,description,jobPostingDate,jobDateDeadline,applicants,photo};
        console.log(jobData);
        fetch('https://ph-job-line-server.vercel.app/jobs',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
              },
            body:JSON.stringify(jobData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire('Data inserted');
            }
        })
        event.target.reset();
    }
    
    return (<>
        <Header/>
        <Helmet>
                <title>Add Jobs | Jobline</title>
            </Helmet>
        <div>
            <h3 className='text-5xl font-bold text-[#523B9B] text-center my-5'>Post Your Job Here</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleJobForm} className="card-body ">
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='u_name' defaultValue={user.displayName} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name='job_title' placeholder="Job Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select name='job_cat' className="select select-bordered w-full max-w-xs">
                                    <option value='onsite'>On Site</option>
                                    <option value='remote'>Remote</option>
                                    <option value='partTime'>Part-Time</option>
                                    <option value='hybrid'>Hybrid</option>
                                </select>
                            </div>

                            
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input type="text" name='salary'  placeholder="salary" className="input input-bordered" required />
                            </div>
                            
                            
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <input type="text" name='desc' placeholder="Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Posting Date</span>
                            </label>
                            {/* <input type="date" name='job_post_date' placeholder="Posting date" className="input input-bordered" required /> */}
                            <DatePicker className="input input-bordered" selected={startDate_post} onChange={(date) => setStartDate_post(date)} />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <DatePicker className="input input-bordered" selected={startDate_deadline} onChange={(date) => setStartDate_deadline(date)} />
                            {/* <input type="date" name='app_deadline' className="input input-bordered" required /> */}
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Applicants</span>
                            </label>
                            <input type="text" defaultValue='0' name='applicants' className="input input-bordered" required />
                            </div>
                            
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photoUrl" className="input input-bordered" required />
                        </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none btn-primary bg-[#523B9B]">Add Jobs</button>
                        </div>
                    
                    </form>
                    </div>
                </div>
                </div>
        </div>
        <Footer/>
        </>);
};

export default AddJob;