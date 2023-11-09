import React from 'react';

const Banner = () => {
    return (
        <div data-aos="fade-right" className="hero min-h-screen bg-[#E6DFFC]">
        <div  className="hero-content flex-col lg:flex-row-reverse">
            <div data-aos="zoom-in-up" className=''>
            <img src="https://i.ibb.co/DM5BQc0/Profiling-amico-1.png" className="lg:max-w-sm rounded-lg mx-auto" />
            </div>
            <div className=''>
                <p className='text-xl font-bold text-gray-500'>We have 150,000+ live jobs</p>
            <h1 className="text-5xl font-bold">Unlock Your Dream Career <br/> <span className='text-[#674AC2]'> With PH Jobline</span></h1>
            <p className="py-6 text-gray-600 text-base">Are you ready to take the next big step in your career journey? Look no further! PH Jobline is your ultimate destination for finding the perfect job match. Discover a world of opportunities, connect with top employers, and make your dream career a reality. </p>
            <div className='flex '>
            <input type="text" placeholder="Job here" className="input input-bordered input-primary w-full max-w-xs rounded-r-none" />
            <button className="btn btn-primary rounded-l-none bg-[#523B9B]">Search</button>
            </div>
            
            </div>
        </div>
        </div>
    );
};

export default Banner;