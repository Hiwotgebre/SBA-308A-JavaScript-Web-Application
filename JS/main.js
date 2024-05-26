function populateBreedDropdown(breeds) {
    const select = document.getElementById('breed-select');
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name; // Show the breed name in the dropdown
        select.appendChild(option);
    });
}


function toggleFavorite(index, imageUrl) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some(fav => fav.url === imageUrl)) {
        favorites = favorites.filter(fav => fav.url !== imageUrl);
    } else {
        favorites.push({index, url: imageUrl});
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesUI();
}

function updateFavoritesUI() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const galleryCards = document.querySelectorAll('#gallery .card');
    galleryCards.forEach(card => {
        const imageUrl = card.querySelector('img').src;
        const button = card.querySelector('button');
        if (favorites.some(fav => fav.url === imageUrl)) {
            button.textContent = 'Unfavorite';
            button.classList.add('btn-danger');
            button.classList.remove('btn-primary');
        } else {
            button.textContent = 'Favorite';
            button.classList.remove('btn-danger');
            button.classList.add('btn-primary');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchBreeds().then(populateBreedDropdown);
});


function searchImages() {
    const breedId = document.getElementById('breed-select').value;
    if (breedId) {
        fetchBreeds(breedId).then(displayImages);
    } else {
        alert('Please select a breed to search.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', searchImages);
});



