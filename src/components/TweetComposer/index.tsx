import './style.scss';
import { useState } from 'react';
import { BiWorld, BiPoll } from 'react-icons/bi';
import { MdImage, MdGif } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { IoCalendarSharp } from 'react-icons/io5';

export default function TweetComposer(props: any) {
    const [charachterCount, setCharachterCount] = useState(props.charachterCount);
    const [showOptions, setShowOptions] = useState(props.showOptions);

    return (
        <div className="tweet-composer-container">
            <div className="tweet-composer-content">
                <img className="tweet-composer-user-image" src="../../images/profile.png" alt="" />
                <div className="tweet-composer">
                    <textarea onChange={(e) => { setCharachterCount(e.target.value.length); !showOptions && setShowOptions(true) }} onClick={() => !showOptions && setShowOptions(true)} onFocus={() => !props.showOptions && setShowOptions(true)} onKeyDown={e => e.key === 'Escape' && !props.showOptions && setShowOptions(false)} className="tweet-composer-input" rows={props.rowsNumber} placeholder="O que está acontecendo?" />
                    {showOptions &&
                        <>
                            <div className="allowed-responses-container">
                                <button className="ripple-effect ripples-theme allowed-responses"><BiWorld className="allowed-responses-icon" size="1.3em" />Qualquer um pode responder</button>
                            </div>
                            <div className="divider"></div>
                        </>
                    }
                </div>
            </div>
            <div className="tweet-composer-options-container">
                <button className="ripple-effect ripples-theme tweet-composer-icon-button"><MdImage size="1.6em" /></button>
                <button className="ripple-effect ripples-theme tweet-composer-icon-button"><MdGif size="1.6em" /></button>
                <button className="ripple-effect ripples-theme tweet-composer-icon-button"><BiPoll size="1.6em" /></button>
                <button className="ripple-effect ripples-theme tweet-composer-icon-button"><HiOutlineEmojiHappy size="1.6em" /></button>
                <button className="ripple-effect ripples-theme tweet-composer-icon-button"><IoCalendarSharp size="1.6em" /></button>
                <div className="charachter-count-container">
                    <p className="charachter-count"><span className={charachterCount > 280 ? 'limit-reached' : ''}>{280 - charachterCount}</span></p>
                </div>
                <button className={`${charachterCount > 0 ? 'ripple-effect ripples-light' : 'disabled'} tweet-composer-button`} disabled={charachterCount > 0 ? false : true}>Tweetar</button>
            </div>
        </div>
    );
}