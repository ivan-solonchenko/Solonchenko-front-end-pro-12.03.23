const http = require("http")
const fs = require('fs').promises;

const host = 'localhost';
const port = "8000";

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!")
// }

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/home.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})