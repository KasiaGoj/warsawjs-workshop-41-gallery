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

//declaration
function main() {
    console.log('main function works');
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg",
    ];
    renderPhotos(photos);

}

//function invoke
main();