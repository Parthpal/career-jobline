import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { updateProfile } from 'firebase/auth';
import Header from '../Home/Shared/Header';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';


const Registration = () => {
     const {createUser}=useContext(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const nameVal=form.get('name');
        const photoVal=form.get('photo');
        const emailVal=form.get('email');
        const passwordVal=form.get('password');

        if(passwordVal.length<6){
            return toast('Password should be 6 Character');
        }
        else if(!/[A-Z]/.test(passwordVal)){
            return toast('Kindly use at least one capital letter');
        }
        else if(!/[^\w\s]/.test(passwordVal)){
            return toast('Kindly use at least one special character');
        }
        else
        {
            createUser(emailVal,passwordVal)
            .then((userCredential) => {
                // Signed up 
                const res_user = userCredential.user;
                updateProfile(res_user, {
                    displayName: nameVal, photoURL: photoVal
                  }).then(() => {
                    Swal.fire('Registration Successful');
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

              })
              .catch((error) => {
                toast('Registration failed,Try Again');
                // ...
              });

        }
        e.target.reset();
    }

    return (<>
    <Header/>
    <Helmet>
                <title>Register | Jobline</title>
            </Helmet>
    <div className='flex flex-col lg:flex-row my-10'>
            <div data-aos='zoom-out' className="flex-1  ">
                <img className='lg:max-w-lg lg:ml-36 mt-20' src="https://i.ibb.co/HgqQjGx/register.png" alt="login    " srcset="" />
             </div>
            <div className='flex-1 mt-16'>
            <div data-aos='zoom-out' className="md:w-[400px] w-[350px] bg-base-200 rounded-lg border-[#7E57C2] border-2 lg:mx-0 mx-auto">
            <h3 className='text-3xl text-center mt-4 font-bold text-[#7E57C2]'>Register Here</h3>
                <div className=" ">
                    <form onSubmit={handleRegister} className="card-body ">
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#7E57C2]">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#7E57C2]">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo link" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#7E57C2]">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#7E57C2]">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label mt-3">
                           <p>Already a Member! Please<Link className='label-text-alt link link-hover text-base text-yellow-600' to="/login"> Login</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-4">
                        <button className="btn bg-[#7E57C2] text-white">Register</button>
                        </div>
                    </form>
                    </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
        <Footer/>
        </> );
};

export default Registration;