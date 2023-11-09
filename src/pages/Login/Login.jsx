import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Header from '../Home/Shared/Header';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';


const Login = () => {
    const {logIn,googleSignIn}=useContext(AuthContext);
    const location=useLocation();
    const Navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const emailVal=form.get('email');
        const passwordVal=form.get('password');

        logIn(emailVal,passwordVal)
        .then((userCredential) => {
            Swal.fire('Logged In Successfully');
            const user = userCredential.user;
                {
                    Navigate(location.state?location.state:'/');
                }

            })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast('Invalid Email Or Password.Please Try Again');
          });



    }

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google Api
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            Swal.fire('Logged In Successfully');
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            toast('Invalid Email Or Password.Please Try Again');
            // ...
          });
    }

    return (<>
        <Header/>
        <Helmet>
                <title>Login | Jobline</title>
            </Helmet>

        <div className='flex flex-col lg:flex-row '>
            <div data-aos='zoom-out' className="flex-1  ">
                <img className='lg:max-w-lg lg:ml-36 mt-20' src="https://i.ibb.co/vB3GbYM/login.png" alt="login    " srcset="" />
             </div>
             <div className="flex-1 mt-16">
            <div data-aos='zoom-out' className="md:w-[380px] w-[350px] bg-base-200 rounded-lg border-[#7E57C2] border-2 lg:mx-0 mx-auto">
            <h3 className='text-3xl text-center mt-4 font-bold text-[#7E57C2]'>Login Here</h3>
                <div className=" ">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-[#7E57C2]">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-[#7E57C2]">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label mt-3">
                           <p>Not a Member! Please<Link className='label-text-alt link link-hover text-base text-yellow-600' to="/register"> Register</Link></p>
                        </label>
                        </div>
                        <div className="form-control text-center mt-6">
                             <button className="btn bg-[#7E57C2] w-full text-white ">Login</button>
                        </div>
                    </form>
                    <div className='text-center'>
                         <button onClick={handleGoogleLogin} className="btn btn-success w-5/6 mb-5 text-white">Sign With Google</button>                    </div>
                    </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
        <Footer/>
        </>);
};

export default Login;