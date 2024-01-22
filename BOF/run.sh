emcc vuln.c -o wasm.js -s EXPORTED_FUNCTIONS="['_greetings', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS='["UTF8ToString", "intArrayFromString", "ALLOC_NORMAL", "allocate"]';

python3 -m http.server
