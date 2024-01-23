const Module = require('./wasm.js')
const express = require('express')
const app = express()
const port = 3000

function executeWasm(name) {
  var result = Module.onRuntimeInitialized = () => {
  console.log("DEBUG", name);
  const ptr = Module.allocate(
        Module.intArrayFromString(name),
        Module.ALLOC_NORMAL
    );
    //
   Module._greetings(ptr);

   Module._free(ptr);
   
   console.log("DEBUG 2", ptr);
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






