import React from 'react';

const Language = ({ lang, setLang, selectedSection }) => {

    const handleLang = newLang => setLang(newLang);

    return (
        <div className={`language ${selectedSection !== 'dragon-home' ? 'expanded-lang' : ''}`}>
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