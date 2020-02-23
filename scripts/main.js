function renderPhoto (photo){

    console.log('photo', photo);
    //create the html image element
    const $photo = document.createElement('img');
    $photo.src = photo;
    //render process
    const $photos = document.querySelector('#photos');
    $photos.append($photo);
}

function renderPhotos (photos){
   // for (let i = 0; i < photos.length; i++) {
     //   const photo = photos[i];
       // renderPhoto(photo);
        //longer version of the above line would be: $photo.setAttribute('src', photo);

    //}
    photos.forEach(function(photo){
        renderPhoto(photo);

    });
}

function displayMessage (message) {
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

function displayEmptyGalleryMessage (){
    displayMessage("Gallery is empty. No pictures. Sorry");   
}

//declaration
function main() {
    console.log('main function works');
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg",
    ];
    const isGalleryEmpty = (photos.length === 0);
    if (isGalleryEmpty) {
        displayEmptyGalleryMessage();  
    }
    else {
          renderPhotos(photos);
    }

}

//function invoke
main();