import React from 'react';

const Pivot = ({ top, left, id, width, layer='unset', root, children }) => {

    const style = {
        position: 'absolute',
        top: !root ? top : 0,
        left: !root ? left: 0,
        /*backgroundColor: 'rgba(255, 255, 0, .3)',*/
        width: width,
        height: width,
        zIndex: layer === 'unset' ? '' : layer,
        transform: 'rotate(0turn) translate(0px, 0px)'
    }

    return (
        <div style={style} className="pivot-point" id={id}>
            { children }
        </div>
    )
}

export default Pivot;