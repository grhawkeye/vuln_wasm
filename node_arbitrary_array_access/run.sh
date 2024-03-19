emcc vuln.c -s EXPORTED_FUNCTIONS="['_change_user_password_character', '_check_password', '_get_user_password', '_get_admin_password', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS='["UTF8ToString", "intArrayFromString", "ALLOC_NORMAL", "allocate", "ccall", "cwrap"]' -o wasm.js;

node app.js
