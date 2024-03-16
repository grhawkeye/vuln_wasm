emcc vuln.c -s EXPORTED_FUNCTIONS="['_check_password', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS='["UTF8ToString", "intArrayFromString", "ALLOC_NORMAL", "allocate"]' -o wasm.js;

node app.js
