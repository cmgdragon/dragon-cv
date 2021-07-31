import React from 'react';

const Education = () => {

    return (
        <div className="cv-section education-section">
            <div className="glyph">
                <GlyphLine width="50%" />
                <GlyphLine height="50%" sHeight="calc(100% - 10px)" sBottom="0" />
                <GlyphLine height="100%" left="calc(50% - 10px)" sHeight="calc(100% - 10px)" sBottom="0" />
                <GlyphLine width="100%" top="50%" />
            </div>

            <div className="glyph">
                <GlyphLine height="100%" left="calc(80% - 10px)" />
                <GlyphLine width="45%" right="20%" sWidth="calc(100% - 10px)" sLeft="0" />
                <GlyphLine width="70%" right="20%" top="50%" sWidth="calc(100% - 10px)" sLeft="0" />
                <GlyphLine width="40%" right="20%" top="calc(100% - 10px)" sWidth="calc(100% - 10px)" sLeft="0" />
            </div>

            <div className="glyph">
                <GlyphLine height="100%" right="0" sHeight="calc(100% - 20px)" sBottom="10px" />
                <GlyphLine height="100%" right="40%" sHeight="calc(100% - 20px)" sBottom="10px" />
                <GlyphLine width="80%" bottom="0" right="0" />
                <GlyphLine width="80%" right="0" />
            </div>
        </div>
    )
}

const GlyphLine = ({top, left, right, bottom, height='10px', width='10px', 
    sTop, sLeft, sRight, sBottom, sWidth="100%", sHeight="100%"}) => {

    const style = {
        top, left, right, bottom,
        height,
        width
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