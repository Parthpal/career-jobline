import React, { useState } from 'react';

const AppliedJobsDetails = ({data}) => {
    const {user_name,post,user_email,resume_link}=data;
    return (
        

            <tr className="hover text-center">
             <td>
             {user_name}
            </td>
             <td>
             {user_email}
            </td>
             <td>
             {post}
            </td>
             <td>
             {resume_link}
            </td>
         </tr>
            
        
    );
};

export default AppliedJobsDetails;