import React from 'react';
import Pivot from './Pivot';

const BodyPart = ({ image, width, layer, pos, pivotPos, root=false, children }) => {

    const id = image.substr(image.indexOf('/')+1).replace("/", '_');
    const style = {
        backgroundImage: `url("http://127.0.0.1:8081/dragon_parts/${image}.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        height: 'inherit',
        width: width,
        height: width,
        zIndex: layer
    }

    return (
        <Pivot top={pivotPos.top} left={pivotPos.left} id={id} width={width} layer={layer} root={root}>
            <div style={style}>
                { children }
            </div>
        </Pivot>
    )
}

export default BodyPart;