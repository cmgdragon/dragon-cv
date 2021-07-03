import React from 'react';
import addAnimation from './animations/animation_functions/addAnimation';
import DragonBase from './components/dragon/DragonBase';

const App = () => {
    return (
        <>
        <DragonBase top={0} left={60} />
        <button onClick={() => addAnimation('walk')}>Add animation</button>
        </>
    )
}

export default App;