import React from 'react';
import { Link } from 'react-router-dom';

const CareerSection = () => {
    return (<>
        <div>
            <h3 className='text-5xl font-bold text-center text-[#523B9B]  mx-auto'>Quick Career Tips</h3>
            <p className='text-base text-gray-500 text-center mt-4  mx-auto'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:w-full grid-cols-1 my-10 '>
                        <div data-aos='fade-out' className="card rounded-none md:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                            <figure><img className='w-96' src="https://i.ibb.co/vZtDL3q/magnet-me-LDc-C7a-CWVlo-unsplash.jpg" alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Strategies for a Balanced Work Life</h2>
                                <p className='my-2'>Learn how to handle job tension effectively and achieve a harmonious work-life balance. Explore tips, techniques, and resources to reduce stress and enhance your overall well-being in the workplace</p>
                                <Link className="text-[#523B9B] font-semibold">Read more...</Link>
                          </div>
                      </div>
                      <div data-aos='fade-out' className="card rounded-none md:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                            <figure><img className='w-96' src="https://i.ibb.co/LPhsFRf/christina-wocintechchat-com-LQ1t-8-Ms5-PY-unsplash.jpg" alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title">Job Interview: Your Guide to Success</h2>
                                <p className='my-2'>Prepare for your upcoming job interview with confidence. Discover expert tips, common interview questions, and strategies to impress your potential employer and land your dream job.</p>
                                <Link className="text-[#523B9B] font-semibold">Read more...</Link>
                          </div>
                      </div>
                      <div data-aos='fade-out' className="card rounded-none md:w-96 sm:w-full bg-base-100 shadow-xl mx-auto my-2">
                            <figure><img className='w-96' src="https://i.ibb.co/9yBCYfV/hunters-race-MYbh-N8-Kaa-Ec-unsplash.jpg" alt="Shoes" /></figure>
                            <div className="p-5 text-left">
                                <h2 className="card-title"> Self-Confidence: Keys to Career Success</h2>
                                <p className='my-2'>Explore practical techniques, mindset shifts, and personal development strategies to build the self-assurance you need for job interviews, presentations, and professional growth.</p>
                                <Link className="text-[#523B9B] font-semibold">Read more...</Link>
                          </div>
                      </div>
                      
        </div>
        

        </>);
};

export default CareerSection;