function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = images.map(image => `
        <div class="col-4 mb-4">
            <div class="card">
                <img src="${image.url}" class="card-img-top" alt="Animal">
            </div>
        </div>
    `).join('');
}
