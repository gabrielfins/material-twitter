import './style.scss';
import '@gabrielfins/ripple-effect';
import { FaUserCircle, FaRegComment, FaRetweet, FaRegHeart, FaHeart, FaLink } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { MdMoreVert, MdMail, MdBookmark, MdPlaylistAdd, MdVolumeOff } from 'react-icons/md';
import { IoPersonAddSharp, IoPersonRemoveSharp, IoFlag } from 'react-icons/io5';
import { AiOutlineStop } from 'react-icons/ai';
import { ImEmbed2 } from 'react-icons/im';
import { useState } from 'react';

export default function Tweet(props: any) {
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isOperationsDropdownOpen, setOperationsDropdownOpen] = useState(false);

    return (
        <div className="tweet">
            <div className="tweet-row align-start">
                <div className="tweet-column user">
                    {props.userImageUrl != "" ? <img src={ props.userImageUrl } alt=""/> : <FaUserCircle className="user-image" size="3.2em" />}
                </div>
                <div className="tweet-column">
                    <div className="tweet-row user-info">
                        <p className="tweet-user-info"><span className="user-name">{ props.userName }</span><span>@{ props.userUsername }</span><span>• { props.timeFromPosting }</span></p>
                        <div className={`transparent-overlay ${ isUserDropdownOpen ? 'open' : 'close' }`} onClick={ () => { setUserDropdownOpen(false) } } ></div>
                        <div className="dropdown-container">
                            <button className="ripple-effect ripples-theme tweet-icon-button dropdown" onClick={ () => setUserDropdownOpen(!isUserDropdownOpen) }><MdMoreVert size="1.3em" /></button>
                            {isUserDropdownOpen &&
                                <div className="tweet-dropdown user-actions">
                                    <button className="ripple-effect">{ props.isUserFollowed ? <IoPersonRemoveSharp className="dropdown-icon" size="1.3em" /> : <IoPersonAddSharp className="dropdown-icon" size="1.3em" /> }{` ${props.isUserFollowed ? "Deixar de seguir" : "Seguir"} @${props.userUsername} `}</button>
                                    <button className="ripple-effect"><MdPlaylistAdd className="dropdown-icon" size="1.3em" />Adicionar/remover @{ props.userUsername } das Listas</button>
                                    <button className="ripple-effect"><MdVolumeOff className="dropdown-icon" size="1.3em" />Silenciar @{ props.userUsername }</button>
                                    <button className="ripple-effect"><AiOutlineStop className="dropdown-icon" size="1.3em" />Bloquear @{ props.userUsername }</button>
                                    <button className="ripple-effect"><ImEmbed2 className="dropdown-icon" size="1.3em" />Incorporar Tweet</button>
                                    <button className="ripple-effect"><IoFlag className="dropdown-icon" size="1.3em" />Denunciar Tweet</button>
                                </div>
                            }
                        </div>
                    </div>
                    <p className="tweet-content-text">{ props.tweetText }</p>
                    { props.tweetImageUrl != "" && props.tweetImageUrl }
                </div>
            </div>
            <div className="tweet-row operations">
                <div className="operation-container">
                    <button className={"ripple-effect ripples-theme tweet-icon-button operation comment"}><FaRegComment size="1.3em" /></button><span>{ props.numberOfComments }</span>
                </div>
                <div className="operation-container">
                    <button className={`ripple-effect ripples-green tweet-icon-button operation retweet ${ props.isTweetRetweeted && 'retweeted' }`}><FaRetweet size="1.3em" /></button><span>{ props.numberOfRetweets }</span>
                </div>
                <div className="operation-container">
                    <button className={`ripple-effect ripples-pink tweet-icon-button operation like ${ props.isTweetLiked && 'liked' }`}>{ props.isTweetLiked ? <FaHeart size="1.3em" /> : <FaRegHeart size="1.3em" /> }</button><span>{ props.numberOfLikes }</span>
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