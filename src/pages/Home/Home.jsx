import React from 'react';
import Header from './Shared/Header';

import Footer from '../Footer/Footer';
import WorkSection from './Shared/WorkSection';
import CareerSection from './Shared/CareerSection';
import Banner from './Shared/Banner/Banner';
import JobCategory from './Shared/jobCategory';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Jobline</title>
            </Helmet>
            <Header/>
            <Banner/>
            <WorkSection/>
            <JobCategory/>
            <CareerSection/>
            <Footer/>
        </div>
    );
};

export default Home;