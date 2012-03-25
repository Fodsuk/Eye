var leftPosition, rightPosition;

$(document).ready(function () {

    Reset();

    leftPosition = getLeftCircleLeft();
    rightPosition = getRightCircleLeft();
    
    $(window).mousewheel(function (event, delta) {

        if (delta == 1) {
            seperateImages();
        }
        else {
            closeImages();
        }

        event.preventDefault();
    });


    $("#imageOption").change(function (i) {
        var value = $(this).val();
        loadImages(images[value]);
        Reset();
    });
});

function loadImages(imageObj) {
    var imagesFolder = "/content/images/";

    $("#ImageLeft,#ImageRight").css({
        width: imageObj.width,
        height: imageObj.height
    });


    $("#ImageLeft").attr("src", imagesFolder + imageObj.left);
    $("#ImageRight").attr("src", imagesFolder + imageObj.right);
    
    
   
}

function seperateImages() {
       
    var leftP = getLeftCircleLeft();

    if (leftPosition - leftP < 400) {

        $("#ImageLeft").css({
            left: "-=10px"
        });

        $("#ImageRight").css({
            left: "+=10px"
        });
    }
}

function closeImages() {

    var leftP = getLeftCircleLeft();
    var rightP = getRightCircleLeft();

    if ((rightP - leftP) > 120) {

        $("#ImageLeft").css({
            left: "+=10px"
        });

        $("#ImageRight").css({
            left: "-=10px"
        });
    }
}


function getLeftCircleLeft() {
    return parseInt($("#ImageLeft").css("left"), 10);
}

function getRightCircleLeft() {
    return parseInt($("#ImageRight").css("left"), 10);
}


function Reset() {
 
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