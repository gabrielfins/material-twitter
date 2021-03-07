import './style.scss';
import '@gabrielfins/ripple-effect';
import { FaUserCircle, FaRegComment, FaRetweet, FaHeart, FaLink } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { MdMoreVert, MdMail, MdBookmark, MdPlaylistAdd, MdVolumeOff } from 'react-icons/md';
import { IoPersonRemoveSharp, IoFlag } from 'react-icons/io5';
import { AiOutlineStop } from 'react-icons/ai';
import { ImEmbed2 } from 'react-icons/im';
import { useState } from 'react';

export default function Tweet() {
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isOperationsDropdownOpen, setOperationsDropdownOpen] = useState(false);

    return (
        <div className="tweet">
            <div className="tweet-row">
                <div className="tweet-column user">
                    <FaUserCircle className="user-image" size="3.2em" />
                </div>
                <div className="tweet-column">
                    <div className="tweet-row user-info">
                        <p className="tweet-user-info"><span className="user-name">Usuário</span><span>@usuario</span><span>• 10h</span></p>
                        <div className={`transparent-overlay ${ isUserDropdownOpen ? 'open' : 'close' }`} onClick={ () => { setUserDropdownOpen(false) } } ></div>
                        <div className="dropdown-container">
                            <button className="ripple-effect ripples-theme tweet-icon-button dropdown" onClick={ () => setUserDropdownOpen(!isUserDropdownOpen) }><MdMoreVert size="1.3em" /></button>
                            {isUserDropdownOpen &&
                                <div className="tweet-dropdown user-actions">
                                    <button className="ripple-effect"><IoPersonRemoveSharp className="dropdown-icon" size="1.3em" />Deixar de seguir @usuario</button>
                                    <button className="ripple-effect"><MdPlaylistAdd className="dropdown-icon" size="1.3em" />Adicionar/remover @usuario das Listas</button>
                                    <button className="ripple-effect"><MdVolumeOff className="dropdown-icon" size="1.3em" />Silenciar @usuario</button>
                                    <button className="ripple-effect"><AiOutlineStop className="dropdown-icon" size="1.3em" />Bloquear @usuario</button>
                                    <button className="ripple-effect"><ImEmbed2 className="dropdown-icon" size="1.3em" />Incorporar Tweet</button>
                                    <button className="ripple-effect"><IoFlag className="dropdown-icon" size="1.3em" />Denunciar Tweet</button>
                                </div>
                            }
                        </div>
                    </div>
                    <p className="tweet-content-text">Texto do tweet</p>
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="tweet-row operations">
                <div className="operation-container">
                    <button className="ripple-effect ripples-theme tweet-icon-button"><FaRegComment size="1.3em" /></button><span>9</span>
                </div>
                <div className="operation-container">
                    <button className="ripple-effect ripples-green tweet-icon-button retweet"><FaRetweet size="1.3em" /></button><span>18</span>
                </div>
                <div className="operation-container">
                    <button className="ripple-effect ripples-pink tweet-icon-button like"><FaHeart size="1.3em" /></button><span>814</span>
                </div>
                <div className={`transparent-overlay ${ isOperationsDropdownOpen ? 'open' : 'close' }`} onClick={ () => { setOperationsDropdownOpen(false) } } ></div>
                <div className="dropdown-container">
                    <button className="ripple-effect ripples-theme tweet-icon-button dropdown" onClick={ () => setOperationsDropdownOpen(!isOperationsDropdownOpen) }><FiUpload size="1.3em" /></button>
                    {isOperationsDropdownOpen &&
                        <div className="tweet-dropdown extras">
                            <button className="ripple-effect"><MdMail className="dropdown-icon" size="1.3em" />Enviar por Mensagem Direta</button>
                            <button className="ripple-effect"><MdBookmark className="dropdown-icon" size="1.3em" />Salvar Tweet</button>
                            <button className="ripple-effect"><FaLink className="dropdown-icon" size="1.3em" />Copiar link para o Tweet</button>
                            <button className="ripple-effect"><FiUpload className="dropdown-icon" size="1.3em" />Compartilhar Tweet via...</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}