import React, { useEffect, useState } from 'react';
import addAnimation from '../../animations/animation_functions/addAnimation';
import removeAnimation from '../../animations/animation_functions/removeAnimation';
import { showBubble } from '../speech_bubble/ShowBubble';
import { hideBubble } from '../speech_bubble/HideBubble';
import * as dragonText from '../../translations/cv_Sections/Projects.json';
import calcDragonTransform from '../../functions/calcDragonTransform';

const Project = ({ expanded, id, setDragonText }) => {

    useEffect(() => {
        window.addEventListener('keydown', dragonKeyDown, { once: true });
        window.addEventListener('keyup', dragonKeyUp);
    }, []);

    useEffect(() => {

        if (!expanded) return;

        document.querySelectorAll('.project-box').forEach(el => {
            setTimeout(() => {
                el.classList.add('show');
            }, 1000);
        });

        document.querySelector('.projects-guide').classList.add('show');

    }, [expanded]);

    let isMoving = false;

    const dragonKeyDown = ({code}) => {
        if (!document.querySelector('#projects.expanded')) return;
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
                calcDragonTransform(false);
                moveToDirection(-vel);
            break;
            case 'KeyD':
                calcDragonTransform(true);
                moveToDirection(vel);
        }
    }

    const dragonKeyUp = ({code}) => {
        if (code === 'KeyA' || code === 'KeyD'
            || code === 'ArrowLeft' || code === 'ArrowRight') {
                isMoving = false;
                removeAnimation('walk');
        }
        window.addEventListener('keydown', dragonKeyDown, { once: true });
    }

    const moveDragon = left => {
        const projectCarousel = document.getElementById("project-carousel");
        const background = document.querySelector('#projects .cave__background-depth1');
        projectCarousel.scrollLeft += left;
        const [right, right_px, bottom, bottom_px] = getComputedStyle(background).backgroundPosition.split(' ');
        const bkMove = +right_px.replace('px', '') + left;
        
        const carouselPercent = projectCarousel.scrollLeft / (projectCarousel.scrollWidth - projectCarousel.clientWidth) * 100;
        
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

    const showProjectBubble = (event, number) => {
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

        showBubble(dragonText[`project${number}`], setDragonText, true);
    }

    return (
        <div id="project-carousel" className="cv-section projects-section">

        <div className="projects-guide">
            <div className="projects-guide__top-row">
                <div className="projects-guide__key">W</div>
            </div>
            <div className="projects-guide__bottom-row">
                <div className="projects-guide__key selected">A</div>
                <div className="projects-guide__key">S</div>
                <div className="projects-guide__key selected">D</div>
            </div>
            <div className="projects-guide__arrow-box">
                <div className="projects-guide__arrow reverse">
                    <div className="projects-guide__arrow stick1"></div>
                    <div className="projects-guide__arrow stick2"></div>
                    <div className="projects-guide__arrow stick3"></div>
                </div>
                <div className="projects-guide__arrow">
                    <div className="projects-guide__arrow stick1"></div>
                    <div className="projects-guide__arrow stick2"></div>
                    <div className="projects-guide__arrow stick3"></div>
                </div>
            </div>
        </div>

        <div tabIndex={0} data-clickable className="project-box project1" onClick={event => showProjectBubble(event, 1)}>
            <a href="https://researcher.zone" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'/images/cv_sections/projects/researcherzone.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'/images/technologies/react.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/deno.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/mongodb.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/docker.png'} />
            </div>
        </div>

        <div tabIndex={0} data-clickable className="project-box project2" onClick={event => showProjectBubble(event, 2)}>
            <a href="https://you-tales.com" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'/images/cv_sections/projects/youtales.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'/images/technologies/raspberry.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/mysql.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/php.jpg'} />
            </div>
        </div>

        <div tabIndex={0} data-clickable className="project-box project3" onClick={event => showProjectBubble(event, 3)}>
            <a href="https://udiet.page" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'/images/cv_sections/projects/udiet.jpg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'/images/technologies/react.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/node.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/firebase.png'} />
            </div>
        </div>

        <div tabIndex={0} data-clickable className="project-box project4" onClick={event => showProjectBubble(event, 4)}>
            <a href="https://github.com/cmgdragon/dragon-cv" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'/images/dragon-web.svg'} />
            <div className="project-box__tech">
                <img className="project-box__tech-img" src={'/images/technologies/react.png'} />
                <img className="project-box__tech-img" src={'/images/technologies/node.png'} />
            </div>
        </div>

        <div tabIndex={0} data-clickable className="project-box project5" onClick={event => showProjectBubble(event, 5)}>
            <a href="https://github.com/cmgdragon" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'/images/technologies/github.png'} />
        </div>

        </div>
    )
}

export default Project;