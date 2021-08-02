import React from 'react';

const Contact = () => {

    return (
        <div className="cv-section contact-section">
            <form className="contact-form">
                <label className="contact-form__label" for="form-name">Your name</label>
                <input className="contact-form__input" id="form-name" name="form-name" type="text" placeholder="Name" required />

                <label className="contact-form__label" for="form-email">Your email</label>
                <input className="contact-form__input" id="form-email" type="email" name="form-email" placeholder="somebody@domain.com" required />

                <label className="contact-form__label" for="form-msg">Message</label>
                <textarea className="contact-form__teaxt-area" id="form-msg" name="form-msg" placeholder="Hello there!" required></textarea>

                <button className="contact-form__button" type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;