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
//declaration
function main() {
    displayCurrentTime ();
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
    }, 2000);
    //po 2 sekundach gallery shows
}

//function invoke
main();