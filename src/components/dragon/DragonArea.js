import React from 'react';
import DragonBase from './DragonBase';

const DragonArea = () => {

    const style = {
        position: 'relative'
    }

    return (
        <div style={style}>
            <DragonBase top={0} left={60} />
        </div>
    )
}

export default DragonArea;