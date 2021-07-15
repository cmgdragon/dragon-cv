import React, { useEffect, useState } from 'react';

const SpeechBubble = ({ text }) => {

    useEffect(() => {
        showBubble();
    }, [text])

    const showBubble = () => {
        document.getElementById("speech-bubble").classList.add('show');
    }

    return (
        <div id="speech-bubble" className="speech-bubble__pivot">
            <div className="speech-bubble__body">
                <div className="speech-bubble__text">{text}</div>
            </div>
        </div>
    )
}

export default SpeechBubble;