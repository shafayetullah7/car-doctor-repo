import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../access/AuthProvider';

const Nav = () => {
    const navigate = useNavigate();
    const {user,loading,logoutUser} = useContext(AuthContext);
    const logout = () =>{
        logoutUser()
        .then(result=>{
            console.log(result);
            // localStorage.setItem('car_access_token',data.token);
            localStorage.removeItem('car_access_token');
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    const navItems = <>
    <li><NavLink to={`/`} className={({ isActive }) =>isActive? "text-[#ff3811]": ""}>Home</NavLink></li>
    {user && <li><NavLink to={`/manageCheckouts`} className={({ isActive }) =>isActive? "text-[#ff3811]": ""}>Manage Checkouts</NavLink></li>}
    <li><NavLink to={`/blog`} className={({ isActive }) =>isActive? "text-[#ff3811]": ""}>Blog</NavLink></li>
    <li><NavLink to={`/contact`} className={({ isActive }) =>isActive? "text-[#ff3811]": ""}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar h-20 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl h-fit"><img className='h-14' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    !loading && <div>
                        {!user && <button onClick={()=>navigate('/login')} className="btn btn-outline">Login</button>}
                        {user && <button className="btn btn-outline" onClick={logout}>Logout</button>}
                    </div>
                    // if(!loading){
                    //     {!user && <button onClick={()=>navigate('/login')} className="btn btn-outline">Login</button>}
                    //     {user && <button className="btn btn-outline" onClick={logout}>Logout</button>}
                    // } 
                }
                
            </div>
        </div>
    );
};

export default Nav;