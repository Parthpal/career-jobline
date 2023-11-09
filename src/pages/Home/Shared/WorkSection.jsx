const WorkSection = () => {
    return (
        <div>
            <div className="hero min-h-screen my-16 text-left">
            <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                <div className='lg:ml-20'>
                <img data-aos='zoom-in-up' src="https://i.ibb.co/ggL9VPT/job-hiring-vacancy-team-interview-career-recruiting.jpg" className="lg:max-w-md mx-auto rounded-lg shadow-2xl" />
                </div> 
                <div data-aos='fade-zoom-in'className=''>
                <h1 data-aos='zoom-in-up' className="text-5xl font-bold text-[#674AC2]">How it Works?</h1>
                <p className="py-6 text-gray-600 text-base">Are you ready to take the next big step in your career journey? Look no further! PH Jobline is your ultimate destination for finding the perfect job match.</p>
                <div data-aos='fade-zoom-in'>
                    <h2 className='text-xl'>Step 1</h2>
                    <h3 className='text-xl font-bold'>Register your Account</h3>
                    <p className="py-6 text-gray-600 text-base">Sign up and create your account today on our job search platform. Start your job-seeking journey </p>
                </div>
                <div data-aos='fade-zoom-in'>
                    <h2 className='text-xl'>Step 2</h2>
                    <h3 className='text-xl font-bold'>Find Your Job</h3>
                    <p className="py-6 text-gray-600 text-base">Discover your dream job on our platform. Our powerful search tools and extensive job listings make it easy to find the perfect career</p>
                </div>
                <div data-aos='fade-zoom-in'>
                    <h2 className='text-xl'>Step 3</h2>
                    <h3 className='text-xl font-bold'>Applied For Job</h3>
                    <p className="py-6 text-gray-600 text-base"> Track your job applications seamlessly. Stay organized by managing your application history, follow up on your progress</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WorkSection;