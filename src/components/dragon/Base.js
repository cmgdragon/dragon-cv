import React from 'react';
import BodyPart from './BodyPart';

const Base = ({maxWidth}) => {

    const style = {
        position: 'absolute',
        width: `${maxWidth}px`,
        weight: `${maxWidth}px`,

    }

    return (
        <div id="dragon" style={style}>
            <BodyPart image="cuerpo" id="cuerpo" width="300px" layer="100"
             pivotPos={{top: '0%', left: '25%'}} 
             pos={{top: '37%', left: '31%'}}>


                <BodyPart image="pierna_frontal/pierna_frontal_cadera" width="120px" layer="2" pivotPos={{top: '9%', left: '65%'}} pos={{top: '24%', left: '15%'}}>
                    <BodyPart image="pierna_frontal/pierna_frontal_rodilla" width="100px" layer="3" pivotPos={{top: '23%', left: '-25%'}} pos={{top: '43%', left: '39%'}} />
                </BodyPart>

            </BodyPart>
            <BodyPart image="cola/cola1" width="150px" layer="1" pivotPos={{top: '6em', left: '95%'}} pos={{top: '29%', left: '33%'}}></BodyPart>
        </div>
    )
}

export default Base;