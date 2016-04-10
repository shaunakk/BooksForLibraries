$(document).ready(function() {
    $("#chooseBook").hide()
    var canvas = document.getElementById("picture"),
        context = canvas.getContext("2d"),
        shown = document.getElementById("shown"),
        ctx = shown.getContext("2d"),
        video = document.getElementById("video"),
        accessCamera = {
            "video": true
        },
        error = function(err) {
            console.log("Video capture error: ", err.code);
        };
    if (navigator.getUserMedia) {
        navigator.getUserMedia(accessCamera, function(stream) {
            video.src = stream;
            video.play();
        }, error);
    } else if (navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia(accessCamera, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, error);
    } else if (navigator.mozGetUserMedia) {
        navigator.mozGetUserMedia(accessCamera, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, error);
    }
    $("#choose").click(function() {
        $("#ocrCover").hide();
        $("#chooseBook").show();
        $("#choose").parent().addClass("active");
        $("#ocr").parent().removeClass("active");
    });

    $("#ocr").click(function() {
        $("#ocrCover").show();
        $("#chooseBook").hide();
        $("#ocr").parent().addClass("active");
        $("#choose").parent().removeClass("active");
    })
    $("#snapshot").click(function() {
        ctx.drawImage(video, 0, 0, 512, 384);
        context.drawImage(video, 0, 0, 96, 72);
        imageUrl = canvas.toDataURL("image/jpeg");
        console.log(imageUrl);
        $.ajax({
            method: 'POST',
            url: "http://10.123.139.215:8080?picture=" + imageUrl + "&bname=the+martian",
            dataType: 'jsonp',
            data: JSON.stringify({
                imageData: imageUrl,
            }),
        });
        $("#picture").hide();
    });
});
