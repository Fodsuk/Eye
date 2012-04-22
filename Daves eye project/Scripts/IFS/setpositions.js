$(document).ready(function () {
    reset();
    configControls();
    loadPositions();
});

function changeImage(imageObj) {
    var imagesFolder = "/content/images/";

    $("#ImageLeft,#ImageRight").css({
        width: imageObj.width,
        height: imageObj.height
    });

    $("#ImageLeft").attr("src", imagesFolder + imageObj.left);
    $("#ImageRight").attr("src", imagesFolder + imageObj.right);
}

function reset() {
 
    $("#ImageLeft").position({
        my: "center center",
        at: "center center",
        of: window,
        offset: "-130 0"
    });
    
    $("#ImageRight").position({
        my: "center",
        at: "center",
        of: window,
        offset: "130 0"
    });
}

function loadPositions() {

    var totalWidth = window.width;
    console.log(window.innerWidth);
}


function configControls() {

    //change image
    $("#imageOption").change(function (i) {
        var value = $(this).val();
        changeImage(images[value]);
        reset();
    });

}