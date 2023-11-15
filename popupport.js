function openModal(imagePath, caption) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modal-image');
    var captionContainer = document.querySelector('.caption-container');
    var captionText = document.getElementById('caption');

    modal.style.display = 'flex';
    modalImage.src = imagePath;
    captionText.innerHTML = caption;

    // Show/hide caption container based on caption availability
    if (caption.trim() !== '') {
        captionContainer.style.display = 'block';
    } else {
        captionContainer.style.display = 'none';
    }

    // Adjust the size of the modal image based on the screen dimensions
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var modalWidth = Math.min(screenWidth * 0.8, screenHeight * 0.8 * (modalImage.naturalWidth / modalImage.naturalHeight));
    var modalHeight = modalWidth * (modalImage.naturalHeight / modalImage.naturalWidth);

    modalImage.style.width = modalWidth + 'px';
    modalImage.style.height = modalHeight + 'px';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modal-image');
    var captionContainer = document.querySelector('.caption-container');

    modal.style.display = 'none';

    // Reset the size of the modal image when closing
    modalImage.style.width = '';
    modalImage.style.height = '';

    // Hide the caption container
    captionContainer.style.display = 'none';
}