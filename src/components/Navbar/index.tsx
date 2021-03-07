import './style.scss';
import '@gabrielfins/ripple-effect';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdExplore, MdNotifications, MdEmail, MdSearch, MdSubject, MdList, MdBookmark, MdSettings, MdShowChart, MdAttachMoney, MdHelpOutline, MdBrush, MdClose, MdImage, MdGif } from 'react-icons/md';
import { FaTwitter, FaUserCircle } from 'react-icons/fa';
import { BiWorld, BiPoll } from 'react-icons/bi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { IoCalendarSharp } from 'react-icons/io5';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    let [charachterCount, setCharachterCount] = useState(0);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="nav-content">
                    <NavLink className="ripple-effect nav-button" exact to="/" activeClassName="active"><MdHome size="2em" /></NavLink>
                    <NavLink className="ripple-effect nav-button" to="/explore" activeClassName="active"><MdExplore size="2em" /></NavLink>
                    <NavLink className="ripple-effect nav-button" to="/notifications" activeClassName="active"><MdNotifications size="2em" /></NavLink>
                    <NavLink className="ripple-effect nav-button" to="/messages" activeClassName="active"><MdEmail size="2em" /></NavLink>
                </div>
                <NavLink className="ripple-effect ripples-theme logo-container" exact to="/"><FaTwitter size="2em" /></NavLink>
                <div className="left nav-content">
                    <div className="search-box-container">
                        <div className="search-box-content">
                            <input className="search-box" id="search" type="search" placeholder="Buscar no Twitter"/>
                            <label className="search-label" htmlFor="#search"><MdSearch size="1.5em" /></label>
                        </div>
                    </div>
                    <div className="nav-profile-container">
                        <div className={`transparent-overlay ${ isDropdownOpen && 'open' }`} onClick={ () => setDropdownOpen(!isDropdownOpen) }></div>
                            <button className="ripple-effect nav-account-button" onClick={ () => setDropdownOpen(!isDropdownOpen) }><FaUserCircle size="2.5em" /></button>
                            <div className={`account-dropdown ${(isDropdownOpen ? 'open' : 'close')}`}>
                                <div className="account-info">
                                    <button className="ripple-effect user-button">
                                        <p className="account-name">Usuário</p>
                                        <p className="account-user-name">@usuário</p>
                                    </button>
                                </div>
                                <div className="divider"></div>
                                <div className="account-items">
                                    <button className="ripple-effect account-button"><MdSubject className="account-button-icon" size="1.8em" />Tópicos</button>
                                    <button className="ripple-effect account-button"><MdList className="account-button-icon" size="1.8em" />Listas</button>
                                    <button className="ripple-effect account-button"><MdBookmark className="account-button-icon" size="1.8em" />Itens Salvos</button>
                                </div>
                                <div className="divider"></div>
                                <div className="account-items">
                                    <button className="ripple-effect account-button"><MdSettings className="account-button-icon" size="1.8em" />Privacidade e Segurança</button>
                                    <button className="ripple-effect account-button"><MdShowChart className="account-button-icon" size="1.8em" />Estatísticas</button>
                                    <button className="ripple-effect account-button"><MdAttachMoney className="account-button-icon" size="1.8em" />Anúncios do Twitter</button>
                                </div>
                                <div className="divider"></div>
                                <div className="account-items">
                                    <button className="ripple-effect account-button"><MdHelpOutline className="account-button-icon" size="1.8em" />Central de Ajuda</button>
                                    <button className="ripple-effect account-button"><MdBrush className="account-button-icon theme-color" size="1.8em" />Exibição</button>
                                </div>
                            </div>
                        </div>
                    <button className="ripple-effect ripples-light nav-tweet-button" onClick={ ()=> setModalOpen(!isModalOpen) }>Tweetar</button>
                </div>
            </div>
            {isModalOpen &&
                <div className="tweet-modal-container">
                    <div className="dark-overlay" onClick={ ()=> setModalOpen(!isModalOpen) }></div>
                    <div className="tweet-modal">
                        <div className="close tweet-modal-row">
                            <button className="ripple-effect ripples-theme tweet-modal-close-button" onClick={ ()=> setModalOpen(!isModalOpen) }><MdClose size="1.7em" /></button>
                        </div>
                        <div className="divider"></div>
                        <div className="tweet-info tweet-modal-row">
                            <div className="user tweet-modal-column">
                                <FaUserCircle className="tweet-modal-user-image" size="3.2em" />
                            </div>
                            <div className="tweet-modal-column">
                                <textarea onChange={ e => setCharachterCount(e.target.value.length) } className="tweet-modal-input" rows={ 4 } placeholder="O que está acontecendo?"/>
                                <div className="charachter-count tweet-modal-row">
                                    <p className="charachter-count-display"><span className={ charachterCount > 280 ? 'limit-reached' : '' }>{ charachterCount }</span><span>/280</span></p>
                                </div>
                                <div className="normal tweet-modal-row">
                                    <button className="ripple-effect ripples-theme answer-select"><BiWorld className="answer-select-icon" size="1.3em" />Qualquer um pode responder</button>
                                </div>
                                <div className="divider"></div>
                                <div className="normal tweet-modal-row">
                                    <button className="ripple-effect ripples-theme tweet-modal-icon-button"><MdImage size="1.6em" /></button>
                                    <button className="ripple-effect ripples-theme tweet-modal-icon-button"><MdGif size="1.6em" /></button>
                                    <button className="ripple-effect ripples-theme tweet-modal-icon-button"><BiPoll size="1.6em" /></button>
                                    <button className="ripple-effect ripples-theme tweet-modal-icon-button"><HiOutlineEmojiHappy size="1.6em" /></button>
                                    <button className="ripple-effect ripples-theme tweet-modal-icon-button"><IoCalendarSharp size="1.6em" /></button>
                                    <button className="ripple-effect ripples-light tweet-modal-button">Tweetar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}