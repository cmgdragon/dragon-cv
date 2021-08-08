import React, { useEffect, useState } from 'react';

const SpeechBubble = ({ text, lang }) => {

    const [currentText, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLang, setCurrentLang] = useState(lang);
    useEffect(() => {
        
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

    useEffect(() => {
        parseHTMLText();
    }, [currentText])

    const pickRandomMsg = msgs => {
        let index = Math.floor(Math.random() * msgs.length);
        if (index === currentIndex) {
            return currentIndex === msgs.length -1 ? --index : ++index
        } else return index;
    }

    const parseHTMLText = () => {
        document.querySelector('.speech-bubble__text').innerHTML = currentText;
    }

    return (
        <div id="speech-bubble" className="speech-bubble__pivot">
            <div className="speech-bubble__body">
                <div className="speech-bubble__text"></div>
            </div>
        </div>
    )
}

export default SpeechBubble;