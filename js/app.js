document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has loaded');

    const form = document.querySelector('#review-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllButton);
})

const handleFormSubmit = function(e) {
    e.preventDefault();
    
    const gameListItem = createGameListItem(e.target);
    const gameList = document.querySelector('ul');
    gameList.appendChild(gameListItem);
    e.target.reset();
}

const createGameListItem = function(form) {
    const gameListItem = document.createElement('li');
    if(form.genre.value == "Action") {gameListItem.classList.add('action-games-list-item');}
    if(form.genre.value == "Horror") {gameListItem.classList.add('horror-games-list-item');}
    if(form.genre.value == "FPS") {gameListItem.classList.add('fps-games-list-item');}
    if(form.genre.value == "Platform") {gameListItem.classList.add('platform-games-list-item');}
    if(form.genre.value == "Sports") {gameListItem.classList.add('sports-games-list-item');}

    else {
        gameListItem.classList.add('games-list-item');
    }
   
    console.log(form.genre.value);
    
    

    const name = document.createElement('h3');
    name.textContent = form.name.value; 
    gameListItem.appendChild(name);

    const genre = document.createElement('h4');
    genre.textContent = form.genre.value;
    gameListItem.appendChild(genre);

    const players = document.createElement('p');
    isOnePlayer = form.onePlayer.checked ? "1 Player" : ""
    isTwoPlayer = form.twoPlayer.checked ? "2 Players" : ""
    isTwoFourPlayer = form.twoFourPlayer.checked ? "2 to 4 Players" : ""
    isMultiplayer = form.multiplayer.checked ? "Multiplayer" : ""
    
    players.textContent = `${isOnePlayer} ${isTwoPlayer} ${isTwoFourPlayer } ${isMultiplayer}`;
    gameListItem.appendChild(players);

    const rating = document.createElement('p');
        if (form.ratingOneStar.checked){rating.textContent = form.ratingOneStar.value};
        if (form.ratingTwoStar.checked){rating.textContent = form.ratingTwoStar.value};
        if (form.ratingThreeStar.checked){rating.textContent = form.ratingThreeStar.value};
        if (form.ratingFourStar.checked){rating.textContent = form.ratingFourStar.value};
        if (form.ratingFiveStar.checked){rating.textContent = form.ratingFiveStar.value};

        gameListItem.appendChild(rating);
    return gameListItem;
}

const handleDeleteAllButton = function(e) {
    const readingList = document.querySelector('#games-list');
  readingList.innerHTML = '';
}