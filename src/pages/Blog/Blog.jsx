import React from 'react';
import Header from '../Home/Shared/Header';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (<>
    <Header/>
    <Helmet>
        <title>Blog | Jobline</title>
    </Helmet>
            <h3 className='text-center text-3xl'>My Blogs</h3>

            <div className="collapse collapse-arrow bg-base-200 mt-10 container mx-auto">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-[#E6DFFC]">
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content"> 
          
            <p><span className="text-xl"> Access Token: </span> It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period.<br/>
                <span className="text-xl"> Refresh token: </span>  The refresh token is used to generate a new access token. Typically, if the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token. With refresh token, this step can be skipped and with a request to the API get a new access token that allows the user to continue accessing the application resources.<br/>

                <span className="text-xl"> How They Work </span> <br/>

                When a user logs in to an application, the server generates an access token and a refresh token. The access token is sent to the client and stored in the local storage. The refresh token is stored in an HTTP-only cookie.
                When the user wants to access a protected resource, the client sends the access token in the request header. The server verifies the access token and grants access to the resource if the token is valid.
                If the access token expires, the client can use the refresh token to obtain a new access token. To do this, the client sends a request to the server with the refresh token in the request body. The server verifies the refresh token and generates a new access token if the token is valid.
                <br/><span className="text-xl"> Where to Store Them on the Client-Side? </span> <br/>
                The access token should be stored in the local storage. This is a secure location because the access token is not accessible to JavaScript.
                The refresh token should be stored in an HTTP-only cookie. This is a secure location because the refresh token cannot be accessed by JavaScript or accessed directly by the user.
        </p>
                    
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-10 container mx-auto">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-[#E6DFFC]">
            What is express js? What is Nest JS ?
            </div>
            <div className="collapse-content"> 
          
            <p><span className="text-xl"> Express jS: </span> Express.js is a minimal and flexible framework that provides a set of core features for building web applications, such as routing, middleware, and templating. It is unopinionated, meaning that it does not dictate a specific way to structure your code. This gives developers the freedom to choose the best approach for their project.<br/>
                <span className="text-xl"> Next JS: </span> Next.js is an open-source JavaScript framework that simplifies the development of web applications by providing features like server-side rendering, routing, and automatic code splitting. It's built on top of React and offers a straightforward way to create fast, SEO-friendly, and scalable web applications. Next.js supports both client-side and server-side rendering, allowing developers to choose the most suitable rendering method for each page, and it includes features like hot module replacement for a more efficient development experience. <br/>
          </p>
                    
            </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 mt-10 container mx-auto">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-[#E6DFFC]">
                 Explanation of Code
            </div>
            <div className="collapse-content"> 
          
        <p>
                <span className="text-xl"> Add Job Page </span> <br/>
                This Page Helps User to Post A Job.
                This code defines a React component called AddJob, which is a form for adding job listings. It imports various dependencies such as React, context from AuthContext, and UI components like DatePicker, SweetAlert2, and Helmet.

                Inside the component, it initializes state variables startDate_deadline and startDate_post using the useState hook to manage date inputs. The handleJobForm function is responsible for handling the form submission. It extracts data from the form fields, constructs a jobData object, and makes a POST request to a local API endpoint with this data. If the data is successfully inserted, it displays a success message using SweetAlert2.

                The component's return statement renders a form with various input fields, including name, job title, job category, salary range, job description, job posting date, application deadline, and the number of job applicants. It also includes an input for a photo URL. The form is wrapped in a layout with a header and footer for a complete page structure.

                Additionally, it uses the Helmet component to set the page title. This component is designed for creating job listings on a website, and it's part of a larger web application, as indicated by the local API endpoint, which suggests the data will be stored on the server.
        </p>
        <p>
                <span className="text-xl"> All Job Page </span> <br/>
                
                <p>
                    This Page Helps User to see all job post. Code defines a React component called `AllJobs`. This component is responsible for fetching and displaying a list of job details from a local API endpoint. It imports the necessary dependencies, including `useState` from React, the `AllJobsDetails` component, the `Header` and `Footer` components for layout, and the `Helmet` component for managing the page title. Inside the component, it initializes a state variable `jobs` using the `useState` hook, initially set to an empty array. It uses the `fetch` function to make an HTTP GET request to the local API endpoint "https://ph-job-line-server.vercel.app/jobs." The response is expected to be in JSON format. When the data is received, it is converted to JSON using `.then(res => res.json())`, and the resulting data is set as the state of the `jobs` variable using `setJobs(data)`. The component's return statement renders the following elements: The `Header` component for the page's header, the `Helmet` component to set the page's title to "All Jobs | Jobline," a container with a CSS grid layout, displaying the list of job details. It uses the `map` function to iterate over the `jobs` array and render the `AllJobsDetails` component for each job. Each `AllJobsDetails` component receives a `key` prop to uniquely identify it and a `job` prop to provide the job details. Finally, the component includes the `Footer` component to render the page's footer. Overall, this component fetches job data from a local API, maps the data to individual job details components, and displays them in a grid layout. It's designed to show a list of job listings on a website called "Jobline."
                </p>

        </p>
        <p>
                <span className="text-xl"> Applied Job Page </span> <br/>
                
                <p>
                Here user can see at which jobs they applied.This code defines a React component known as `AppliedJobs`, which serves as a part of a web application and is responsible for displaying a list of job applications made by a user. It enables users to filter these job applications by category and provides detailed information for each applied job. The component imports essential dependencies, including React, `useContext`, and `useState`, as well as various UI components such as `Header`, `AppliedJobsDetails`, `SweetAlert2`, `Helmet`, and `Footer`.

                Within the component, it utilizes the `useContext` hook to access the user's authentication context, retrieves the user's email, and initializes state variables `appliedJobs` and `displayCategory` using the `useState` hook. It fetches job application data from a local API endpoint (https://ph-job-line-server.vercel.app/resume) and updates these state variables once the data is loaded. The component also filters the applied jobs based on the user's email.

                The `handleFilter` function is utilized to enable users to filter their applied jobs by category, and the filtered results are stored in the `displayCategory` state variable.

                In the component's return statement, it renders various elements, including the page's header (`Header`), page title setting (`Helmet`), a title heading ("My Applied Jobs"), a category filter dropdown, a table displaying applied job details, and a message that appears when the user has not applied for any jobs.

                Overall, this `AppliedJobs` component is designed to provide users with a convenient interface for managing their job applications, displaying them with the ability to filter by category, and offering a user-friendly experience in the context of a web application.
                </p>


        </p>
                    
            </div>
            </div>

     <Footer/>       
        </> );
};

export default Blog;