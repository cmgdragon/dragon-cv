import React from 'react';

const Language = ({ lang, setLang, selectedSection, mobile=false }) => {

    const handleLang = newLang => setLang(newLang);

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
        <div className={`language ${selectedSection !== 'dragon-home' ? 'expanded-lang ' : ' '}` + 
        `${mobile ? 'mobile' : ''}`} onClick={toggleFocus}>
            <div className="language__box">
                <img onClick={() => handleLang('en')} 
                    className={`language__lang ${lang === 'en' ? 'selected' : ''}`}
                    src={`http://127.0.0.1:8081/images/cv_sections/about/english.svg`}
                />
                <img onClick={() => handleLang('es')} 
                    className={`language__lang ${lang === 'es' ? 'selected' : ''}`}
                    src={`http://127.0.0.1:8081/images/cv_sections/about/spanish.svg`} 
                />
            </div>
        </div>
    )
}

export default Language;