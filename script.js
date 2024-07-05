function loadGame(gameName) {
    const gameContainer = document.getElementById('game-container');
    const creditsContainer = document.getElementById('credits-container');
    
    let gameEmbedCode = '';

    switch (gameName) {
        case 'bob-the-robber':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber/" frameborder="0" scrolling="no" width="640" height="555" allowfullscreen></iframe>';
            break;
        case 'bob-the-robber-2':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber-2/" frameborder="0" scrolling="no" width="640" height="555" allowfullscreen></iframe>';
            break;
        case 'bob-the-robber-3':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber-3/" frameborder="0" scrolling="no" width="800" height="635" allowfullscreen></iframe>';
            break;
        case 'bob-the-robber-4-s1':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber-4/" frameborder="0" scrolling="no" width="800" height="635" allowfullscreen></iframe>';
            break;
        case 'bob-the-robber-4-s2':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber-4-russia/" frameborder="0" scrolling="no" width="800" height="635" allowfullscreen></iframe>';
            break;
        case 'bob-the-robber-4-s3':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber-4-japan/" frameborder="0" scrolling="no" width="800" height="635" allowfullscreen></iframe>';
            break;
        case 'bob-the-robber-5':
            gameEmbedCode = '<iframe src="https://www.gameflare.com/embed/bob-the-robber-5-temple-adventure/" frameborder="0" scrolling="no" width="765" height="545" allowfullscreen></iframe>';
            break;
        case 'papas-hot-doggeria':
            gameEmbedCode = '<iframe src="https://www.crazygames.com/embed/papas-hotdoggeria" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>';
            break;
        default:
            gameEmbedCode = '';
    }

    gameContainer.innerHTML = gameEmbedCode;
    gameContainer.style.display = 'flex';
    creditsContainer.style.display = 'none';
}

function showCredits() {
    const gameContainer = document.getElementById('game-container');
    const creditsContainer = document.getElementById('credits-container');
    
    gameContainer.style.display = 'none';
    creditsContainer.style.display = 'block';
}
