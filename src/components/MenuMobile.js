import React, { useEffect } from 'react';
import addAnimation from '../animations/animation_functions/addAnimation';

const MenuMobile = ({id, dragonText, selectedSection, children}) => {

    useEffect(() => {
        document.querySelector('.menu-mobile__dragon').addEventListener('click', () => {
            addAnimation('sit');
            checkBubble();
            
            document.getElementById("dragon-home").classList.toggle('show');

            checkMenuDragonBubbleIndicator();

            document.querySelector('.menu-mobile__dragon-head').classList.toggle('show');
            document.getElementById('speech-bubble').classList.add('top');

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

    const checkBubble = () => {
        if (document.querySelector('.menu-mobile__dragon-bubble').classList.contains('show')) {
            document.getElementById('speech-bubble').classList.add('show');
        } else {
            document.getElementById('speech-bubble').classList.remove('show');
        }
    }

    const checkMenuDragonBubbleIndicator = () => {
        if (!document.getElementById("dragon-home").classList.contains('show')) {
            document.querySelector('.menu-mobile__dragon-bubble').classList.remove('show');
        }
    }

    return (
        <div id={id}>
            { children }
        </div>
    )
}

export default MenuMobile;