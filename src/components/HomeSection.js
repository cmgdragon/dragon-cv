import React, { useEffect, useState } from 'react';

const HomeSection = ({width='100vw', id, children}) => {

    const [clipPath, setClipPath] = useState('');
    useEffect(() => {
        setClipPath(getclipPath());
    }, []);

    const getclipPath = () => {
        if (!document.querySelector(`[data-curtain=${id}]`)) return;
        const positions = document.querySelector(`[data-curtain=${id}]`).getBoundingClientRect();
        return (
            `${positions.left}px ${positions.top}px, ` +
            `${positions.right}px ${positions.top}px, ` +
            `${positions.right}px ${positions.bottom}px, ` +
            `${positions.left}px ${positions.bottom}px`
        )
    }
    
    const style = {
        clipPath: `polygon(${clipPath})`,
        width: width
    }

    const background_1 = { width }

    return (
        <>
        <div data-curtain={id} className="section-curtain">
            <h1 className="section-title">
                <span>{id}</span>
            </h1>
        </div>
        <section data-section id={id} style={style} className="cave__background">
            <div style={background_1} className="cave__background-depth1"></div>
            <div data-fixed className="cave__background-depth2"></div>
            <div data-fixed className="cave__background-depth3"></div>
            <div data-fixed className="cave__background-depth4"></div>
            {React.cloneElement(children, { width, id })}
        </section>
        </>
    )
}

export default HomeSection;