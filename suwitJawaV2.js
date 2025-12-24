function getpilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp > 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

const playerGajah = document.querySelector('.gajah');
playerGajah.addEventListener('click', function() {
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = playerGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

});
