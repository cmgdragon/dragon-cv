import React, { useEffect, useState } from 'react';
import { showBubble } from '../speech_bubble/ShowBubble';
import { hideBubble } from '../speech_bubble/HideBubble';
import * as dragonText from '../../translations/cv_Sections/Contact.json';

const Contact = ({expanded, setDragonText, lang}) => {

    const [randomWordShown, setRandomWord] = useState({init: false, timeout: false});
    const [intervalFn, setIntervalFn] = useState(undefined);
    const [sending, setSending] = useState(false);
    const interval = 15;

    useEffect(() => {

        if (!expanded) return;

        document.querySelector('.contact-section').classList.add('show');

    }, [expanded]);

    useEffect(() => {
        if (expanded) {
            initWaitingInterval(randomWordShown.init, dragonText.waiting_interval.init);
            setTimeout(() => {
                document.querySelector('.contact-form__button').classList.remove('disable-click');
            }, 100);
        } else {
            clearInterval(intervalFn);
            document.querySelector('.contact-form__button').classList.add('disable-click');
        }
    }, [expanded])

    const initWaitingInterval = (init, msgs, preserve=false) => {
        setIntervalFn(setInterval(function() {
            if (!init) {
                showBubble(msgs, setDragonText, preserve);
            }

        }, interval*1000))
    }

    const validateForm = event => {
        event.preventDefault();

        clearInterval(intervalFn);
        setRandomWord({...randomWordShown, init: false});
        
        const email = document.getElementById("form-email");
        const name = document.getElementById("form-name");
        const msg = document.getElementById("form-msg");
        email.classList.remove('error-form');
        name.classList.remove('error-form');
        msg.classList.remove('error-form');
        
        if (name.value === "") {
            showBubble(dragonText.error_name, setDragonText, true);
            initWaitingInterval(randomWordShown.init, dragonText.waiting_interval.init);
            name.classList.add('error-form');
            return;
        }
        
        if (email.value === "") {
            showBubble(dragonText.error_email, setDragonText, true);
            initWaitingInterval(randomWordShown.init, dragonText.waiting_interval.init);
            email.classList.add('error-form');
            return;
        }
        
        if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email.value)) {
            showBubble(dragonText.error_worngemail, setDragonText, true);
            initWaitingInterval(randomWordShown.init, dragonText.waiting_interval.init);
            email.classList.add('error-form');
            return;
        }
        
        if (msg.value === "") {
            showBubble(dragonText.error_msg, setDragonText, true);
            initWaitingInterval(randomWordShown.init, dragonText.waiting_interval.init);
            msg.classList.add('error-form');
            return;
        }
        
        setSending(true);
        sendMail();
    }

    const randomWord = () => {

        if (!randomWordShown.init) {
            clearInterval(intervalFn);
            initWaitingInterval(randomWordShown.timeout, dragonText.waiting_interval.stopped, true);
            hideBubble();
            //setTimeout(() => {
                setRandomWord({...randomWordShown, init: true});
            //}, interval*500);
            return;
        }

        if (!randomWordShown.timeout) {
            clearInterval(intervalFn);
            setRandomWord({...randomWordShown, timeout: true});
            showBubble(dragonText.random_typing, setDragonText);
            initWaitingInterval(randomWordShown.timeout, dragonText.waiting_interval.stopped, true);
            setTimeout(() => {
                setRandomWord({init: false, timeout: false});
            }, interval*500);
        }
    }

    const sendMail = async () => {

            const request = await fetch('/sendemail', { 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    from: document.getElementById("form-email").value,
                    name: document.getElementById("form-name").value,
                    msg: document.getElementById("form-msg").value
                })
            });
            const response = await request.json();

            switch (response.code) {
                case 200:
                    showBubble(dragonText.success_send, setDragonText, true);
                    document.getElementById("dragon-form").reset();
                    break;
                default:
                    showBubble(dragonText.error_send, setDragonText, true);
                    break;
            }
            setSending(false);
    }

    return (
        <div className="cv-section contact-section">
            <form id="dragon-form" className="contact-form" onSubmit={validateForm} noValidate>
                <div className="contact-form__frame">
                    <div className="contact-form__input-box">
                        <input disabled={sending ? true : false} className="contact-form__input" data-clickable id="form-name" name="form-name" type="text" onChange={randomWord} required />
                        <label className="contact-form__label" htmlFor="form-name">{dragonText.placeholder.name[lang]}</label>
                    </div>

                    <div className="contact-form__input-box">
                        <input disabled={sending ? true : false} className="contact-form__input" data-clickable id="form-email" type="text" name="form-email" onChange={randomWord} required />
                        <label className="contact-form__label" htmlFor="form-email">{dragonText.placeholder.email[lang]}</label>
                    </div>

                    <div className="contact-form__input-box">
                        <textarea disabled={sending ? true : false} className="contact-form__teaxt-area" data-clickable id="form-msg" name="form-msg" onChange={randomWord} required ></textarea>
                        <label className="contact-form__label" htmlFor="form-msg">{dragonText.placeholder.message[lang]}</label>
                    </div>

                    <button 
                        disabled={sending ? true : false}
                        className={`contact-form__button disable-click ${sending ? 'sending' : ''}`} 
                        type="submit">{sending ? dragonText.sending[lang] : dragonText.send[lang]}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;