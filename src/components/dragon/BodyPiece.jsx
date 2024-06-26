import React from 'react';
import Pivot from './Pivot';

const BodyPiece = ({ image, width, layer, pos, pivotPos, back=false, children }) => {

    const id = image.replace('/', '_');
    const dataName = image.includes('/') ? image.substr(image.indexOf("/")+1) : image;
    const style = {
        backgroundImage: `url("./images/dragon_parts/${image}.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        width: width,
        height: width ? width : 'inherit'
    }

    return (

        <Pivot 
         top={pivotPos.top} 
         left={pivotPos.left}
         id={id} 
         dataName={dataName} 
         width={width} 
         layer={layer} 
         back={back}
        >
            <div style={style}>
                { children }
            </div>
        </Pivot>

    )
}

export default BodyPiece;