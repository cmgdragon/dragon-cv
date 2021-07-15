import React, { useEffect, useState } from 'react';
import replaceAnimation from '../../animations/animation_functions/replaceAnimation';
import removeAnimation from '../../animations/animation_functions/removeAnimation';
import SpeechBubble from './SpeechBubble';
import DragonLeg from './body_parts/DragonLeg';
import DragonArm from './body_parts/DragonArm';
import DragonWing from './body_parts/DragonWing';
import DragonTail from './body_parts/DragonTail';
import DragonNeck from './body_parts/DragonNeck';
import DragonHead from './body_parts/DragonHead';
import DragonEyes from './body_parts/DragonEyes';
import DragonBelly from './body_parts/DragonBelly';
import DragonBody from './body_parts/DragonBody';

const DragonBase = ({drag_top, drag_left, pos, setDragging, selectSection,
    selectedSection, initDragonPos, dragonText}) => {

    const [isDragged, setDragged] = useState(false);
    const [dragonPos, setPos] = useState(pos);

    useEffect(() => {
        //console.log(selectedSection);

    }, [selectedSection])

    const releaseDragonIntoSection = () => {
        if (!selectedSection) return;
        const section = selectedSection.id ?? selectedSection;
        switch (section) {
            case 'dragon-home':
                setPos(initDragonPos);
                break;
            case 'projects':
                walkToPosition('65%', '5%', true);
        }
    }

    const walkToPosition = (top, left, forward) => {
        setPos({top: drag_top, left: drag_left});
        const dragon = document.getElementById('dragon');

        if (!forward) dragon.classList.add('reverse');
        dragon.classList.add('transition');
        replaceAnimation('walk');
        setPos({top, left});
        if (!forward) dragon.classList.remove('reverse');
        else dragon.classList.add('reverse');
        setTimeout(() => {
            removeAnimation('walk');
            dragon.classList.remove('transition');
            dragon.classList.add('controllable');
            setPos({
                top: dragon.getBoundingClientRect().top+'px',
                left: getPositionInPixels(left.replace('%', ''))
            })
        }, 1000);

    }

    const getPositionInPixels = percentage => {
        return `${(percentage * window.innerWidth) / 100}px`;
    }

    const grabDragon = () => {
        window.scrollTo(0, 0);
        document.getElementById("speech-bubble").classList.add('hidden');
        document.getElementById('dragon').classList.remove('controllable');
        document.getElementById('dragon').classList.remove('reverse');
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
        document.getElementById("speech-bubble").classList.remove('hidden');
        setDragged(false);
        setDragging(false);
        selectSection();
        releaseDragonIntoSection();
    }

    const style = {
        position: 'absolute',
        top: isDragged ? drag_top: dragonPos.top,
        left: isDragged ? drag_left: dragonPos.left,
        //transform: `scale(.55) translate(${isDragged ? '-250px':0}, ${isDragged ? '-250px':0})`,
        zIndex: 12
    }

    return (
        <div id="dragon" style={style} onMouseDown={grabDragon} onMouseUp={releaseDragon}>
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
            <SpeechBubble text={dragonText}/>
        </div>
    )
}

export default DragonBase;