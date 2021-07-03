import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonLeg = ({ basePivot, part, topLayer, back }) => {
    return (
    <BodyPiece back={back} image={`${part}/pierna_cadera`} width="160px" layer={topLayer} pivotPos={{top: basePivot.top, left: basePivot.left}} pos={{top: '24%', left: '15%'}}>
        <BodyPiece back={back} image={`${part}/pierna_rodilla`} width="100px" layer="12" pivotPos={{top: '45%', left: '-5%'}} pos={{top: '30%', left: '21%'}}>
            <BodyPiece back={back} image={`${part}/pierna_pie`} width="60px" layer="13" pivotPos={{top: '53%', left: '55%'}} pos={{top: '48%', left: '-29%'}}>
                <BodyPiece back={back} image={`${part}/pierna_dedos`} width="60px" layer="14" pivotPos={{top: '27%', left: '-28%'}} pos={{top: '46%', left: '-29%'}}/>
            </BodyPiece>
        </BodyPiece>
    </BodyPiece>
    )
}

export default DragonLeg;