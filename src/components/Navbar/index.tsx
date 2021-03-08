import './style.scss';
import '@gabrielfins/ripple-effect';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdExplore, MdNotifications, MdEmail, MdSearch, MdSubject, MdList, MdBookmark, MdSettings, MdShowChart, MdAttachMoney, MdHelpOutline, MdBrush, MdClose } from 'react-icons/md';
import { FaTwitter, FaUserCircle } from 'react-icons/fa';
import TweetComposer from '../TweetComposer';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (value: any) => {
        setModalOpen(value);
        isModalOpen ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
    }

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
                    <button className="ripple-effect ripples-light nav-tweet-button" onClick={ () => openModal(!isModalOpen) }>Tweetar</button>
                </div>
            </div>
            {isModalOpen &&
                <div className="tweet-modal-container">
                    <div className="dark-overlay" onClick={ () => openModal(!isModalOpen) }></div>
                    <div className="tweet-modal">
                        <div className="tweet-modal-close-row">
                            <button className="ripple-effect ripples-theme tweet-modal-close-button" onClick={ () => openModal(!isModalOpen) }><MdClose size="1.7em" /></button>
                        </div>
                        <div className="divider"></div>
                        <TweetComposer rowsNumber={ 4 } charachterCount={ 0 } showOptions={ true } />
                    </div>
                </div>
            }
        </nav>
    );
}