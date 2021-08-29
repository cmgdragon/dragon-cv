import React, { useEffect, useState } from 'react';
import DragonBase from './components/dragon/DragonBase';
import About from './components/cv_sections/About';
import Projects from './components/cv_sections/Projects';
import Education from './components/cv_sections/Education';
import Experience from './components/cv_sections/Experience';
import Contact from './components/cv_sections/Contact';
import HomeSection from './components/HomeSection';
import Language from './components/Language';
import * as dragonWelcome from './translations/Welcome.json';
import * as sectionsText from './translations/Sections.json';
import { hideBubble } from './components/speech_bubble/HideBubble';
import calcDragonTransform from './functions/calcDragonTransform';
import MenuMobile from './components/MenuMobile';
import * as dragonGuide from './translations/DragonGuide.json';
import { showBubble } from './components/speech_bubble/ShowBubble';

const App = () => {

    const [debounce, setDebounce] = useState(false);
    const [homeGuide, setHomeGuide] = useState(false);
    const [pos, setPos] = useState({top: 0, left: 0});
    const [isDragging, setDragging] = useState(false);
    const [selectedSection, setSection] = useState(undefined);
    const initDragonPos = { top: '2%', left: '75%'};
    const [lang, setLang] = useState('en');
    const [dragonText, setDragonText] = useState(dragonWelcome);

    useEffect(() => {

        window.addEventListener('load', () => {
            document.querySelector('.desktop-menu-guide').classList.remove('show');
            clearTimeout(homeGuide);
            document.getElementById("app-loader").classList.add('hidden');
        }, { once: true });

        calcDragonTransform();

        showBubble(dragonWelcome, setDragonText, true);

        window.addEventListener('keydown', ({code}) => {
            if (code === 'Tab') {
                hideBubble();
            }
        });

        window.addEventListener('click', event => {
            event.stopPropagation();

            if (!event.path.find(el => "getAttribute" in el && el.getAttribute("data-clickable")) &&
                !event.path.find(el => el === document.querySelector('.menu-mobile__dragon')) &&
                !event.path.find(el => el === document.querySelector('.language'))) {
                hideBubble();
            }
        });

        document.querySelectorAll('[data-clickable]').forEach(el => {

            el.addEventListener('keydown', event => {
                event.stopPropagation();
                if (event.code === 'Enter') {
                    event.target.click();
                }
            })
        });

    }, []);

    useEffect(() => {

        if (!selectedSection) {
            setHomeGuideTimeout();
        } else {
            clearTimeout(homeGuide);
            document.querySelector('.dragon__guide.home').classList.remove('show');
        }
    }, [selectedSection])

    const clearHomeGuide = () => {
        document.querySelector('.desktop-menu-guide').classList.remove('show');
        clearTimeout(homeGuide);
        setHomeGuideTimeout();
    }

    const setHomeGuideTimeout = () => setHomeGuide( setTimeout(() => {
        document.querySelector('.desktop-menu-guide').classList.add('show');
    }, 15000))

    const selectSection = () => {
        if (selectedSection !== 'dragon-home') {
            if (!isDragging) return;
            selectedSection?.classList.add('expanded');
            selectedSection?.classList.add('cave__background');
            selectedSection?.previousElementSibling.classList.add('expanded');
        }
    }

    const dragDragon = event => {
        if (debounce) return;
        setDebounce(true);
        setTimeout(() => {
            setPos({top: event.clientY, left: event.clientX});
            setDebounce(false);

            if (isDragging) {
                const section = document.elementsFromPoint(event.clientX, event.clientY)
                                    .find(e => e.getAttribute('data-section'));

                if (section && section !== 'dragon-home' && section === selectedSection) return;
                                    
                [...document.querySelectorAll('[data-section]')].forEach(s => 
                    s.previousElementSibling.classList.remove('expand'));
                
                if (section) {
                    section.previousElementSibling.classList.add('expand');
                    setSection(section);
                } else {
                    setSection('dragon-home');
                }
            }
        }, 10)
    }

    const expandMobile = (section_name, setSection) => {
        const selectedSectionMobile = document.getElementById(section_name); 
        selectedSectionMobile.classList.add('expanded');
        selectedSectionMobile.classList.add('cave__background');
        selectedSectionMobile.previousElementSibling.classList.add('expanded');

        setTimeout(() => {
            
            setSection(selectedSectionMobile);
        }, 100);
    }

    const unExpandMobile = () => {
        selectedSection.classList.remove('expanded');
        selectedSection.previousElementSibling.classList.remove('expanded');
        document.getElementById("dragon-home").classList.remove('show');
        setSection('dragon-home');
    }

    return (
        <>
        <div id="app-loader">
            <div className="app-loader__text">Loading</div>
            <div className="app-loader__eyes">
                <div className="app-loader__eye reverse">
                    <div className="app-loader__iris"></div>
                </div>
                <div className="app-loader__eye">
                    <div className="app-loader__iris"></div>
                </div>
            </div>
        </div>
        <div className="desktop-menu-guide" onClick={clearHomeGuide}>
            <div className="desktop-menu-guide__hand"></div>
        </div>
        <Language lang={lang} setLang={setLang} selectedSection={selectedSection} />
        <div id="main-menu" onMouseMove={dragDragon}>

            <HomeSection id="about" lang={lang} expandMobile={expandMobile} setSection={setSection} selectedSection={selectedSection}>
                <About setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <div id="dragon-home">
                <div>
                <DragonBase
                    lang={lang}
                    selectSection={selectSection}
                    selectedSection={selectedSection}
                    setDragging={setDragging}
                    drag_top={pos.top}
                    setDragonText={setDragonText}
                    drag_left={pos.left}
                    dragonText={dragonText}
                    initDragonPos={initDragonPos}
                    pos={{top: initDragonPos.top, left: initDragonPos.left}}
                />
                    <div  className="dragon-home__floor">
                        <div className="dragon__guide home show">{dragonGuide.inHome[lang]}</div>
                        <div className="dragon-home__floor-background"></div>
                    </div>
                </div>
            </div>

            <HomeSection id="projects" lang={lang} expandMobile={expandMobile} setSection={setSection} selectedSection={selectedSection}>
                <Projects setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <HomeSection id="education" lang={lang} expandMobile={expandMobile} setSection={setSection} selectedSection={selectedSection}>
                <Education setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <HomeSection id="experience" lang={lang} expandMobile={expandMobile} setSection={setSection} selectedSection={selectedSection}>
                <Experience setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <HomeSection id="contact" lang={lang} expandMobile={expandMobile} setSection={setSection} selectedSection={selectedSection}>
                <Contact setDragonText={setDragonText} lang={lang} />
            </HomeSection>
        </div>
        <MenuMobile id="menu-mobile" dragonText={dragonText} selectedSection={selectedSection}>
            <div className="menu-mobile__language">
                <Language lang={lang} setLang={setLang} selectedSection={selectedSection} mobile={true} />
            </div>
            <div className="menu-mobile__back" onClick={unExpandMobile} ><span>{sectionsText.menu[lang]}</span></div>
            <div className="menu-mobile__dragon">
                <div className="menu-mobile__dragon-bubble">
                    <div className="menu-mobile__dragon-bubble-triangle"></div>
                    <div className="menu-mobile__dragon-bubble-text-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="menu-mobile__dragon-head"></div>
            </div>
        </MenuMobile>
        </>
    )
}

export default App;