function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = 50;
    element.style.display = 'block';  // Ensure the element is displayed

    const increment = 50 / duration; // Controls the speed of the fade-in

    function increase() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            requestAnimationFrame(increase);
        }
    }

    increase();
}

document.addEventListener('DOMContentLoaded', function() {
    //The food truck icon
    const heroImage = document.querySelector('.the-good-life');
    fadeIn(heroImage, 10000); // Fades in over 2 seconds (10,000 milliseconds)

    const favorites = document.querySelector('.favorites');
    fadeIn(favorites, 50000); // Fades in over 2 seconds (50,000 milliseconds)

    const location = document.querySelector('#location');
    fadeIn(location, 55000); // Fades in over 2 seconds (55,000 milliseconds)

    const menu = document.querySelector('.menu');
    fadeIn(menu, 56000); // Fades in over 2 seconds (56,00 milliseconds)

});

