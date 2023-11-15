let currentIndex = 0;
    const items = document.querySelectorAll('.slider-container');
    const totalItems = items.length;

    document.getElementById('btnnext').addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    document.getElementById('btnprev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const newTransformValue = -currentIndex * (items[0].offsetWidth + 10); // 10 is the margin between items
        document.getElementById('carousel-container').style.transform = `translateX(${newTransformValue}px)`;
    }