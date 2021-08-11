import React, { useEffect, useState, useRef } from 'react';
import calcDragonTransform from '../functions/calcDragonTransform';

const HomeSection = ({width='100vw', id, children, expandMobile, setSection}) => {

    const [clipPath, setClipPath] = useState('');
    const [expanded, setExpanded] = useState(false);
    const curtain = useRef(undefined);
    useEffect(() => {
        setClipPath(getclipPath());

        window.addEventListener('resize', () => {
            setTimeout(() => {
                setClipPath(getclipPath());
                calcDragonTransform();
            }, 1000);
        });

        //observe section
        const observer = new MutationObserver(mutations => {
            mutations.forEach(({target}) => {
              if (target.classList.contains('expanded')) {
                setExpanded(true);
              } else {
                  setExpanded(false);
              }
            });
        });
        const config = { attributes: true, childList: false, characterData: true };
        observer.observe(curtain.current, config);
        return () => observer.disconnect();
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
        <div ref={curtain} data-curtain={id} className="section-curtain" onTouchStart={() => expandMobile(id, setSection)}>
            <h1 className="section-title">
                <span>{id}</span>
            </h1>
        </div>
        <section data-section id={id} style={style} className="cave__background">
            <div data-fixed style={background_1} className="cave__background-depth1"></div>
            <div data-fixed className="cave__background-depth2"></div>
            <div data-fixed className="cave__background-depth3"></div>
            <div data-fixed className="cave__background-depth4"></div>
            {React.cloneElement(children, { width, id, expanded })}
        </section>
        </>
    )
}

export default HomeSection;