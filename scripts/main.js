function renderPhoto(photo) {

    console.log('photo', photo);
    //create the html image element
    const $photo = document.createElement('img');
    $photo.src = photo.url;
    //render process
    const $photos = document.querySelector('#photos');
    $photos.append($photo);
}

function renderPhotos(photos) {
    // for (let i = 0; i < photos.length; i++) {
    //   const photo = photos[i];
    // renderPhoto(photo);
    //longer version of the above line would be: $photo.setAttribute('src', photo);

    //}
    photos.forEach(function (photo) {
        try {
            renderPhoto(photo);
        }
        catch {
            renderPhoto({ url: 'https://placehold.co/200x300' });
        }

    });
}

function displayMessage(message) {
    const $photos = document.querySelector('#photos');
    const $message = document.createElement('div');
    $message.classList.add('message');

    // const $header =document.createElement('div');
    // $header.classList.add('message-header');
    // $header.textContent = 'Message to the user';

    // const $body = document.createElement('div');
    // $body.classList.add('message-body');
    // $body.textContent = "Gallery is empty because we don't have any photos";

    // $message.append($header);
    // $message.append($body);
    // $photos.append($message);

    $photos.append($message);
    $message.innerHTML = `
        <div class="message-header">
        Message
        </div>
        <div class="message-body">
            ${message}
        </div>
        `;

}

function displayEmptyGalleryMessage() {
    displayMessage("Gallery is empty. No pictures. Sorry");
}

function displayCurrentTime() {
    setInterval(function () {
        // 1. get reference to DOM
        const $clock = document.querySelector('#current-time');
        // 2. get current time from date object
        const date = new Date();
        const currentDate = date.toLocaleTimeString('pl');
        // 3. Render time into DOM element
        $clock.textContent = currentDate;
    }, 1000);
}

// Math random () => from 0 to 1
// Math random () *4 = from 0 to 4
// Math random () *4 +2 = from 2 to 6

function randomInteger(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function displayRandomPhoto(photos) {

    // 1. reference to DOM element
    const $container = document.querySelector('#random-photo')
    // 2. generate random number
    const number = randomInteger(0, 2);
    // 3. get the photo from photos collection
    const randomPhoto = photos[number];
    // 4. render photo
    const $randomPhoto = document.createElement('img');
    $randomPhoto.src = randomPhoto.url;
    $container.append($randomPhoto);
}

//declaration
function main() {
    displayCurrentTime();
    loader.show();

    setTimeout(function () {
        const photos = [
            { url: "https://i.picsum.photos/id/1036/200/300.jpg" },
            { url: "https://i.picsum.photos/id/1035/200/300.jpg" },
            { url: "https://i.picsum.photos/id/1033/200/300.jpg" },
            null
        ];
        const isGalleryEmpty = (photos.length === 0);

        loader.hide();

        if (isGalleryEmpty) {
            displayEmptyGalleryMessage();
        }
        else {
            renderPhotos(photos);
        }
        displayRandomPhoto(photos)
    }, 1000);
    //po 2 sekundach (2000) gallery shows

    window.addEventListener('hashchange', function(){
        console.log('hash is changed', location.hash);

        const $photos = document.querySelector('#photos')
        const $randomPhoto = document.querySelector('#random-photo')
        if (location.hash.length === 0 ){
            //console.warn('hash is empty');
            // 1. Hide random photo container
            $randomPhoto.style.display = 'none';
            // 2. Show gallery container
            $photos.style.display = 'block';
        }
        if (location.hash === '#random'){
            // 1. Show random photo container
            $randomPhoto.style.display = 'block';
            // 2. Hide gallery container
            $photos.style.display = 'none';
            
        }

    });
}

//function invoke
main();