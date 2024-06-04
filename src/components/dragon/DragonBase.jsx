import React, { useEffect, useState } from 'react';
import replaceAnimation from '../../animations/animation_functions/replaceAnimation';
import removeAnimation from '../../animations/animation_functions/removeAnimation';
import SpeechBubble from '../speech_bubble/SpeechBubble';
import DragonLeg from './body_parts/DragonLeg';
import DragonArm from './body_parts/DragonArm';
import DragonWing from './body_parts/DragonWing';
import DragonTail from './body_parts/DragonTail';
import DragonNeck from './body_parts/DragonNeck';
import DragonHead from './body_parts/DragonHead';
import DragonEyes from './body_parts/DragonEyes';
import DragonBelly from './body_parts/DragonBelly';
import DragonBody from './body_parts/DragonBody';
import calcDragonTransform from '../../functions/calcDragonTransform';
import * as mobileInteractions from '../../translations/MobileInteractions.json';
import * as sectionsText from '../../translations/Sections.json';
import * as dragonGuide from '../../translations/DragonGuide.json';
import { showBubble } from '../speech_bubble/ShowBubble';

const DragonBase = ({drag_top, drag_left, pos, setDragging, selectSection,
    selectedSection, setDragonText, initDragonPos, dragonText, lang}) => {

    const [isDragged, setDragged] = useState(false);
    const [dragonPos, setPos] = useState(pos);

    useEffect(() => {
        calcDragonTransform();
        if (!isDragged) {
            releaseDragonIntoSection();
        }
    }, [selectedSection])

    const releaseDragonIntoSection = () => {
        if (!selectedSection) return;

        removeAnimation('sit');
        const bubble = document.getElementById('speech-bubble');
        const section = selectedSection.id ?? selectedSection;

        switch (section) {
            case 'dragon-home':
                setPos(initDragonPos);
                bubble.classList.remove('top');
                setTimeout(() => {
                    showBubble(sectionsText.dragon_home, setDragonText);
                }, 200);
                break;
            case 'projects':
                walkToProjectPosition('65%', '35%');
                bubble.classList.remove('top');
                break;
            case 'about':
                walkToPosition('51%', '3%', true, false);
                bubble.classList.add('top');
                break;
            case 'experience':
                walkToPosition('51%', '3%', true, false);
                bubble.classList.add('top');
                break;
            case 'education':
                walkToPosition('51%', '80%', false, true);
                bubble.classList.add('top');
                break;
            case 'contact':
                walkToPosition('51%', '75%', false, true);
                bubble.classList.add('top');
        }
    }

    const walkToProjectPosition = (top, left) => {

        setPos({top: drag_top, left: drag_left});
        const dragon = document.getElementById('dragon');

        dragon.classList.add('reverse', 'transition');
        calcDragonTransform();

        replaceAnimation('walk');
        setPos({top, left});

        setTimeout(() => {
            removeAnimation('walk');
            dragon.classList.remove('transition');
            dragon.classList.add('controllable');
        }, 1000);
            
    }

    const walkToPosition = (top, left, forward, sit) => {
        const dragon = document.getElementById('dragon');

        dragon.classList.add('transition', 'fast');
        
        setPos({top, left: `${forward ? '-40vh' : '105vw'}`});
        
        setTimeout(() => {
            replaceAnimation('walk');
            dragon.classList.remove('fast');
            
            if (!forward) dragon.classList.remove('reverse');
            else dragon.classList.add('reverse');

            calcDragonTransform();

            setPos({top, left});

            setTimeout(() => {
                removeAnimation('walk');
                dragon.classList.remove('transition');
                dragon.classList.add('controllable');
                if (sit) replaceAnimation('sit');

            }, 1000);
            
        }, 400);


    }

    const grabDragon = () => {
        if (document.getElementById("dragon-home").classList.contains('show')) return;

        removeAnimation('sit');
        const dragon = document.getElementById('dragon');
        calcDragonTransform(true);
        document.querySelector('.dragon__guide').classList.remove('show');
        document.getElementById("speech-bubble").classList.add('hidden');
        dragon.classList.remove('controllable');
        dragon.classList.remove('reverse');
        document.querySelectorAll('[data-curtain]').forEach(el => {
            if (el.classList.contains('expanded')) {
                el.nextElementSibling.classList.add('unexpand');
            }
            el.classList.remove('expand');
            el.classList.remove('expanded');
            el.nextElementSibling.classList.remove('expanded');
            setTimeout(() => {                
                el.nextElementSibling.classList.remove('unexpand');
            }, 100);
        });
        setDragged(true);
        setDragging(true);
    }

    const releaseDragon = () => {
        if (document.getElementById("dragon-home").classList.contains('show')) return;
        document.getElementById("speech-bubble").classList.remove('hidden');
        setDragged(false);
        setDragging(false);
        selectSection();
        releaseDragonIntoSection();
    }

    const mobileInteracion = event => {
        if (document.getElementById('speech-bubble').classList.contains('show') ||
            !document.getElementById("dragon-home").classList.contains('show')) return;
        event.stopPropagation();
        showBubble(mobileInteractions, setDragonText);
    }

    const style = {
        top: isDragged ? drag_top: dragonPos.top,
        left: isDragged ? drag_left: dragonPos.left
    }

    return (
        <div id="dragon" style={style} onMouseDown={grabDragon} onMouseUp={releaseDragon}>
            <div className="dragon__guide">{dragonGuide.inSection[lang]}</div>
            <DragonBody image="cuerpo/cuerpo_upper"
             basePivot={{top: '8.2em', left: '17%'}}
             width="190px" isDragged={isDragged}>
                 
                <DragonNeck basePivot={{top: '-8%', left: '-18%'}} part="cuello_bottom" width="150px" layer="1">
                    <DragonNeck basePivot={{top: '-21%', left: '-27%'}} part="cuello_upper" width={"127px"} layer="-1">
                        <DragonHead basePivot={{top: '-44%', left: '-31%'}}>
                            <DragonEyes basePivot={{top: '50%', left: '38%'}} />
                        </DragonHead>
                    </DragonNeck>
                </DragonNeck>

                <DragonWing basePivot={{top: '-6%', left: '2%'}} part="ala_frontal" topLayer="1" />
                <DragonWing back basePivot={{top: '-1%', left: '-9%'}} part="ala_trasera" topLayer="-1" />

                <DragonArm basePivot={{top: '-5%', left: '1%'}} part="brazo_frontal" topLayer="11" />
                <DragonArm back basePivot={{top: '-7%', left: '-11%'}} part="brazo_trasero" topLayer="-1" />

                <DragonBelly basePivot={{top: '-48.5%', left: '1%'}} width="280px">
                    <DragonLeg basePivot={{top: '2%', left: '59%'}} part="pierna_frontal" topLayer="11" />
                    <DragonLeg back basePivot={{top: '0%', left: '48%'}} part="pierna_trasera" topLayer="-1" />

                    <DragonTail basePivot={{top: '-8%', left: '59%'}} />
                </DragonBelly>

            </DragonBody>
            <div className="dragon_mobile" onClick={mobileInteracion}>
                <div className="dragon_mobile__image"></div>
            </div>
            <SpeechBubble text={dragonText} lang={lang} />
        </div>
    )
}

export default DragonBase;