#include <emscripten.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>


char user_password[30] = "thisisyourpassword";
char admin_password[30] = "supersecretpassword";

EMSCRIPTEN_KEEPALIVE
bool admin_panel(){
    return true;
}

EMSCRIPTEN_KEEPALIVE
bool user_panel(){
    return false;
}


EMSCRIPTEN_KEEPALIVE
char* get_user_password(){
    return user_password;
}

EMSCRIPTEN_KEEPALIVE
char* get_admin_password(){
    return admin_password;
}

EMSCRIPTEN_KEEPALIVE
void change_user_password_character(int index, char new_char){
   user_password[index] = new_char;
}

EMSCRIPTEN_KEEPALIVE
int check_password(char* pass){
    if (strcmp(pass, admin_password) == 0){
        return admin_panel();
    }
    else if (strcmp(pass, user_password) == 0){
        return user_panel();
    }
    else{
        return -1;
    } 
}