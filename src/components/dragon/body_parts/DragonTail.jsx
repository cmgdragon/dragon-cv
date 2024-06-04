import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonTail = ({ basePivot }) => {
    return (
        <BodyPiece image="cola/cola1" width="150px" layer="9" pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '29%', left: '33%'}}>
            <BodyPiece image="cola/cola2" width="120px" layer="-2" pivotPos={{top: '28%', left: '35%'}} pos={{top: '29%', left: '33%'}}>
                <BodyPiece image="cola/cola3" width="105px" layer="-1" pivotPos={{top: '22%', left: '30%'}} pos={{top: '29%', left: '39%'}}/>
            </BodyPiece>
        </BodyPiece>
    )
}

export default DragonTail;