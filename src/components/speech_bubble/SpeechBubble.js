import React, { useEffect } from 'react';

const SpeechBubble = ({ text }) => {

    useEffect(() => {
        document.querySelector(".speech-bubble__text").innerHTML = text;
        document.getElementById("speech-bubble").classList.add('show');
    }, [text])

    return (
        <div id="speech-bubble" className="speech-bubble__pivot">
            <div className="speech-bubble__body">
                <div className="speech-bubble__text">{text}</div>
            </div>
        </div>
    )
}

export default SpeechBubble;