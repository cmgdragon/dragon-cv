import React, { Children } from 'react';
import Pivot from './Pivot';

const BodyPart = ({ image, width, layer, pos, pivotPos, children }) => {

    const style = {
        backgroundImage: `url("http://127.0.0.1:8081/dragon_parts/${image}.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: 'absolute',
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        height: 'inherit',
        maxWidth: width,
        maxHeight: width,
        width: '100%',
        height: '100%',
        zIndex: layer
    }

    return (
        <Pivot top={pivotPos.top} left={pivotPos.left}>
            <div style={style}>
                { children }
            </div>
        </Pivot>
    )
}

export default BodyPart;