import React, { useEffect, useState } from 'react';
import { showBubble } from '../speech_bubble/ShowBubble';
import * as dragonText from '../../translations/cv_Sections/Education.json';

const Education = ({expanded, setDragonText, lang}) => {

    useEffect(() => {
        if (!expanded) return;
        console.log('entrar')
        let i = 0;
        const showGlyph = () => setTimeout(() => {
            const glyph_container = document.querySelector(`.floating-glyph-d${i+1} .glyph__container`);
            glyph_container.classList.add('show');
            glyph_container.parentElement.classList.add('show');
            ++i;
            if (i < document.querySelectorAll('.glyph__container').length) {
                showGlyph();
            }
        }, 500)
        showGlyph();

    }, [expanded]);

    const selectRune = ({target}, text) => {
        target.parentElement.classList.add('selected-rune');
        showBubble(text.dragon, setDragonText, true)
    }

    const unSelectRune = ({target}) => {
        target.parentElement.classList.remove('selected-rune');
    }

    return (
        <div className="cv-section education-section">
            <div className="rune">
                <div className="glyph floating-glyph-d1" tabIndex={0} data-clickable onFocus={event => selectRune(event, dragonText.degree)} onBlur={unSelectRune}>
                    <div className="glyph__container">
                        <GlyphLine expanded={expanded} width="50%" />
                        <GlyphLine expanded={expanded} height="50%" sHeight="calc(100% - 10px)" sBottom="0" />
                        <GlyphLine expanded={expanded} height="100%" left="calc(50% - 10px)" sHeight="calc(100% - 10px)" sBottom="0" />
                        <GlyphLine expanded={expanded} width="100%" top="50%" />
                    </div>
                </div>
                <div className="rune__text-container">
                    <div className="rune__text-box">
                        <span className="rune__text">{dragonText.degree.template[lang]}</span>
                        <div className="rune__logo">
                            <div className="rune__logo-img" style={{
                                backgroundImage:`url('http://127.0.0.1:8081/images/${'cv_sections/experience/ub.png'}')`
                            }}></div>
                            <span className="rune__logo-year">{dragonText.degree.year[lang]}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rune start">
                <div className="glyph floating-glyph-d2 left" tabIndex={0} data-clickable onFocus={event => selectRune(event, dragonText.master)} onBlur={unSelectRune}>
                    <div className="glyph__container">
                        <GlyphLine expanded={expanded} height="100%" left="calc(80% - 10px)" />
                        <GlyphLine expanded={expanded} width="45%" right="20%" sWidth="calc(100% - 10px)" sLeft="0" />
                        <GlyphLine expanded={expanded} width="70%" right="20%" top="50%" sWidth="calc(100% - 10px)" sLeft="0" />
                        <GlyphLine expanded={expanded} width="40%" right="20%" top="calc(100% - 10px)" sWidth="calc(100% - 10px)" sLeft="0" />
                    </div>
                </div>
                <div className="rune__text-container">
                <div className="rune__text-box">
                        <span className="rune__text">{dragonText.master.template[lang]}</span>
                        <div className="rune__logo">
                            <div className="rune__logo-img" style={{
                                backgroundImage:`url('http://127.0.0.1:8081/images/${'cv_sections/education/uoc.png'}')`
                            }}></div>
                            <span className="rune__logo-year">{dragonText.master.year[lang]}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rune">
                <div className="glyph floating-glyph-d3" tabIndex={0} data-clickable onFocus={event => selectRune(event, dragonText.autonomous)} onBlur={unSelectRune}>
                    <div className="glyph__container">
                        <GlyphLine expanded={expanded} height="100%" right="0" sHeight="calc(100% - 20px)" sBottom="10px" />
                        <GlyphLine expanded={expanded} height="100%" right="40%" sHeight="calc(100% - 20px)" sBottom="10px" />
                        <GlyphLine expanded={expanded} width="80%" bottom="0" right="0" />
                        <GlyphLine expanded={expanded} width="80%" right="0" />
                    </div>
                </div>
                <div className="rune__text-container">
                <div className="rune__text-box">
                        <span className="rune__text">{dragonText.autonomous.template[lang]}</span>
                        <div className="rune__logo">
                            <div className="rune__logo-img glyph-image-autonomous"></div>
                            <span className="rune__logo-year">{dragonText.autonomous.year[lang]}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const GlyphLine = ({expanded, top, left, right, bottom, height='10px', width='10px', 
    sTop, sLeft, sRight, sBottom, sWidth="100%", sHeight="100%"}) => {

    const [gliphColor, setColor] = useState('rgb(255, 0, 0)');
    const [intervalFn, setIntervalFn] = useState('nada');

    useEffect(() => {
        if (expanded) {
            setIntervalFn(setInterval(function() {
                const randomColor = Math.floor(Math.random() * 100);
                const randomPos = Math.floor(Math.random() * 3);
                let rgb = 'rgb(';
                for (let i = 0; i < 3; i++) {
                    rgb += i === randomPos ? randomColor : 0;
                    rgb += i !== 2 ? ',' : '';
                }
                rgb += ')';
                setColor(rgb);
            }, 200));
        } else {
            clearInterval(intervalFn);
        };
    }, [expanded]);

    const style = {
        top, left, right, bottom,
        height, width,
        backgroundColor: gliphColor
    }

    const style_shadow = {
        top: sTop,
        right: sRight,
        height: sHeight,
        left: sLeft,
        bottom: sBottom,
        width: sWidth
    }

    return (
        <div className="glyph__line" style={style} >
            <div className="glyph__line glyph__line-shadow" style={style_shadow}></div>
        </div>
    )
}

export default Education;