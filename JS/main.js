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
