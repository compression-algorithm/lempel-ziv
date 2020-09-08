:luggage: [@aureooms/js-lempel-ziv](https://aureooms.github.io/js-lempel-ziv)
==

Lempel-Ziv lossless data compression algorithms for JavaScript.
See [docs](https://aureooms.github.io/js-lempel-ziv/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {dict, encode, decode} from '@aureooms/js-lempel-ziv/lz78' ;
[...decode(dict(), encode(dict(), 'abcd'))].join(''); // abcd
```

[![License](https://img.shields.io/github/license/aureooms/js-lempel-ziv.svg)](https://raw.githubusercontent.com/aureooms/js-lempel-ziv/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-lempel-ziv.svg)](https://www.npmjs.org/package/@aureooms/js-lempel-ziv)
[![Build](https://img.shields.io/travis/aureooms/js-lempel-ziv/master.svg)](https://travis-ci.org/aureooms/js-lempel-ziv/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-lempel-ziv.svg)](https://david-dm.org/aureooms/js-lempel-ziv)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-lempel-ziv.svg)](https://david-dm.org/aureooms/js-lempel-ziv?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-lempel-ziv.svg)](https://github.com/aureooms/js-lempel-ziv/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-lempel-ziv.svg)](https://www.npmjs.org/package/@aureooms/js-lempel-ziv)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-lempel-ziv.svg)](https://codeclimate.com/github/aureooms/js-lempel-ziv/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-lempel-ziv.svg)](https://codeclimate.com/github/aureooms/js-lempel-ziv/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-lempel-ziv/master.svg)](https://codecov.io/gh/aureooms/js-lempel-ziv)
<!--[![Code coverage (alls)](https://img.shields.io/coveralls/github/aureooms/js-lempel-ziv/master.svg)](https://coveralls.io/r/aureooms/js-lempel-ziv)-->
<!--[![Code coverage (clim)](https://img.shields.io/codeclimate/coverage/aureooms/js-lempel-ziv.svg)](https://codeclimate.com/github/aureooms/js-lempel-ziv/trends/test_coverage_new_code)-->
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-lempel-ziv.svg)](https://codeclimate.com/github/aureooms/js-lempel-ziv/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-lempel-ziv/badge.svg)](https://aureooms.github.io/js-lempel-ziv/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-lempel-ziv)](https://bundlephobia.com/result?p=@aureooms/js-lempel-ziv)
