import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonHead = ({ basePivot, children }) => {
    return (
    <BodyPiece image="head_back" width="160px" layer="8" pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '-26%', left: '-6%'}}>
        <BodyPiece image="head_front" width="160px" layer="9" pivotPos={{top: '21%', left: '1%'}} pos={{top: '-19%', left: '4%'}}/>
        { children }
    </BodyPiece>
    )
}

export default DragonHead;