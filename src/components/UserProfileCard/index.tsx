import './style.scss';
import '@gabrielfins/ripple-effect';
import { MdArrowDropDown, MdCheck } from 'react-icons/md';
import { useState } from 'react';

export default function UserProfileCard() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="user-profile-card">
            <div className="user-pictures">
                <img className="header-picture" src="../../images/2.png" alt=""/>
                <img className="profile-picture" src="../../images/FOTO.jpg" alt=""/>
            </div>
            <div className="accounts-dropdown-container">
                <div className="accounts-dropdown-content">
                    <button className="ripple-effect accounts-dropdown-button" onClick={ () => setDropdownOpen(!isDropdownOpen) }>
                        <div className="user-username">
                            <h2>Gabriel</h2>
                            <span>@gabrielfins</span>
                        </div>
                        <MdArrowDropDown className="accounts-dropdown-icon" size="1.5em" />
                    </button>
                    <div className={`accounts-dropdown ${ isDropdownOpen ? 'open' : 'close' }`}>
                        <button className="ripple-effect current-account-button">
                            <div className="current-account-info">
                                <span>Gabriel</span>
                                <span>@gabrielfins</span>
                            </div>
                            <MdCheck className="current-account-icon" size="1.6em" />
                        </button>
                        <button className="ripple-effect other-accounts-button">
                            <span>Usuário</span><p>@usuario</p>
                        </button>
                        <button className="ripple-effect accounts-button">Adicionar outra conta</button>
                        <button className="ripple-effect accounts-button">Sair desta conta</button>
                    </div>
                </div>
            </div>
            <div className="profile-card-account-info">
                <button className="ripple-effect profile-card-account-info-button">
                    <span>Tweets</span>
                    <p>3.671</p>
                </button>
                <button className="ripple-effect profile-card-account-info-button">
                    <span>Seguidores</span>
                    <p>88</p>
                </button>
                <button className="ripple-effect profile-card-account-info-button">
                    <span>Seguindo</span>
                    <p>400</p>
                </button>
            </div>
            <div className={`transparent-overlay accounts ${ isDropdownOpen && 'open' }`} onClick={ () => setDropdownOpen(!isDropdownOpen) }></div>
        </div>
    );
}