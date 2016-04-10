function statusChange(response) {
    if (response.status === 'connected') {
        redirect();
    } else {
        $("#login").remove();
        $('#userLogin').append("<p id='login'>Please Login Using Facebook</p>");
    }
}

function checkLogin() {
    FB.getLoginStatus(function(response) {
        statusChange(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '465200226997190',
        cookie: true,
        xfbml: true,
        version: 'v2.5'
    });

    FB.getLoginStatus(function(response) {
        statusChange(response);
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function redirect() {
    $("#login").remove();
    $("#status").append("<p>Thanks for logging in!</p><br><p>You are being redirected now...</p>");
    setTimeout(function() {
        window.location.replace("http://localhost/user");
    }, 3750);
}

function logout() {
    FB.logout(function(response) {
        window.location.replace("http://localhost/")
    })
}
