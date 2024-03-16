#include <emscripten.h>
#include <string.h>
#include <stdio.h>


EMSCRIPTEN_KEEPALIVE
void admin_panel(){
    EM_ASM({
        document.getElementById('result').innerHTML = "Welcome, Admin!";
    });
}

EMSCRIPTEN_KEEPALIVE
void user_panel(){
    EM_ASM({
        document.getElementById('result').innerHTML = "Welcome, User!";
    });
}




EMSCRIPTEN_KEEPALIVE
void check_password(char* input){
    void (* login_handler)(void);
    char password[10];

    strcpy(password, input);

    if (login_handler == 0){
        if (strcmp(password, "secretpass") == 0)
            login_handler = (void (*)(void))&admin_panel;
        else
            login_handler = (void (*)(void))&user_panel;
            
            
    }

    login_handler();
    
    login_handler = 0;
}
