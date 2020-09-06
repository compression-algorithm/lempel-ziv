# Usage

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
require( 'regenerator-runtime/runtime' );
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const lempelziv = require( '@aureooms/js-lempel-ziv' ) ;
// or
import * as lempelziv from '@aureooms/js-lempel-ziv' ;
```
