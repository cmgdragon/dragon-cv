import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonNeck = ({ basePivot, part, width, layer, children }) => {
    return (
    <BodyPiece image={`cuello/${part}`} width={width} layer={layer} pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '-19%', left: '4%'}}>
        { children }
    </BodyPiece>

    )
}

export default DragonNeck;