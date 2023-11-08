import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../../ErrorPage';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import AddProduct from '../pages/AddJob/AddJob';
import AddJob from '../pages/AddJob/AddJob';
import AllJobs from '../pages/AllJobs/AllJobs';
import JobCategoryDetails from '../pages/Home/Shared/JobCategoryDetails';
import PerJobDetails from '../pages/PerJobDetails/PerJobDetails';
import MyJobs from '../pages/MyJobs/MyJobs';
import AppliedJobs from '../pages/AppliedJobs/AppliedJobs';
import UpdateJobs from '../pages/UpdateJobs/UpdateJobs';
import Blog from '../pages/Blog/Blog';
import PrivateRoutes from './PrivateRoutes';
import ContactUs from '../pages/ContactUs/ContactUs';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
        path: "/",
        element: <Home/>,
        },
        {
        path: "/login",
        element: <Login/>
        },
        {
        path: "/register",
        element: <Registration/>
        },
        {
        path: "/addJob",
        element: <PrivateRoutes><AddJob/></PrivateRoutes>
        },
        {
        path: "/allJobs",
        element: <AllJobs/>
        },
        {
        path: "/myJobs",
        loader: () => fetch('https://ph-job-line-server.vercel.app/jobs'),
        element: <PrivateRoutes><MyJobs/></PrivateRoutes>
        },
        {
        path: "/appliedJobs",
        element:<PrivateRoutes> <AppliedJobs/></PrivateRoutes>
        },
        {
        path: "/blog",
        element: <Blog/>
        },
        {
        path: "/contact",
        element: <ContactUs/>
        },
        {
        path: "/jobs/:id",
        loader: () => fetch('https://ph-job-line-server.vercel.app/jobs'),
        element:<PrivateRoutes><PerJobDetails/></PrivateRoutes>
        },
        {
        path: "/UpdateJobs/:id",
        element:<PrivateRoutes><UpdateJobs/></PrivateRoutes>,
        loader: ({params}) => fetch(`https://ph-job-line-server.vercel.app/jobs/${params.id}`),
        },
      ],
    },
  ]);
  

export default Routes;