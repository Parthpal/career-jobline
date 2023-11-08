import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import './Header.css';


const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
      logOut()
      .then(() => {
        // Sign-out successful.
      }).catch(() => {
        // An error mssge
      });
    }
  
    const links=<>
    <li><Link to="/addJob">Add Jobs</Link></li>
    <li><Link to="/appliedJobs">Applied Jobs</Link></li>
    <li><Link to="/myJobs">My Jobs</Link></li>
    </>
    return (
        <div className="navbar dark:bg-black dark:text-white bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/allJobs">All Jobs</Link></li>
                    
                <li><Link to="/blog">Blogs</Link></li>     
                <li><Link to="/contact">Contact</Link></li>  
                {links}
                </ul>
                </div>
                <img className='w-12 h-12 mr-2' src="https://i.ibb.co/j4NFJ3W/labour.png" alt="" srcset="" />
                <a className="normal-case text-xl font-semibold hidden md:block text-[#523B9B]">PH Jobline</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/allJobs">All Jobs</Link></li>
                    
                <li><Link to="/blog">Blogs</Link></li>  
                <li><Link to="/contact">Contact</Link></li>  
                {user ? links: ''}
                </ul>
            </div>
            <div className="navbar-end">
            {
                
                user ?<>

              <div className='relative group flex'>
              <p className='mx-2 absolute right-16 group-hover:visible invisible text-black'>{user.displayName}</p>
              <div>
                  <img className="w-10 h-10 rounded-full border-2 border-white hidden md:block mx-2"  src={user.photoURL} />
              </div>
              </div>
                <button className='btn' onClick={handleLogout}>Logout</button>
                </>:
                <Link to="/login">Login</Link>
              }
     
            </div>
        </div>
    );
};

export default Header;