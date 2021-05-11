function imageSwitch(imageNumber) {
    var imageName = "images/brian-landon-after.png";
    switch (imageNumber) {
        case 1:
            imageName = "images/brian-landon-after.png";
            break;
        case 2:
            imageName = "images/kids-after.PNG";
            break;
        case 3:
            imageName = "images/family-after.JPG";
            break;
        case 4: 
            imageName = "images/piper-after.jpg";
            break;
        case 5:
            imageName = "images/chessboard-after.jpg";
            break;
    }

    document.getElementById("large-image").src = imageName;
}
