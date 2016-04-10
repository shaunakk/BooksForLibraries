$(document).ready(function() {

    $("#approveBook").hide()
    $(".marginedLeftLoader").hide()
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
        $("#approveBook").show()
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
                $(".bookPrice").html("Book Price: " + data)
                $(".marginedLeftLoader").hide()
            }
        })
    });
})
