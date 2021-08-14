const dragonSize = 0.00050;

const calcDragonTransform = (reverse=undefined) => {
    const dragon = document.querySelector('#dragon');

    const isReverse = reverse ?? dragon.classList.contains('reverse') ? true : false;
    const sizeX = isReverse ? -window.outerHeight * dragonSize : window.outerHeight * dragonSize;
    const sizeY = window.outerHeight * dragonSize;
    const translate = isReverse ? '-568px' : '0px';
    dragon.style.transform = `scale(${sizeX}, ${sizeY}) translate(${translate}, 0)`;
    document.getElementById("dragon-home").classList.remove('show');
}

export default calcDragonTransform;