emcc vuln.c -o wasm.js -s EXPORTED_FUNCTIONS="['_check_password', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS='["UTF8ToString", "intArrayFromString", "ALLOC_NORMAL", "allocate"]';

python3 -m http.server
