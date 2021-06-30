import React from 'react'
import { Link } from 'react-router-dom'
import { ImFire } from 'react-icons/im';
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi'
import { MdMovie } from 'react-icons/md'

const BottomNavbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-btn">
                        <span className="nav-link">داغ ترین ها</span>
                        <ImFire className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/MoviePage" className="nav-btn">
                        <span className="nav-link">فیلم</span>
                        <BiCameraMovie className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="TvSeriesPage" className="nav-btn">
                        <span className="nav-link">سریال</span>
                        <MdMovie className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="SearchPage" className="nav-btn">
                        <span className="nav-link">جستوجو</span>
                        <BiSearchAlt className="nav-icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default BottomNavbar
