import React, { useEffect, useState } from 'react';
import addAnimation from '../../animations/animation_functions/addAnimation';
import removeAnimation from '../../animations/animation_functions/removeAnimation';
import * as dragonText from '../../dragon_text/cv_Sections/Projects.json';

const Project = ({ width, id, setDragonText }) => {

    useEffect(() => {
        window.addEventListener('keydown', dragonKeyDown);
        window.addEventListener('keyup', dragonKeyUp);
        document.getElementById('projects').addEventListener('click', ({target}) => {
            console.log(target.className, target.className.includes('project-box'))
            if (target.className.includes('project-box')) return;
                hideBubble();
        } )
        return () => { 
            window.removeEventListener('keydown', dragonKeyDown);
            window.removeEventListener('keyup', dragonKeyUp);
        };
    }, []);

    let isMoving = false;

    const dragonKeyDown = ({code}) => {
        const vel = 15;
        const moveToDirection = vel => {
            if (!isMoving) {
                addAnimation('walk');
                isMoving = true;
                moveDragon(vel);
            }
        }
        hideBubble();
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

        const dragon = document.getElementById("dragon");
        const screenMiddle = window.innerWidth / 3;
        const forward = Math.sign(left) === 1 ? true : false;
        const posX = dragon.offsetLeft;
        
        if (forward) {
            if (posX >= document.getElementById(id).offsetWidth - 400) return;
        } else {
            if (posX <= 0) return;
        }

        const position = +dragon.style.left.replace('px', '');
        const moved = position + (left);
        dragon.style.left = `${moved}px`;
        
        if (forward) {
            
            dragon.classList.add("reverse");
            if (posX >= screenMiddle) {
                setTimeout(() => {
                    window.scrollBy({
                        left: screenMiddle,
                        behavior: 'smooth'
                    })                
                }, 10);
            }
            setTimeout(() => {
                detectWalkScroll(dragon);
            }, 10);
        } else {
            dragon.classList.remove("reverse");
            if (posX <= screenMiddle * 2) {
                setTimeout(() => {
                    window.scrollBy({
                        left: -screenMiddle,
                        behavior: 'smooth'
                    })                
                }, 10);
            }         
        }

        if (isMoving) {
            setTimeout(() => {
                moveDragon(left);
            }, 30); 
        }
    }

    const detectWalkScroll = dragon => {
        const projectNumbers = document.querySelectorAll('.project-box').length;
        const division = window.innerWidth / projectNumbers;

   for (const projectNum of [...Array(projectNumbers+1).keys()].slice(1)) {
       if (dragon.offsetLeft >= (division * projectNum)) {
               document.querySelector(`.project${projectNum}`).classList.add('show');
            }
        }
    }

    const showBubble = (text) => {
        document.getElementById("speech-bubble").classList.add('show');
        setDragonText(text);
    }

    const hideBubble = () => {
        document.getElementById("speech-bubble").classList.remove('show');
    }

    const style = { width }

    return (
        <div style={style} className="cv-section projects-section">

        <div tabIndex="1" className="project-box project1" onMouseUp={() => showBubble(dragonText.project1.en)}>
            <a href="https://you-tales.com" target="_blank" className="project-box__link">
                <i className="project-box__link-icon"></i>
            </a>
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <a href="" target="_blank" className="project-box__text">You tales</a>
        </div>

        <div tabIndex="1" className="project-box project2">
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <a href="" target="_blank" className="project-box__text">You tales</a>
        </div>

        <div tabIndex="1" className="project-box project3">
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <a href="" target="_blank" className="project-box__text">You tales</a>
        </div>

        <div tabIndex="1" className="project-box project4">
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <a href="" target="_blank" className="project-box__text">You tales</a>
        </div>

        <div tabIndex="1" className="project-box project5">
            <img className="project-box__image" src={'http://127.0.0.1:8081/images/cv_sections/projects/youtales.jpg'} />
            <a href="" target="_blank" className="project-box__text">You tales</a>
        </div>

        </div>
    )
}

export default Project;