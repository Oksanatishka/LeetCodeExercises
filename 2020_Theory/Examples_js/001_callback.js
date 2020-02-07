// A callback function is usually used as a parameter to another function.
const second = () => {
    setTimeout(() => {
        console.log('download image takes 2 seconds');
    }, 2000);
};
const first = () => {
    console.log('first func was called');
    second();
    console.log('the code still running');
};
first();

//----------------------------------
// Here reqListener is the callback which will be executed when a GET request to is successfully responded back.
function reqListener() {
    console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.addEventListener('load', reqListener);
req.open('GET', 'http://www.example.org/example.txt');
req.send();
