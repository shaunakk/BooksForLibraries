$(document).ready(function() {
    $("#submit").click(function() {
        var book = $("#input").val().trim().replace(/ /g, "+");
        $('div').append("<p>" + book + "</p>");
        $.get("http://192.168.1.78:8080?bname=" + book.toString(), function(data) {
            console.log(data);
        });
    });
});
