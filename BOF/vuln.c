#include <emscripten.h>
#include <string.h>

EMSCRIPTEN_KEEPALIVE
void greetings(char* name){
    char sys_cmd[70] = "document.write('<h1>Welcome to WebAssembly!</h1>')";
    char greet[20];
    
    strncpy(greet, name, strlen(name));

    EM_ASM({
        eval(UTF8ToString($0));
        document.write("<h2>Hello, " + UTF8ToString($1) + "</h2>");
    }, sys_cmd, greet);
}
