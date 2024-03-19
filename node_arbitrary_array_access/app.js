const Module = require('./wasm.js')
const express = require('express')
const app = express()
app.use(express.static('public'));
const port = 3000

console.log("DEBUG");
Module.onRuntimeInitialized = () => {
console.log("LOADED");


change_pass = function change_pass(index, new_character) {
    Module._change_user_password_character(index, new_character.charCodeAt(0));
    
    return Module.UTF8ToString(Module._get_user_password())
}

login = Module.cwrap('check_password', 'int', ['string'])

log_passwords = function log_passwords(){
  console.log(Module.UTF8ToString(Module._get_user_password()))
  console.log(Module.UTF8ToString(Module._get_admin_password()))
}

}



// Middleware to parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {

  let index = req.body.index
  let new_character = req.body.new_character
  

  if (index && new_character){
    user_pass = change_pass(index, new_character);
    res.send("<h2>Your current password:" + user_pass + " </h2>")
    log_passwords()
  }
    
  else
    res.send("<h2>Please send an index and a new character</h2>")
  
  
})

app.post('/login', (req, res) => {
  let password = req.body.password
  if (password){
    login_result = login(password)
    if (login_result == 1){
      res.send("<h2> Welcome Admin </h2>")
    }
    else if (login_result == 0){
      res.send("<h2> Welcome User </h2>")
    }
    else{
      res.send("<h2> Wrong password </h2>")
    }
  }
  else{
    res.send("<h2> Please enter a password </h2>")
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})