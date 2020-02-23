const loader = {
    show: function () {
        // 1. get reference to dom element
        const $photos = document.querySelector('#photos');
        // 2. create HTMLImageElement
        const $loader = document.createElement('img');
        $loader.classList.add('loader');
        // 3. set "SRC" attribute
        $loader.src = 'images/805.svg';
        // 4. render HTMLImageElement into element from 1
        $photos.append($loader);
    },
    hide() {   //object method shorthand definition
        // 1. get reference to DOM element
        const $photos = document.querySelector('#photos');
        // 2. get reference to container with the loader
        const $loader = $photos.querySelector('.loader')
        // 3. remove the loader
        $loader.remove();
    }
}