//6. Write a node.js program to get files or directories of a directory in JSON format.
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function getJSON(path) {
    return fetch(path).then(response => response.json());
}
getJSON('package.json').then(info => {
    // get title property and log it to the console
    var title = info.title;
    console.log(title)
})