const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/" || req.url === "/index.html") {

        const filePath = path.join(__dirname, "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading file");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });

    } else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

