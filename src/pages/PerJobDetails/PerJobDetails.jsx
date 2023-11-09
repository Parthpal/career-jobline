import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Home/Shared/Header';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';
import emailjs from '@emailjs/browser';

const PerJobDetails = () => {
    const {user}=useContext(AuthContext);
    const loadedData=useLoaderData();
    const {id}=useParams();
    const matchedData=loadedData.find(Aproduct=>Aproduct._id == id);    

    const handleJobApply=async(e)=>{
        e.preventDefault();
        // if(user.email==matchedData.userEmail)
        const user_email=user.email;
        const user_name=user.displayName;
        console.log(user_name);
        let currentDate = Date.now();
        var myDate = new Date(matchedData.jobDateDeadline);
        var jobDeadline = myDate.getTime();
        const application_count={applicants:matchedData.applicants};
        console.log(application_count);


        if(user.email!=matchedData.userEmail && jobDeadline>=currentDate){
            const { value: formValues } =await Swal.fire({
                title: "Post Your Resume Link",
                confirmButtonText: 'submit',
                cancelButtonText: 'Cancel',
                html: `
                  <input id="swal-input1" value=${user.displayName}  class="swal2-input">
                  <input id="swal-input2" value=${user_email} class="swal2-input">
                  <input id="swal-input3" placeholder="Resume Link" class="swal2-input">
                `,
                focusConfirm: false,
                preConfirm: () => {
                  return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                    document.getElementById("swal-input3").value
                  ];
                }
              });
             const resume_link= document.getElementById("swal-input3").value;
             const user_data={application_id:id,user_email,user_name,resume_link,category:matchedData.jobCategory,post:matchedData.jobTitle};
              console.log(user_data);
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Do you want to send resume?",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, send it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        emailjs.send('service_b2wur3m', 'template_wqufsl7', user_data, 'vi3KZCR2z3UWOLZrN')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });

                        fetch('https://ph-job-line-server.vercel.app/resume',{
                            method:"POST",
                            headers: {
                                'content-type': 'application/json'
                              },
                              body:JSON.stringify(user_data)
                            
                        })
                        .then(res=>res.json())
                        .then(data=>{
                           // console.log(data);
                            if(data.insertedId){
                                Swal.fire('Hurrah!You applied for the Job');
                                 //data update
                                        fetch(`https://ph-job-line-server.vercel.app/jobs/${id}`,{
                                            method:"PUT",
                                            headers: {
                                                'content-type': 'application/json'
                                              },
                                            body: JSON.stringify(application_count)
                                        })
                                        .then(res=>res.json())
                                        .then(data=>{
                                            console.log(data);
                                            if(data.modifiedCount>0){
                                                console.log('Data updated');
                                            }
                                        })
                            }
                        })

                        
                    }
                })
              

        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Can not Apply For this job",
              });
        }
}
    return (<>
        <div>
        <Header/>
        <Helmet>
                <title>Job Details | Jobline</title>
            </Helmet>
        <div>
            <div className="hero" style={{backgroundImage: `url(${matchedData.photo})`,height:'550px',backgroundPosition:'center top' ,backgroundRepeat:'no-repeat'}}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl uppercase font-bold text-yellow-200">{matchedData.jobTitle}</h1>
                    <h1 className="mb-5 text-2xl uppercase font-bold text-yellow-200">Salary: ${matchedData.salary}</h1>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='mt-24 lg:mx-64 mx-4'>
                  <p className='mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'> {matchedData.description}</p>
                  
            <div className=' py-3 ' >
                <button onClick={handleJobApply} className=' btn w-full bg-[#533C9C] md:text-3xl text-base text-center font-bold text-white' >Apply for Job</button>
            </div>
            </div>
            
            
        </div>
        </div>
  <Footer/> </>  );
};

export default PerJobDetails;