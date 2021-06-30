import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonWing = ({ basePivot, part, topLayer }) => {
    return (
    <BodyPiece image={`${part}/ala_espalda`} width="130px" layer={topLayer} pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '-16%', left: '43%'}}>
        <BodyPiece image={`${part}/ala_codo`} width="310px" layer="10" pivotPos={{top: '-112%', left: '-42%'}} pos={{top: '-3%', left: '19%'}}/>
    </BodyPiece>
    )
}

export default DragonWing;