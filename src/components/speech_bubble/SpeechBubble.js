import React, { useEffect, useState } from 'react';

const SpeechBubble = ({ text, lang }) => {

    const [currentText, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLang, setCurrentLang] = useState(lang);
    useEffect(() => {
        document.getElementById("speech-bubble").classList.add('show');
        
        const selectedTextLang = text[lang];

        if (Array.isArray(selectedTextLang)) {

            let index;
            if (lang === currentLang) {
                index = pickRandomMsg(selectedTextLang);
                setCurrentIndex(index);
            } else {
                index = currentIndex;
                setCurrentLang(lang);
            }

            setText(selectedTextLang[index]);
        } else {
            setText(selectedTextLang);
        }

    }, [text, lang])

    const pickRandomMsg = msgs => {
        let index = Math.floor(Math.random() * msgs.length);
        if (index === currentIndex) {
            return currentIndex === msgs.length -1 ? --index : ++index
        } else return index;
    }

    return (
        <div id="speech-bubble" className="speech-bubble__pivot">
            <div className="speech-bubble__body">
                <div className="speech-bubble__text">{currentText}</div>
            </div>
        </div>
    )
}

export default SpeechBubble;