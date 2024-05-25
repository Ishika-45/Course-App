import React ,{ useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
export const Navbar = () => {
        const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
        <Link to="/" className='title'>StudyHub</Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen?"open":""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
        </ul>
    </nav>
  );
};