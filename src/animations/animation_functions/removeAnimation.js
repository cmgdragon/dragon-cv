const removeAnimation = animation_prefix => {
    const dragon = document.getElementById("dragon");
    const bodyPieces = dragon.querySelectorAll('[data-name]');
    for (const piece of bodyPieces) {
        const pieceName = piece.getAttribute("data-name").replace('_', '-');
        piece.classList.remove(`${animation_prefix}-${pieceName}`);
    }
}

export default removeAnimation;