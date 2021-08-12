import React, { useEffect } from 'react';
import addAnimation from '../animations/animation_functions/addAnimation';
import { hideBubble } from './speech_bubble/hideBubble';

const MenuMobile = ({id, dragonText, selectedSection, selectedElement, children}) => {

    useEffect(() => {
        document.querySelector('.menu-mobile__dragon').addEventListener('click', () => {
            addAnimation('sit');
            
            document.querySelector('.menu-mobile__dragon-bubble').classList.remove('show');
            document.getElementById("dragon-home").classList.toggle('show');
            document.querySelector('.menu-mobile__dragon-head').classList.toggle('show');
            document.getElementById("dragon").classList.add('reverse');
            document.getElementById('speech-bubble').classList.add('top');

                hideBubble();

        });
    }, []);

    useEffect(() => {
        document.querySelector('.menu-mobile__dragon-bubble').classList.add('show');
    }, [dragonText]);

    useEffect(() => {
        if (selectedSection !== 'dragon-home') {
            document.querySelector('.menu-mobile__back').classList.add('show');
        } else {
            document.querySelector('.menu-mobile__back').classList.remove('show');
        }
    }, [selectedSection]);

    useEffect(() => {
        console.log(selectedElement)
    }, [selectedElement]);

    return (
        <div id={id}>
            { children }
        </div>
    )
}

export default MenuMobile;