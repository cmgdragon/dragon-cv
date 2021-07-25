export const showBubble = (text, setDragonText, cb) => {
    document.getElementById("speech-bubble").classList.add('show');
    setDragonText(text);
}