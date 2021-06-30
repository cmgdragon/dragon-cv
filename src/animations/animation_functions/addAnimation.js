const addAnimation = animation_prefix => {
    const dragon = document.getElementById("dragon");
    const bodyPieces = dragon.querySelectorAll('[data-name]');
    for (const piece of bodyPieces) {
        const pieceName = piece.getAttribute("data-name").replace('_', '-');
        piece.classList.add(`${animation_prefix}-${pieceName}`);
    }
}

export default addAnimation;