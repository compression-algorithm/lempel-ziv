:luggage: [@compression-algorithm/lempel-ziv](https://compression-algorithm.github.io/lempel-ziv)
==

Lempel-Ziv lossless data compression algorithms for JavaScript.
See [docs](https://compression-algorithm.github.io/lempel-ziv/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {dict, encode, decode} from '@compression-algorithm/lempel-ziv/lz78' ;
[...decode(dict(), encode(dict(), 'abcd'))].join(''); // abcd
```

[![License](https://img.shields.io/github/license/compression-algorithm/lempel-ziv.svg)](https://raw.githubusercontent.com/compression-algorithm/lempel-ziv/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@compression-algorithm/lempel-ziv.svg)](https://www.npmjs.org/package/@compression-algorithm/lempel-ziv)
[![Build](https://img.shields.io/travis/compression-algorithm/lempel-ziv/main.svg)](https://travis-ci.org/compression-algorithm/lempel-ziv/branches)
[![Dependencies](https://img.shields.io/david/compression-algorithm/lempel-ziv.svg)](https://david-dm.org/compression-algorithm/lempel-ziv)
[![Dev dependencies](https://img.shields.io/david/dev/compression-algorithm/lempel-ziv.svg)](https://david-dm.org/compression-algorithm/lempel-ziv?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/compression-algorithm/lempel-ziv.svg)](https://github.com/compression-algorithm/lempel-ziv/issues)
[![Downloads](https://img.shields.io/npm/dm/@compression-algorithm/lempel-ziv.svg)](https://www.npmjs.org/package/@compression-algorithm/lempel-ziv)

[![Code issues](https://img.shields.io/codeclimate/issues/compression-algorithm/lempel-ziv.svg)](https://codeclimate.com/github/compression-algorithm/lempel-ziv/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/compression-algorithm/lempel-ziv.svg)](https://codeclimate.com/github/compression-algorithm/lempel-ziv/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/compression-algorithm/lempel-ziv/main.svg)](https://codecov.io/gh/compression-algorithm/lempel-ziv)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/compression-algorithm/lempel-ziv.svg)](https://codeclimate.com/github/compression-algorithm/lempel-ziv/trends/technical_debt)
[![Documentation](https://compression-algorithm.github.io/lempel-ziv/badge.svg)](https://compression-algorithm.github.io/lempel-ziv/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@compression-algorithm/lempel-ziv)](https://bundlephobia.com/result?p=@compression-algorithm/lempel-ziv)
