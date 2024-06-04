import React from 'react';

const Pivot = ({ top, left, id, dataName, width, layer='unset', back, children }) => {

    const style = {
        position: 'absolute',
        top, left,
        /*backgroundColor: 'rgba(255, 255, 0, .3)',*/
        width: width,
        height: width,
        zIndex: layer === 'unset' ? '' : layer,
        transform: 'rotate(0deg) translate(0px, 0px)'
    }

    return (
        <div style={style} className={`pivot-point ${back ? 'back' : ''}`} id={id} data-name={dataName}>
            { children }
        </div>
    )
}

export default Pivot;