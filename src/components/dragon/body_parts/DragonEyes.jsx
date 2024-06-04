import React from 'react';
import BodyPiece from '../BodyPiece';

const DragonEyes = ({ basePivot }) => {
    const eyesBox = {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '50%',
        top: basePivot.top,
        left: basePivot.left,
        width: '20px',
        height: '20px'
    }
    const eye_iris = {
        position: 'absolute',
        backgroundColor: 'rgb(237, 237, 0)',
        borderRadius: 'inherit',
        top: '4px',
        left: '5px',
        width: '10px',
        height: '10px'
    }
    const eye_pupil = {
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 'inherit',
        top: '1px',
        left: '3px',
        width: '3px',
        height: '8px'
    }
    const upper_eyelash = {
        position: 'absolute',
        backgroundColor: 'rgb(255, 29, 29)',
        borderRadius: '20%',
        top: '-3px',
        left: '1px',
        width: '20px',
        height: '8px',
        transform: 'rotate(-5deg)',
        zIndex: 1
    }
    const lower_eyelash = {
        position: 'absolute',
        backgroundColor: 'rgb(255, 29, 29)',
        borderRadius: '40%',
        top: '14px',
        left: '1px',
        width: '20px',
        height: '8px',
        transform: 'rotate(-5deg)',
        zIndex: 1
    }
    return (
        <div style={eyesBox}>
            <div style={upper_eyelash}></div>
            <div style={eye_iris}>
                <div style={eye_pupil}></div>
            </div>
            <div style={lower_eyelash}></div>
        </div>
    )
}

export default DragonEyes;