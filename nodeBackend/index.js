const http = require('http');
const PORT = 4007;

const server = http.createServer((req, res) => {
    if (req.url === '/msg' && req.method === 'GET') {
        res.setHeader("Content-Type", "text/html"); 
        res.end("<h2>Hello, Welcome message from Node Server</h2>");
    }

    if (req.url === '/data' && req.method === 'GET') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ msg: "This is json data" }));
    }

    if (req.url === '/data' && req.method === 'POST') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ msg: "Post message for data insertion" }));
    }

    if (req.url === '/data' && req.method === 'DELETE') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ msg: "Resource deleted successfully" }));
    }
});

server.listen(PORT, () => {
    console.log(`Service is available at http://localhost:${PORT}`);
});
