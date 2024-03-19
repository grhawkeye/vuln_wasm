#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <emscripten.h>
#include <stdbool.h>


typedef struct {
  char a[10];
  char b[10];
  char c[10];
  char flag[5];
} object;



EMSCRIPTEN_KEEPALIVE
int num_allocs;
EMSCRIPTEN_KEEPALIVE
object *x;


EMSCRIPTEN_KEEPALIVE
void print_heap() {
    printf("[*]   Address   ->   Value   \n");
    printf("+-------------+-----------+\n");
    printf("[*]   %p  ->   %s\n", x->flag, x->flag);
    printf("+-------------+-----------+\n");
    fflush(stdout);
}

EMSCRIPTEN_KEEPALIVE
bool check_password(char* pass){
    char password[20];

    strcpy(password, x->flag);

    return (strcmp(pass, password) == 0);   
}

EMSCRIPTEN_KEEPALIVE
void init() {
    x = malloc(sizeof(object));
    strncpy(x->flag, "wasm", 5);
}

EMSCRIPTEN_KEEPALIVE
void alloc_object(int size, char* data) {
    char* alloc = malloc(size);
    strcpy(alloc, data);
    
}

EMSCRIPTEN_KEEPALIVE
void free_memory() {
    free(x);
}