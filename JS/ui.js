function displayImages(images) {
    console.log(images); //check what the API returns
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = images.map(image => `
    <div class="col-md-4 mb-3">
    <div class="card">
        <img src="${image.url}" class="card-img-top" alt="Cat" onclick="openLightbox('${image.url}')">
    </div>
</div>
    `).join('');

}
  
function openLightbox(src) {
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = src;
    document.getElementById('lightbox-modal').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}
