import React from 'react';

const Language = ({ lang, setLang, selectedSection, mobile=false }) => {

    const handleLang = (event, newLang) => {
        event.stopPropagation();
        event.preventDefault();
        setLang(newLang)};

    const toggleFocus = ({target}) => {
        if (target.classList.contains('show')) {
            target.classList.remove('show');
            target.parentElement.classList.remove('show');
        } else {
            target.classList.add('show');
            target.parentElement.classList.add('show');
        }
    }

    return (
        <div className={`language ${selectedSection && selectedSection !== 'dragon-home' ? 'expanded-lang ' : ' '}` + 
        `${mobile ? 'mobile' : ''}`} onClick={toggleFocus}>
            <div className="language__box">
                <img onClick={event => handleLang(event, 'en')} 
                    className={`language__lang ${lang === 'en' ? 'selected' : ''}`}
                    src={`/images/cv_sections/about/english.svg`}
                />
                <img onClick={event => handleLang(event, 'es')} 
                    className={`language__lang ${lang === 'es' ? 'selected' : ''}`}
                    src={`/images/cv_sections/about/spanish.svg`} 
                />
            </div>
        </div>
    )
}

export default Language;