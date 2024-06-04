import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonArm = ({ basePivot, part, topLayer, back }) => {
    return (

    <BodyPiece back={back} image={`${part}/brazo_hombro`} width="130px" layer={topLayer} pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '40%', left: '38%'}}>
        <BodyPiece back={back} image={`${part}/brazo_codo`} width="140px"  pivotPos={{top: '20%', left: '2%'}} pos={{top: '40%', left: '25%'}}>
            <BodyPiece back={back} image={`${part}/brazo_mano`} width="52px"  pivotPos={{top: '71%', left: '-10%'}} pos={{top: '48%', left: '-13%'}}>
                <BodyPiece back={back} image={`${part}/brazo_dedos`} width="60px"  pivotPos={{top: '13%', left: '-28%'}} pos={{top: '46%', left: '-29%'}}/>
            </BodyPiece>
        </BodyPiece>
    </BodyPiece>

    )
}

export default DragonArm;