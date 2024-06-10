document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-container');
    const visibleProducts = 3; // Number of products to show at a time

    sliders.forEach((sliderContainer) => {
        const slider = sliderContainer.querySelector('.slider');
        const products = slider.querySelectorAll('.shop-product');
        const totalProducts = products.length;
        let currentIndex = 0;

        function updateSliderPosition() {
            const sliderWidth = sliderContainer.clientWidth / visibleProducts;
            slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalProducts;
            updateSliderPosition();
        }

        // Change slide every 2 seconds
        setInterval(nextSlide, 2000);

        // Update slider position on window resize
        window.addEventListener('resize', updateSliderPosition);

        // Clone the first few elements to create an infinite loop effect
        for (let i = 0; i < visibleProducts; i++) {
            const clone = products[i].cloneNode(true);
            slider.appendChild(clone);
        }
    });

    // Pagination buttons
    const prevButtons = document.querySelectorAll('#prevBtn');
    const nextButtons = document.querySelectorAll('#nextBtn');

    prevButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const sliderContainer = sliders[index];
            const slider = sliderContainer.querySelector('.slider');
            const products = slider.querySelectorAll('.shop-product');
            const totalProducts = products.length;
            currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
            updateSliderPosition();
        });
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const sliderContainer = sliders[index];
            const slider = sliderContainer.querySelector('.slider');
            const products = slider.querySelectorAll('.shop-product');
            const totalProducts = products.length;
            currentIndex = (currentIndex + 1) % totalProducts;
            updateSliderPosition();
        });
    });
});
