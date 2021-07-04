import React from 'react';
import addAnimation from './animations/animation_functions/addAnimation';
import DragonArea from './components/dragon/DragonArea';
import About from './components/cv_sections/About';
import Projects from './components/cv_sections/Projects';
import Education from './components/cv_sections/Education';
import Experience from './components/cv_sections/Experience';
import Contact from './components/cv_sections/Contact';
import HomeSection from './components/HomeSection';

const App = () => {

    const style = {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }

    return (
        <>
        <div style={style}>
            <HomeSection>
                <About />
            </HomeSection>

            <HomeSection>
                <Projects />
            </HomeSection>

            <HomeSection>
                <Education />
            </HomeSection>

            <HomeSection>
                <Experience />
            </HomeSection>

            <HomeSection>
                <Contact />
            </HomeSection>

            {/*<button onClick={() => addAnimation('walk')}>Add animation</button>*/}
        </div>
        <DragonArea />
        </>
    )
}

export default App;