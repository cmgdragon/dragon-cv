import React, { useEffect, useRef } from 'react';
import * as dragonText from '../../translations/cv_Sections/About.json';
import { showBubble } from '../speech_bubble/ShowBubble';

const About = ({ expanded, setDragonText, lang }) => {

    useEffect(() => {

        if (!expanded) return;

        document.querySelector('.about-section').classList.add('show');

    }, [expanded]);

    useEffect(() => {

        if (!expanded) {
            document.querySelector('#info').classList.add('disable-click');
        } else {
            setTimeout(() => {
                document.querySelector('#info').classList.remove('disable-click');
            }, 100);
        }

    }, [expanded]);

    return (
        <div className="cv-section about-section">
            <div id="info" className="disable-click">
                <InfoBox 
                    lang={lang}
                    boxPos={{top: "15%", left:"-10%"}}
                    img="sagrada-familia"
                    imgPos={{top: "2.5rem", left:"75%"}}
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_living}
                    delay={0}
                />
                <InfoBox 
                    lang={lang}
                    boxPos={{top: "80%", left:"25%"}}
                    img="base-jumping"
                    imgPos={{top: "2.5rem", left:"25%"}}
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_air}
                    delay={550}
                />
                <InfoBox 
                    lang={lang}
                    boxPos={{top: "15%", left:"55%"}}
                    img="vr-glasses"
                    imgPos={{top: "2.5rem", left:"15%"}}
                    expanded={expanded}
                    setDragonText={setDragonText}
                    dragonText={dragonText.info_vr}
                    delay={900}
                />
            </div>
            <div id="technologies">
                <CarouselItems 
                    lang={lang}
                    items={10}
                    imageWidth={70} 
                    imageMargin={50} 
                    expanded={expanded}
                    dragonText={dragonText}
                    setDragonText={setDragonText}
                />
            </div>
            <div id="languages">
                <div tabIndex={0} data-clickable className="languages__lang-es" onClick={() => showBubble(dragonText.languages.spanish, setDragonText, true)}></div>
                <div tabIndex={0} data-clickable className="languages__lang-ca" onClick={() => showBubble(dragonText.languages.catalan, setDragonText, true)}></div>
                <div tabIndex={0} data-clickable className="languages__lang-en" onClick={() => showBubble(dragonText.languages.english, setDragonText, true)}></div>
            </div>
            <div id="social">
                <div className="social__box" data-clickable tabIndex={0} onClick={() => showBubble(dragonText.social_networks.linkedin, setDragonText, true)}>
                    <img className="social__img" src="/images/cv_sections/about/linkedIn.png" />
                    <a href="" target="_blank" className="social__link">Go to</a>
                </div>
                <div className="social__box" data-clickable tabIndex={0} onClick={() => showBubble(dragonText.social_networks.github, setDragonText, true)}>
                    <img className="social__img" src="/images/technologies/github.png" />
                    <a href="" target="_blank" className="social__link">Go to</a>
                </div>
                <div className="social__box" data-clickable tabIndex={0} onClick={() => showBubble(dragonText.social_networks.twitter, setDragonText, true)}>
                    <img className="social__img" src="/images/cv_sections/about/twitter.png" />
                    <a href="" target="_blank" className="social__link">Go to</a>
                </div>
            </div>
        </div>
    )
}

const InfoBox = ({boxPos, imgPos, dragonText, img, expanded, delay, lang, setDragonText}) => {

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
        <div ref={infoBox} style={{top: "-100%"}} className="info__box">
            <div className="info__panel" tabIndex={0} data-clickable onClick={() => showBubble(dragonText.dragon, setDragonText, true)}>
                <div className="bat-wing"></div>
                <span className="info__text">{dragonText.template[lang]}</span>
                <img style={imgPos} className="info__img" src={`/images/cv_sections/about/${img}.svg`} />
                <div className="bat-wing"></div>
            </div>
        </div>
    )
}

const CarouselItems = ({items, imageWidth, imageMargin, expanded, lang, dragonText, setDragonText}) => {
    
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
        <img style={style} className="technology" src="/images/technologies/react.png" />
        <img style={style} className="technology" src="/images/technologies/node.png" />
        <img style={style} className="technology" src="/images/technologies/liferay.png" />
        <img style={style} className="technology" src="/images/technologies/docker.png" />
        <img style={style} className="technology" src="/images/technologies/deno.png" />
        <img style={style} className="technology" src="/images/technologies/firebase.png" />
        <img style={style} className="technology" src="/images/technologies/mongodb.png" />
        <img style={style} className="technology" src="/images/technologies/vue.png" />
        <img style={style} className="technology" src="/images/technologies/angular.png" />
        <img style={style} className="technology" src="/images/technologies/gcp.svg" />
        </>
    )
}

export default About;