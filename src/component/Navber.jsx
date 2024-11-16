import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcons from '../../src/assets/user.png'
import { AuthContext } from '../router/Authcontext';
const Navber = () => {
 
  const {user} = useContext(AuthContext);

  const link = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/career'>Career</Link></li>

  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {link}
          </ul>
        </div>
      <p>{user}</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <div>
          <img src={userIcons} alt="" />
        </div>
        <Link to='/auth/login' className='px-4 rounded-md py-2 bg-[#403F3F] text-white'>Login</Link>
      </div>
    </div>
  );
};

export default Navber;