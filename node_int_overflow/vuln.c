#include <stdio.h>
#include <emscripten.h>
#include <string.h>

char supersecretpassword[5] = "empty";
char users[5][20] = {
    "guest_user",
    "guest_password",
    "admin",
    "admin_password"
};

EMSCRIPTEN_KEEPALIVE
char* get_array_element(int index) {
    printf("Accessing index: %d\n", index);

    strcpy(supersecretpassword, "pass");

    return users[index];
}
