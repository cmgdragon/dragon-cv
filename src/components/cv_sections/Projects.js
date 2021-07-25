import React, { useEffect, useState } from 'react';
import addAnimation from '../../animations/animation_functions/addAnimation';
import removeAnimation from '../../animations/animation_functions/removeAnimation';
import { showBubble } from '../speech_bubble/ShowBubble';
import { hideBubble } from '../speech_bubble/hideBubble';
import * as dragonText from '../../dragon_text/cv_Sections/Projects.json';

const Project = ({ width, id, setDragonText }) => {

    useEffect(() => {
        window.addEventListener('keydown', dragonKeyDown);
        window.addEventListener('keyup', dragonKeyUp);
        document.getElementById('projects').addEventListener('click', ({target}) => {

            if (target.className.includes('project-box')) return;
                hideBubble(setTimeout(() => {
                    document.getElementById("speech-bubble").classList.add('hidden');
                }, 200));
        } )
        return () => { 
            window.removeEventListener('keydown', dragonKeyDown);
            window.removeEventListener('keyup', dragonKeyUp);
        };
    }, []);

    let isMoving = false;

    const dragonKeyDown = ({code}) => {
        const vel = 3;
        const moveToDirection = vel => {
            if (!isMoving) {
                addAnimation('walk');
                isMoving = true;
                moveDragon(vel);
            }
        }

        hideBubble(setTimeout(() => {
            document.getElementById("speech-bubble").classList.add('hidden');
        }, 200));

        switch (code) {
            case 'KeyA':
                moveToDirection(-vel);
            break;
            case 'KeyD':
                moveToDirection(vel);
        }
    }

    const dragonKeyUp = ({code}) => {
        if (code === 'KeyA' || code === 'KeyD'
            || code === 'ArrowLeft' || code === 'ArrowRight') {
                isMoving = false;
                removeAnimation('walk');
            }
    }

    const moveDragon = left => {
        const projectCarousel = document.getElementById("project-carousel");
        const background = document.querySelector('#projects .cave__background-depth1');
        projectCarousel.scrollLeft += left;
        const [right, right_px, bottom, bottom_px] = getComputedStyle(background).backgroundPosition.split(' ');
        const bkMove = +right_px.replace('px', '') + left;
        
        const forward = Math.sign(left) === 1 ? true : false;
        const carouselPercent = projectCarousel.scrollLeft / (projectCarousel.scrollWidth - projectCarousel.clientWidth) * 100;

        if (forward) {
            dragon.classList.add("reverse");
        } else {
            dragon.classList.remove("reverse");
        }
        
        if (carouselPercent !== 0 && carouselPercent !== 100) {
            background.style.backgroundPosition = `${right} ${bkMove}px ${bottom} ${bottom_px}`;
            if (isMoving) {
                setTimeout(() => {
                    moveDragon(left);
                }, 10); 
            }
        } else {
            removeAnimation('walk');
        }
        

    }

    const detectWalkScroll = dragon => {

        setTimeout(() => {
            const projectNumbers = document.querySelectorAll('.project-box').length;
            const walkOffset = 100;
    
       for (const projectNum of [...Array(projectNumbers+1).keys()].slice(1)) {
           const projectPos = document.querySelector(`.project-box-activator${projectNum}`)
                                .getBoundingClientRect().x;
            const dragonPos = dragon.getBoundingClientRect().x;

           if (dragonPos + walkOffset >= projectPos) {
                   document.querySelector(`.project${projectNum}`).classList.add('show');
                }
            }
           
        }, 500);

    }

    const showProjectBubble = number => {
        document.getElementById("speech-bubble").classList.remove('hidden');
        const dragon = document.getElementById("dragon");
        const bubbleWidth = document.querySelector('.speech-bubble__body').offsetWidth;
        
        if (dragon.classList.contains('reverse')) {
            if (dragon.offsetLeft >= document.getElementById(id).offsetWidth - bubbleWidth) {
                dragon.classList.remove('reverse');
            }
        } else {
            if (dragon.offsetLeft + bubbleWidth <= 0) {
                dragon.classList.add('reverse');
            }
        }

        showBubble(dragonText[`project${number}`].en, setDragonText);
    }

    return (
        <div id="project-carousel" className="cv-section projects-section">

        <div tabIndex="1" className="project-box project1" onMouseUp={() => showProjectBubble(1)}>
            <a href="https://researcher.zone" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/researcherzone.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/react.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/deno.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/mongodb.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/docker.png'} />
            </div>
        </div>
        <div className="project-box-activator1"></div>

        <div tabIndex="1" className="project-box project2" onMouseUp={() => showProjectBubble(2)}>
            <a href="https://you-tales.com" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/raspberry.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/mysql.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/php.jpg'} />
            </div>
        </div>
        <div className="project-box-activator2"></div>

        <div tabIndex="1" className="project-box project3" onMouseUp={() => showProjectBubble(3)}>
            <a href="https://udiet.page" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/udiet.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/react.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/node.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/firebase.png'} />
            </div>
        </div>
        <div className="project-box-activator3"></div>

        <div tabIndex="1" className="project-box project4" onMouseUp={() => showProjectBubble(4)}>
            <a href="https://github.com/cmgdragon/dragon-cv" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/react.png'} />
                <img className="project-box__tech-img" src={'http://127.0.0.1:8081/images/technologies/node.png'} />
            </div>
        </div>
        <div className="project-box-activator4"></div>

        <div tabIndex="1" className="project-box project5" onMouseUp={() => showProjectBubble(5)}>
            <a href="https://github.com/cmgdragon" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/technologies/github.png'} />
        </div>
        <div className="project-box-activator5"></div>

        </div>
    )
}

export default Project;