

// import fetch from 'node-fetch';

let response = fetch(url);

url = 'https://gorest.co.in/public/v1/posts'


fetch(url)
    .then(response => {
        // handle the response
        console.log(response);
    })
    .catch(error => {
        // handle the error
    });
