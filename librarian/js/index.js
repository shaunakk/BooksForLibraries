$(document).ready(function() {
    $("nav").hide()
    $("#content").hide()
    $("#approveBook").hide()
    $(".sk-rotating-plane").hide()
  
    setTimeout(function() {
            swal({
                title: 'Enter Your Passcode:',
                html: '<br><p><input type="password" id="input-field">',
                closeOnConfirm: false,
                allowOutsideClick: false,
                type: 'question'
            }).then(function(isConfirm) {
                if (isConfirm) {
                    // swal({
                    //     html: 'You entered: <strong>' +
                    //         $('#input-field').val() +
                    //         '</strong>'
                    // });
                    swal(
                        'Success!',
                        'You are logged in',
                        'success'
                    )
                    pinCheck()

                }
            })
        },
        100)

    $("#request").click(function() {
        $("#request").parent().addClass("active")
        $("#approve").parent().removeClass("active")
        $("#requestBook").show()
        $("#approveBook").hide()
    })
    $("#approve").click(function() {
        $("#approve").parent().addClass("active")
        $("#request").parent().removeClass("active")
        $("#requestBook").hide()
        $(".approveLoader").show()
        var loadInterval = setInterval(function() {
                $(".approveLoader").remove()
                $("#approveBook").show()
                clearInterval(loadInterval)
            },
            2000)
    })
    $("#makeRequest").click(function() {
        $(".marginedLeftLoader").show()
        $(".bookPrice").html("")
        book = $("#bookName").val().trim().replace(/ /g, "+");
        var path = 'http://localhost:8080?bname=' + book;
        $.ajax({
            method: 'GET',
            url: path,
            success: function(data) {
                $(".hideImage").show()
                $(".bookPrice").html("Book Price: USD " + data + "<br> Your Price: USD " + Math.floor(data * 50) / 100)
                $(".marginedLeftLoader").hide()
                swal(
                    'Success!',
                    'The Martian is requested',
                    'success'
                )
            }
        })
    });
    $("#submitApprove").click(function() {
        swal(
            'Success!',
            'The Martian is approved',
            'success'
        )
        $(".bookPanel").remove()
        $(".appendNone").append("<h5><i>None</i></h5>")
    })
})

function pinCheck() {
    $("nav").show()
    $("#content").show()
    $("#approveBook").show()
    $(".sk-rotating-plane").show()
    $(".hideImage").hide()
    $(".approveLoader").hide()
    $("#approveBook").hide()
    $(".marginedLeftLoader").hide()
}
