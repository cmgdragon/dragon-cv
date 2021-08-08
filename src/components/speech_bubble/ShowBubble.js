import { hideBubble } from "./hideBubble";

const bubbleTimeouts = [];

export const showBubble = (text, setDragonText, preserveBubble=false, cb) => {

    bubbleTimeouts.forEach(timeout => clearTimeout(timeout));

    document.getElementById("speech-bubble").classList.remove('hidden');
    document.getElementById("speech-bubble").classList.add('show');
    setDragonText({ ...text });
    if (!preserveBubble){ 
        bubbleTimeouts.push(autoHiddeBubbleFn());
    }
}

const autoHiddeBubbleFn = () => setTimeout(() => {
    hideBubble()
}, 5000);