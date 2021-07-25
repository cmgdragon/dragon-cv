import React, { useEffect, useState, useRef } from 'react';
import * as dragonText from '../../dragon_text/cv_Sections/About.json';
import { showBubble } from '../speech_bubble/ShowBubble';
import { hideBubble } from '../speech_bubble/hideBubble';

const About = ({ expanded, setDragonText }) => {

    return (
        <div className="cv-section about-section">
            <div id="info">
                <InfoBox 
                    boxPos={{top: "15%", left:"10%"}}
                    infoText="Born and living in Barcelona, Spain"
                    img="sagrada-familia"
                    leftWing="82%"
                    imgPos={{top: "2.5rem", left:"75%"}}
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_living.es}
                    delay={0}
                />
                <InfoBox 
                    boxPos={{top: "30%", left:"65%"}}
                    infoText="Air sports follower"
                    img="base-jumping"
                    leftWing="66%"
                    imgPos={{top: "2.5rem", left:"25%"}}
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_air.es}
                    delay={550}
                />
                <InfoBox 
                    boxPos={{top: "75%", left:"35%"}}
                    infoText="Virtual reality gamer"
                    img="vr-glasses"
                    leftWing="70%"
                    imgPos={{top: "2.5rem", left:"15%"}}
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_vr.es}
                    delay={900}
                />
            </div>
            <div id="hobbies">
                <div className="hobby"></div>
                <div className="hobby"></div>
                <div className="hobby"></div>
            </div>
            <div id="technologies">
                <CarouselItems 
                    items={10}
                    imageWidth={70} 
                    imageMargin={50} 
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_living.es}
                />
            </div>
            <div id="languages">
                <div className="languages__lang-es"></div>
                <div className="languages__lang-ca"></div>
                <div className="languages__lang-en"></div>
            </div>
            <div id="social">
                <img className="social__img" src="http://127.0.0.1:8081/images/cv_sections/about/linkedin.png" />
                <img className="social__img" src="http://127.0.0.1:8081/images/technologies/github.png" />
                <img className="social__img" src="http://127.0.0.1:8081/images/cv_sections/about/twitter.png" />
            </div>
        </div>
    )
}

const InfoBox = ({boxPos, imgPos, infoText, dragonText, leftWing, img, expanded, delay, setDragonText}) => {

    const infoBox = useRef(null);
    useEffect(() => {
        if (!expanded) return;
        showInfoBoxes();
    }, [expanded])

    const showInfoBoxes = () => {
        setTimeout(() => {     
            infoBox.current.classList.add("bat-wing-floating")
            infoBox.current.querySelectorAll('.bat-wing')[0].classList.add("bat-wing-flutter");
            infoBox.current.querySelectorAll('.bat-wing')[1].classList.add("reverse", "bat-wing-flutter-reverse");
            infoBox.current.style.top = +boxPos.top.replace('%', '')+40+'%';
            infoBox.current.style.left = +boxPos.left.replace('%', '')-10+'%';
            setTimeout(() => {
                document.querySelector('.about-section').style.zIndex = 5;
                infoBox.current.style.top = boxPos.top;
                infoBox.current.style.left = boxPos.left;
            }, 1100);
        }, delay);
    }

    return (
        <div ref={infoBox} style={{top: "-100%"}} className="info__box" onMouseUp={() => showBubble(dragonText, setDragonText)}>
        <div className="info__panel">
            <div className="bat-wing"></div>
            <span className="info__text">{infoText}</span>
            <img style={imgPos} className="info__img" src={`http://127.0.0.1:8081/images/cv_sections/about/${img}.svg`} />
            <div style={{left:leftWing}} className="bat-wing"></div>
        </div>
    </div>
    )
}

const CarouselItems = ({items, imageWidth, imageMargin, expanded, dragonText, setDragonText}) => {
    
    let canScroll = true;
    let lastMove = 0;
    useEffect(() => {
        if (!expanded) return;
        const tech = document.getElementById("technologies");
        tech.innerHTML += tech.innerHTML;
        scrollCarousel();
        tech.addEventListener('scroll', scrollCarousel);
        tech.addEventListener('mouseenter', () => {canScroll = false});
        tech.addEventListener('mouseover', ({clientX}) => {
            const rect = tech.getBoundingClientRect();
            const x = clientX - rect.left;
            const moveSpeed = 20;
            const move = x < lastMove ? -moveSpeed : moveSpeed;
            lastMove = x;
            tech.scrollLeft += move;
        });
        tech.addEventListener('mouseleave', () => {
            canScroll = true;
            scrollCarousel();
        });
        /*tech.querySelectorAll('img').forEach(img => {
            img.addEventListener('mouseover', () => setCanScroll(false))
        });*/
    }, [expanded]);

    const scrollCarousel = () => {
        if (!canScroll) return;
        const tech = document.getElementById("technologies");
        const carouselWidth = (imageWidth + imageMargin) * items;
        if (tech.scrollLeft > carouselWidth) {
            tech.scrollLeft = 5;
        } else {
            tech.scrollLeft += 1;
        }
    }

    const style = {
        width: imageWidth,
        height: imageWidth,
        marginLeft: imageMargin
    }

    return (
        <>
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/react.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/node.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/liferay.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/docker.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/deno.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/firebase.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/mongodb.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/vue.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/angular.png" />
        <img style={style} className="technology" src="http://127.0.0.1:8081/images/technologies/gcp.svg" />
        </>
    )
}

export default About;