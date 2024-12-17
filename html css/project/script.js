document.querySelectorAll('.card').forEach(card => {
    let currentIndex = 0;
    const images = card.querySelectorAll('.guesthouse-img');
    const totalImages = images.length;
    images[currentIndex].style.display = 'block';

    card.querySelector('.next-btn').addEventListener('click', () => {
        images[currentIndex].style.display = 'none'; 
        currentIndex = (currentIndex + 1) % totalImages; 
        images[currentIndex].style.display = 'block'; 
    });

    card.querySelector('.prev-btn').addEventListener('click', () => {
        images[currentIndex].style.display = 'none'; 
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
        images[currentIndex].style.display = 'block'; 
    });
});
