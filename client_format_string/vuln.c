#include <stdio.h>
#include <emscripten.h>
#include <string.h>


EMSCRIPTEN_KEEPALIVE
void check_password(char* pass){
    char password[20] = "supersecretpassword";
     
    

    if (strcmp(pass, password) == 0){
        EM_ASM({
            document.getElementById('result').innerHTML = "Correct Password!";
            document.getElementById('password').innerHTML = "The password is: " + UTF8ToString($0);
        }, password);
    }
    else{
        EM_ASM({
            document.getElementById('result').innerHTML = "Wrong Password";
            document.getElementById('password').innerHTML = "";
        });
        printf(pass);
        printf("\n");
    }
    
}