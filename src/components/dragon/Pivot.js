import React from 'react';

const Pivot = ({ top, left, children }) => {

    const style = {
        position: 'absolute',
        top, left,
        backgroundColor: 'rgba(255, 255, 0, .3)',
        width: '100%',
        height: '100%',
        transform: 'rotate(0deg)'
    }

    return (
        <div style={style} className="pivot-point">
            { children }
        </div>
    )
}

export default Pivot;