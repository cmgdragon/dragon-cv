import React from 'react';
import DragonLeg from './body_parts/DragonLeg';
import DragonArm from './body_parts/DragonArm';
import DragonWing from './body_parts/DragonWing';
import DragonTail from './body_parts/DragonTail';
import DragonNeck from './body_parts/DragonNeck';
import DragonHead from './body_parts/DragonHead';
import DragonEyes from './body_parts/DragonEyes';
import DragonBelly from './body_parts/DragonBelly';
import DragonBody from './body_parts/DragonBody';

const DragonBase = ({ top, left, scale }) => {

    const style = {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`
    }

    return (
        <div id="dragon" style={style}>
            <DragonBody image="cuerpo/cuerpo_upper"
             basePivot={{top: '8.2em', left: '17%'}}
             width="190px">
                 
                <DragonNeck basePivot={{top: '-8%', left: '-18%'}} part="cuello_bottom" width="150px" layer="1">
                    <DragonNeck basePivot={{top: '-21%', left: '-27%'}} part="cuello_upper" width={"130px"} layer="-1">
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
        </div>
    )
}

export default DragonBase;