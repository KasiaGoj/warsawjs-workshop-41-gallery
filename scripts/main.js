//declaration
function main() {
    console.log('main function works');
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg",
    ];
    console.log(photos);
    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        console.log('photo', i, photo);
        //create the html image element
        const $photo = document.createElement('img');
        $photo.src = photo;
        //render process
        const $photos = document.querySelector('#photos');
        $photos.append($photo);
        //longer version of the above line would be: $photo.setAttribute('src', photo);

    }
}

//function invoke
main();