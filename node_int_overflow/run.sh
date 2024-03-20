emcc vuln.c -s EXPORTED_FUNCTIONS="['_get_array_element', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS='["UTF8ToString", "intArrayFromString", "ALLOC_NORMAL", "allocate", "ccall", "cwrap"]' -o wasm.js;

node app.js
