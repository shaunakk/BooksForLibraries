$(document).ready(function() {
    $("#chooseBook").hide()
    var canvas = document.getElementById("picture"),
        context = canvas.getContext("2d"),
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
        context.drawImage(video, 0, 0, 512, 384);
        imageUrl = canvas.toDataURL("image/jpeg");
        $.ajax({
            method: 'GET',
            url: "https://api.havenondemand.com/1/api/sync/ocrdocument/v1?apikey=5af0e6ba-d355-4197-b39f-308af0ab014e&url=https://feministfairytales.files.wordpress.com/2015/06/the-martian.jpg&mode=scene_photo",
            success: function(data) {
                var book = data.text_block[0].text
                book = book.trim().replace(/ /g, "+");
                book = book.replace("ANDY+EIR", "");
                book = book.toLowerCase();
                $.ajax({
                    method: "GET",
                    url: "http://192.168.1.143:8080?bname=" + book,
                    success: function(data) {
                        console.log(data);
                    }
                });
            }
        });
    });
});
