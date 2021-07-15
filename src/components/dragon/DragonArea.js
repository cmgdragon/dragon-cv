import React from 'react';
import DragonBase from './DragonBase';

const DragonArea = ({drag_top, drag_left, pos}) => {

    /*const style = {
        position: 'relative'
    }*/

    return (
        <div>
            <DragonBase drag_top={drag_top} drag_left={drag_left} pos={pos} />
        </div>
    )
}

export default DragonArea;