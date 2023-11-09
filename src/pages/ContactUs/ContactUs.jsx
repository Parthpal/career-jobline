import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Home/Shared/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';


const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_u47i4br', 'template_pgep7qb', form.current, 'vi3KZCR2z3UWOLZrN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (<>
        <Header/>
        <Helmet>
                <title>Contact Us | Jobline</title>
            </Helmet>
        {/* hello hi*/}
            
            <div data-aos='zoom-out' className="hero min-h-screen bg-base-200">
           
                <div className="hero-content flex-col">
                <h3 className='text-5xl font-bold text-[#523B9B] text-center my-5'>Contact Us</h3>
            <div className="card max-w-md flex-shrink-0 shadow-2xl bg-base-100 px-5">
      <form ref={form} onSubmit={sendEmail} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='from_name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='from_email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" name='message' placeholder="Message"></textarea>

        </div>
        <div className="form-control mt-6">
          <button type="submit" value="Send" className="btn text-white bg-[#523B9B]">Send Message</button>
        </div>
      </form>
    </div>
    </div>
    </div>
        
        <Footer/>
   </> );
};

export default ContactUs;