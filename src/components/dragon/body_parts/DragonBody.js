import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonBody = ({ basePivot, width, children }) => {
    return (
    <BodyPiece image="cuerpo/cuerpo_upper" width={width} layer="1" pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '37%', left: '31%'}}>
        { children }
    </BodyPiece>

    )
}

export default DragonBody;