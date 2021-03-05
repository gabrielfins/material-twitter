import './style.scss';
import '@gabrielfins/ripple-effect';
import { NavLink } from 'react-router-dom';
import { MdHome, MdExplore, MdNotifications, MdEmail, MdSearch } from 'react-icons/md';
import { FaTwitter, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="nav-content">
                    <NavLink className="ripple-effect nav-button" exact to="/" activeClassName="active"><MdHome size="2em" /></NavLink>
                    <NavLink className="ripple-effect nav-button" to="/explore" activeClassName="active"><MdExplore size="2em" /></NavLink>
                    <NavLink className="ripple-effect nav-button" to="/notofications" activeClassName="active"><MdNotifications size="2em" /></NavLink>
                    <NavLink className="ripple-effect nav-button" to="/messages" activeClassName="active"><MdEmail size="2em" /></NavLink>
                </div>
                <NavLink className="ripple-effect ripples-blue logo-container" exact to="/"><FaTwitter size="2em" /></NavLink>
                <div className="left nav-content">
                    <div className="search-box-container">
                        <div className="search-box-content">
                            <input className="search-box" id="search" type="search" placeholder="Buscar no Twitter"/>
                            <label className="search-label" htmlFor="#search"><MdSearch size="1.5em" /></label>
                        </div>
                    </div>
                    <div className="nav-profile-picture-container">
                        <button className="ripple-effect nav-account-button"><FaUserCircle size="2.5em" /></button>
                    </div>
                    <button className="ripple-effect ripples-light nav-tweet-button">Tweetar</button>
                </div>
            </div>
        </nav>
    );
}