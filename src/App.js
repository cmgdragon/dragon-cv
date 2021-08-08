import React, { useEffect, useState } from 'react';
import addAnimation from './animations/animation_functions/addAnimation';
import replaceAnimation from './animations/animation_functions/replaceAnimation';
import DragonBase from './components/dragon/DragonBase';
import About from './components/cv_sections/About';
import Projects from './components/cv_sections/Projects';
import Education from './components/cv_sections/Education';
import Experience from './components/cv_sections/Experience';
import Contact from './components/cv_sections/Contact';
import HomeSection from './components/HomeSection';
import Language from './components/Language';
import * as dragonWelcome from './translations/Welcome.json';
import { showBubble } from './components/speech_bubble/ShowBubble';

const App = () => {

    const [debounce, setDebounce] = useState(false);
    const [pos, setPos] = useState({top: 0, left: 0});
    const [isDragging, setDragging] = useState(false);
    const [selectedSection, setSection] = useState('dragon-home');
    const initDragonPos = { top: '2%', left: '78%'};
    const [lang, setLang] = useState('en');
    const [dragonText, setDragonText] = useState(dragonWelcome);

   /* useEffect(() => {

    }, []);*/

    const selectSection = event => {
        //console.log(event)
        if (selectedSection !== 'dragon-home') {
            if (!isDragging) return;
            selectedSection.classList.add('expanded');
            selectedSection.classList.add('cave__background');
            selectedSection.previousElementSibling.classList.add('expanded');
        }
    }

    const dragDragon = event => {
        if (debounce) return;
        setDebounce(true);
        setTimeout(() => {
            setPos({top: event.clientY, left: event.clientX});
            setDebounce(false);

            if (isDragging) {
                [...document.querySelectorAll('[data-section]')].forEach(s => 
                    s.previousElementSibling.classList.remove('expand'));

                const section = document.elementsFromPoint(event.clientX, event.clientY)
                                    .find(e => e.getAttribute('data-section'))
                
                if (section) {
                    section.previousElementSibling.classList.add('expand');
                    setSection(section);
                } else {
                    setSection('dragon-home');
                }
            }
        }, 10)
    }

    const style = {
        position: 'relative',
        display: 'grid',
        height: '100%',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto'
    }

    return (
        <>
        <Language lang={lang} setLang={setLang} selectedSection={selectedSection} />
        <div style={style} onMouseMove={dragDragon}>

            <HomeSection id="about">
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
                    drag_left={pos.left}
                    dragonText={dragonText}
                    initDragonPos={initDragonPos}
                    pos={{top: initDragonPos.top, left: initDragonPos.left}}
                />
                    <div  className="dragon-home__floor">
                        <div></div>
                    </div>
                </div>
            </div>

            <HomeSection id="projects">
                <Projects setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <HomeSection id="education">
                <Education setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <HomeSection id="experience">
                <Experience setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            <HomeSection id="contact">
                <Contact setDragonText={setDragonText} lang={lang} />
            </HomeSection>

            {/*<button onClick={() => replaceAnimation('walk')}>Add animation</button>*/}
        </div>
        
        </>
    )
}

export default App;