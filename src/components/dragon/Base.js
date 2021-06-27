import React from 'react';
import BodyPart from './BodyPart';

const Base = ({ maxWidth, top, left, scale }) => {

    const style = {
        position: 'absolute',
        width: `${maxWidth}px`,
        weight: `${maxWidth}px`,
        top: `${top}px`,
        left: `${left}px`,
        transform: `scale(${scale}%)`
    }

    return (
        <div id="dragon" style={style}>
            <BodyPart image="cuerpo" id="cuerpo" width="370px" layer="10"
             pivotPos={{top: '5em', left: '25%'}} 
             pos={{top: '37%', left: '31%'}}>


                <BodyPart image="cuello" width="210px" layer="9" pivotPos={{top: '-16%', left: '-20%'}} pos={{top: '-19%', left: '4%'}}>
                    <BodyPart image="head_front" width="160px" layer="10" pivotPos={{top: '-24%', left: '-20%'}} pos={{top: '-36%', left: '-6%'}}>
                        <BodyPart image="head_back" width="160px" layer="8" pivotPos={{top: '17%', left: '-10%'}} pos={{top: '-19%', left: '4%'}}/>
                    </BodyPart>
                </BodyPart>

                <BodyPart image="pierna_frontal/pierna_frontal_cadera" width="140px" layer="11" pivotPos={{top: '5%', left: '69%'}} pos={{top: '24%', left: '15%'}}>
                    <BodyPart image="pierna_frontal/pierna_frontal_rodilla" width="100px" layer="12" pivotPos={{top: '45%', left: '-5%'}} pos={{top: '30%', left: '21%'}}>
                        <BodyPart image="pierna_frontal/pierna_frontal_pie" width="60px" layer="13" pivotPos={{top: '53%', left: '55%'}} pos={{top: '48%', left: '-29%'}}>
                            <BodyPart image="pierna_frontal/pierna_frontal_dedos" width="60px" layer="14" pivotPos={{top: '27%', left: '-28%'}} pos={{top: '46%', left: '-29%'}}/>
                        </BodyPart>
                    </BodyPart>
                </BodyPart>


                <BodyPart image="brazo_frontal/brazo_frontal_hombro" width="150px" layer="11" pivotPos={{top: '-5%', left: '1%'}} pos={{top: '40%', left: '38%'}}>
                    <BodyPart image="brazo_frontal/brazo_frontal_codo" width="130px" layer="12" pivotPos={{top: '20%', left: '-0%'}} pos={{top: '40%', left: '29%'}}>
                        <BodyPart image="brazo_frontal/brazo_frontal_mano" width="50px" layer="13" pivotPos={{top: '71%', left: '-10%'}} pos={{top: '48%', left: '-13%'}}>
                            <BodyPart image="brazo_frontal/brazo_frontal_dedos" width="60px" layer="14" pivotPos={{top: '12%', left: '-28%'}} pos={{top: '46%', left: '-29%'}}/>
                        </BodyPart>
                    </BodyPart>
                </BodyPart>


                <BodyPart image="cola/cola1" width="150px" layer="9" pivotPos={{top: '-3%', left: '67%'}} pos={{top: '29%', left: '33%'}}>
                    <BodyPart image="cola/cola2" width="140px" layer="8" pivotPos={{top: '15%', left: '30%'}} pos={{top: '29%', left: '33%'}}>
                        <BodyPart image="cola/cola3" width="140px" layer="3" pivotPos={{top: '14%', left: '26%'}} pos={{top: '29%', left: '39%'}}/>
                    </BodyPart>
                </BodyPart>






            </BodyPart>
        </div>
    )
}

export default Base;