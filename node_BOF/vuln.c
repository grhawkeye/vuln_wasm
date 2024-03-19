#include <emscripten.h>
#include <string.h>

EMSCRIPTEN_KEEPALIVE
void greetings(char* name){
    char sys_cmd[70] = "console.log('Welcome to WebAssembly!')";
    char greet[20];
    
    strncpy(greet, name, strlen(name));

    EM_ASM({
        eval(UTF8ToString($0));
        console.log("Hello, " + UTF8ToString($1));
    }, sys_cmd, greet);
}
