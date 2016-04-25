 child = exec("sh /home/pi/right.sh", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });