const Module = require('./wasm.js')
const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

console.log("DEBUG");
Module.onRuntimeInitialized = () => {
console.log("LOADED");

Module._init();

login = Module.cwrap('check_password', 'bool', ['string'])

alloc_object = Module.cwrap('alloc_object', null, ['int', 'string'])

free_memory = Module.cwrap('free_memory', null, null)

log_heap = Module.cwrap('print_heap', null, null)

}


// Middleware to parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    init_data();
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/free', (req, res) => {
    free_memory();
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/log', (req, res) => {
    log_heap();
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/alloc', (req, res) => {
    const size = req.body.allocSize;
    const data = req.body.allocData;
    alloc_object(size, data);
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
    const password = req.body.password;

    if (login(password)) {
        res.send("<h2>Correct password!</h2>");
    } else {
        res.send("<h2>Wrong password</h2>");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
