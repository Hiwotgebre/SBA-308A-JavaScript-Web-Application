document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-button').addEventListener('click', searchImages);
});

async function searchImages() {
    const breedId = document.getElementById('search-box').value.trim();
    if (breedId) {
        const images = await fetchImages(breedId);
        displayImages(images);
    } else {
        alert('Please enter a breed ID.');
    }
}


///////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const breeds = await fetchBreeds();
        populateBreedDropdown(breeds);
    } catch (error) {
        console.log('Failed to load breeds:', error);
    }
});

function populateBreedDropdown(breeds) {
    const select = document.getElementById('breed-select');
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        select.appendChild(option);
    });
}

function searchImages() {
    const breedId = document.getElementById('breed-select').value;
    if (!breedId) {
        alert('Please select a breed.');
        return;
    }
    fetchImages(breedId)
        .then(images => {
            if (images.length > 0) {
                displayImages(images);
            } else {
                alert('No images found for the selected breed.');
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            alert('Failed to fetch images.');
        });
}
