function displayGreeting() {
    // Get the value entered in the input field
    var password = document.getElementById("password").value;
    
    // Allocate the new value inside the module
    const ptr = Module.allocate(
        Module.intArrayFromString(password),
        Module.ALLOC_NORMAL
    );
    

    Module._check_password(ptr);

    Module._free(ptr);
    
}
