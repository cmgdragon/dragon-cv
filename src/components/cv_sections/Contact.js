import React, { useEffect, useState } from 'react';
import { showBubble } from '../speech_bubble/ShowBubble';
import { hideBubble } from '../speech_bubble/hideBubble';
import * as dragonText from '../../translations/cv_Sections/Contact.json';

const Contact = ({expanded, setDragonText, lang}) => {

    const [randomWordShown, setRandomWord] = useState({init: false, timeout: false});
    const [intervalFn, setIntervalFn] = useState(undefined);
    const interval = 15;
    useEffect(() => {
        if (expanded) {
            initWaitingInterval(randomWordShown.init, dragonText.waiting_interval.init);
        } else {
            clearInterval(intervalFn);
        }
    }, [expanded])

    const initWaitingInterval = (init, msgs, preserve=false) => {
        setIntervalFn(setInterval(function() {
                console.log(init, msgs)
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
            console.log('what', randomWordShown.init)
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
    }

    return (
        <div className="cv-section contact-section">
            <form id="dragon-form" className="contact-form" onSubmit={validateForm} noValidate>
                <div className="contact-form__frame">
                    <div className="contact-form__input-box">
                        <input className="contact-form__input" data-clickable id="form-name" name="form-name" type="text" onKeyPress={randomWord} required />
                        <label className="contact-form__label" htmlFor="form-name">Your name</label>
                    </div>

                    <div className="contact-form__input-box">
                        <input className="contact-form__input" data-clickable id="form-email" type="text" name="form-email" onKeyPress={randomWord} required />
                        <label className="contact-form__label" htmlFor="form-email">Your email</label>
                    </div>

                    <div className="contact-form__input-box">
                        <textarea className="contact-form__teaxt-area" data-clickable id="form-msg" name="form-msg" onKeyPress={randomWord} required ></textarea>
                        <label className="contact-form__label" htmlFor="form-msg">Message</label>
                    </div>

                    <button className="contact-form__button" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;