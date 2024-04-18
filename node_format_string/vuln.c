#include <stdio.h>
#include <emscripten.h>
#include <string.h>
#include <stdbool.h>


EMSCRIPTEN_KEEPALIVE
int check_password(char* pass){
    char password[20] = "supersecretpassword";


    if (strcmp(pass, password) == 0){
        return true;
    }
    else{
        printf(pass);
        printf("\n");

        return false;
    }   
}
