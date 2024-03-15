const Module = require('./wasm.js')
const express = require('express')
const app = express()
app.use(express.static('public'));
const port = 3000

var executeWasm;
console.log("DEBUG");
Module.onRuntimeInitialized = () => {
console.log("LOADED");
executeWasm = function executeWasm(name) {
    const ptr = Module.allocate(
          Module.intArrayFromString(name),
          Module.ALLOC_NORMAL
    );
        
    correct_password = Module._check_password(ptr);

    Module._free(ptr);

    return correct_password
  }
}

// Middleware to parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {

  let password = req.body.password
  if (password){
    correct_password = executeWasm(password);
  
    if (correct_password){
      res.send("<h2>Correct Password!</h2>"); 
    }
    else{
      res.send("<h2>Wrong Password</h2>"); 
    }
  }
  else{
    res.send("<h2>Please send a password</h2>")
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})