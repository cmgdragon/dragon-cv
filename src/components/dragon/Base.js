import React from 'react';
import BodyPart from './BodyPart';

const Base = () => {
    const style = {
        position: 'absolute',
        maxWidth: '600px',
        maxHeight: '600px',
        width: '100%',
        height: '100%'
    }
    return (
        <div id="dragon" style={style}>
            <BodyPart image="cuerpo" width="300px" layer="1" pivotPos={{top: '0%', left: '25%'}} pos={{top: '42%', left: '40%'}}>
                <BodyPart image="pierna_frontal/pierna_frontal_cadera" width="100px" layer="2" pivotPos={{top: '-19%', left: '33%'}} pos={{top: '43%', left: '39%'}}>
                    <BodyPart image="pierna_frontal/pierna_frontal_rodilla" width="100px" layer="3" pivotPos={{top: '23%', left: '-25%'}} pos={{top: '43%', left: '39%'}} />
                </BodyPart>
            </BodyPart>
        </div>
    )
}

export default Base;