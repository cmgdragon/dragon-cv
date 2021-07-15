import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonBody = ({ basePivot, width, isDragged, children }) => {
    return (
    <div style={{transform: `translate(${isDragged ? '-250px':0}, ${isDragged ? '-250px':0})`}}>
        <BodyPiece image="cuerpo/cuerpo_upper" width={width} layer="1"
        pivotPos={{top: basePivot.top, left: basePivot.left}}
        pos={{top: '37%', left: '31%'}}>
            { children }
        </BodyPiece>
    </div>
    )
}

export default DragonBody;