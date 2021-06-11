function swap(image) {
    var featuredImage = document.getElementById("featured__image");
    var featuredCaption = document.getElementById("featured__caption");
    featuredImage.src = image.src;
    featuredImage.alt = image.alt;
    featuredCaption.innerHTML = image.alt;
}