const dragonSize = 0.00050;

const calcDragonTransform = (reverse=undefined) => {
    const isReverse = reverse ?? document.querySelector('#dragon')?.classList.contains('reverse') ? true : false;
    const sizeX = isReverse ? -window.outerHeight * dragonSize : window.outerHeight * dragonSize;
    const sizeY = window.outerHeight * dragonSize;
    const translate = isReverse ? '-568px' : '0px';
    const dragon = document.querySelector('#dragon');
    dragon.style.transform = `scale(${sizeX}, ${sizeY}) translate(${translate}, 0)`;
    document.getElementById("dragon-home").classList.remove('show');
}

export default calcDragonTransform;