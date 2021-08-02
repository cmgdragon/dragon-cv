import React, { useEffect, useState } from 'react';

const Education = ({expanded, setDragonText}) => {

    useEffect(() => {
        if (!expanded) return;
        console.log('entrar')
        let i = 0;
        const showGlyph = () => setTimeout(() => {
            document.querySelector(`.floating-glyph-d${i+1} .glyph__container`).classList.add('show');
            ++i;
            if (i < document.querySelectorAll('.glyph__container').length) {
                showGlyph();
            }
        }, 500)
        showGlyph();

    }, [expanded]);

    return (
        <div className="cv-section education-section">
            <div className="rune">
                <div className="glyph floating-glyph-d1">
                    <div className="glyph__container">
                        <GlyphLine expanded={expanded} width="50%" />
                        <GlyphLine expanded={expanded} height="50%" sHeight="calc(100% - 10px)" sBottom="0" />
                        <GlyphLine expanded={expanded} height="100%" left="calc(50% - 10px)" sHeight="calc(100% - 10px)" sBottom="0" />
                        <GlyphLine expanded={expanded} width="100%" top="50%" />
                    </div>
                </div>
                <div className="rune__text-container">
                    <div className="rune__text-box">
                        <span className="rune__text">Grado en Información y documentación</span>
                        <div className="rune__logo">
                            <div className="rune__logo-img" style={{
                                backgroundImage:`url('http://127.0.0.1:8081/images/${'cv_sections/experience/ub.png'}')`
                            }}></div>
                            <span className="rune__logo-year">2015–2019</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rune start">
                <div className="glyph floating-glyph-d2 left">
                    <div className="glyph__container">
                        <GlyphLine expanded={expanded} height="100%" left="calc(80% - 10px)" />
                        <GlyphLine expanded={expanded} width="45%" right="20%" sWidth="calc(100% - 10px)" sLeft="0" />
                        <GlyphLine expanded={expanded} width="70%" right="20%" top="50%" sWidth="calc(100% - 10px)" sLeft="0" />
                        <GlyphLine expanded={expanded} width="40%" right="20%" top="calc(100% - 10px)" sWidth="calc(100% - 10px)" sLeft="0" />
                    </div>
                </div>
                <div className="rune__text-container">
                <div className="rune__text-box">
                        <span className="rune__text">Máster de Desarrollode de Sitios y Aplicaciones Web</span>
                        <div className="rune__logo">
                            <div className="rune__logo-img" style={{
                                backgroundImage:`url('http://127.0.0.1:8081/images/${'cv_sections/education/uoc.png'}')`
                            }}></div>
                            <span className="rune__logo-year">2019–2021</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rune">
                <div className="glyph floating-glyph-d3">
                    <div className="glyph__container">
                        <GlyphLine expanded={expanded} height="100%" right="0" sHeight="calc(100% - 20px)" sBottom="10px" />
                        <GlyphLine expanded={expanded} height="100%" right="40%" sHeight="calc(100% - 20px)" sBottom="10px" />
                        <GlyphLine expanded={expanded} width="80%" bottom="0" right="0" />
                        <GlyphLine expanded={expanded} width="80%" right="0" />
                    </div>
                </div>
                <div className="rune__text-container">
                <div className="rune__text-box">
                        <span className="rune__text">Formación autónoma</span>
                        <div className="rune__logo">
                            <div className="rune__logo-img glyph-image-autonomous"></div>
                            <span className="rune__logo-year">always...</span>
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