var form = document.querySelector('form');
form.onsubmit = function(submitEvent) {
    var name = document.querySelector('input').value;
    request(
        {
            uri: 'http://example.com/upload',
            body: name,
            method: 'POST'
        },
        function(err, response, body) {
            var statusMessage = document.querySelector('.status');
            if (err) return (statusMessage.value = err);
            statusMessage.value = body;
        }
    );
};

// How do I fix callback hell?
// 1. Keep your code shallow

document.querySelector('form').onsubmit = formSubmit;

function formSubmit(submitEvent) {
    var name = document.querySelector('input').value;
    request(
        {
            uri: 'http://example.com/upload',
            body: name,
            method: 'POST'
        },
        postResponse
    );
}

function postResponse(err, response, body) {
    var statusMessage = document.querySelector('.status');
    if (err) return (statusMessage.value = err);
    statusMessage.value = body;
}

// Note that the function declarations here are defined at the bottom of the file.
// This is thanks to function hoisting.

// 2. Modularize

var formUploader = require('formuploader');
document.querySelector('form').onsubmit = formUploader.submit;

// Here is a new file called formuploader.js:
module.exports.submit = formSubmit;

function formSubmit(submitEvent) {
    var name = document.querySelector('input').value;
    request(
        {
            uri: 'http://example.com/upload',
            body: name,
            method: 'POST'
        },
        postResponse
    );
}

function postResponse(err, response, body) {
    var statusMessage = document.querySelector('.status');
    if (err) return (statusMessage.value = err);
    statusMessage.value = body;
}

// 3. Handle every single error
var fs = require('fs');

fs.readFile('/Does/not/exist', handleFile);

function handleFile(error, file) {
    if (error) return console.error('Uhoh, there was an error', error);
    // otherwise, continue on and use `file` in your code
}

// Summary
// 1. Don't nest functions.
// 2. Use function hoisting
// 3. Handle every single error in every one of your callbacks.
// 4. Create reusable functions and place them in a module
