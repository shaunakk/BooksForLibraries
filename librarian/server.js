var http = require('http');
var jsonfile = require('jsonfile')
var util = require('util')
    //start
    // http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').exec;
var child;
url = require('url');
var fs = require('fs')
var logData


go()
var requestArray
var express = require('express');
http.createServer(function(req, res) {
    if (req.method == "POST") {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'$
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,$
        req.on('data', function(chunk) {
            console.log("Received body data from: " + req.connection.remoteAddress);
            console.log("Data: " + chunk.toString());
            if (JSON.parse(chunk.toString()).motion) {
                go()
                console.log("go")
            } else {
                stop()
                console.log("stop")
            }
            var file = '/home/pi/history.json'
             fs.readFile("/home/pi/logData.json","utf8", function (err,data) {
                if (err){
                    console.log(err)
                    return
                }
                else{
                    logData=JSON.parse(data)
                }
            });
            history = {}
            history.logData=logData
            history.date = new Date()
            history.ip = req.connection.remoteAddress
            history.email = JSON.parse(chunk.toString()).email
            history.motion = JSON.parse(chunk.toString()).motion
            console.log(JSON.stringify(history))
            jsonfile.writeFile(file, history, function(err) {
                console.error(err)
            })
            //work()

        });
    } else {
        delete require.cache[require.resolve('./history.json')]
        var myData = require('./history.json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'$
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,$
        res.write(JSON.stringify(myData));
        var str;
        req.on('data', function(chunk) {});
              fs.readFile("/home/pi/logData.json","utf8", function (err,data) {
                if (err){
                    console.log(err)
                    return
                }
                else{
                    logData=JSON.parse(data)
                }
            });
            history = {}
            history.logData=logData
            history.date = new Date()
            history.ip = req.connection.remoteAddress
            history.email = JSON.parse(chunk.toString()).email
            history.motion = JSON.parse(chunk.toString()).motion
            console.log(JSON.stringify(history))
            jsonfile.writeFile(file, history, function(err) {
                console.error(err)
            })
            //work()

        });
    } else {
        delete require.cache[require.resolve('./history.json')]
        var myData = require('./history.json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'$
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization,$
        res.write(JSON.stringify(myData));
        var str;
        req.on('data', function(chunk) {});
        req.on('end', function() {});
    }
    res.end();
}).listen(9602, '192.168.1.161');
console.log("Server Listening")

function go() {
    child = exec("mjpg_streamer -i '/usr/local/lib/input_uvc.so -f 15 -q 70 -r 640x$
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}

function stop() {
    child = exec("sudo killall mjpg_streamer", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}


