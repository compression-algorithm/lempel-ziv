:luggage: [@compression-algorithm/lempel-ziv](https://compression-algorithm.github.io/lempel-ziv)
==

Lempel-Ziv lossless data compression algorithms for JavaScript.
See [docs](https://compression-algorithm.github.io/lempel-ziv/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {lz78} from '@compression-algorithm/lempel-ziv' ;
const {dict, encode, decode} = lz78;

[...decode(dict(), encode(dict(), 'abcd'))].join(''); // abcd
```

[![License](https://img.shields.io/github/license/compression-algorithm/lempel-ziv.svg)](https://raw.githubusercontent.com/compression-algorithm/lempel-ziv/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@compression-algorithm/lempel-ziv.svg)](https://www.npmjs.org/package/@compression-algorithm/lempel-ziv)
[![Tests](https://img.shields.io/github/workflow/status/compression-algorithm/lempel-ziv/ci?event=push&label=tests)](https://github.com/compression-algorithm/lempel-ziv/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/compression-algorithm/lempel-ziv.svg)](https://github.com/compression-algorithm/lempel-ziv/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/compression-algorithm/lempel-ziv.svg)](https://github.com/compression-algorithm/lempel-ziv/issues)
[![Downloads](https://img.shields.io/npm/dm/@compression-algorithm/lempel-ziv.svg)](https://www.npmjs.org/package/@compression-algorithm/lempel-ziv)

[![Code issues](https://img.shields.io/codeclimate/issues/compression-algorithm/lempel-ziv.svg)](https://codeclimate.com/github/compression-algorithm/lempel-ziv/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/compression-algorithm/lempel-ziv.svg)](https://codeclimate.com/github/compression-algorithm/lempel-ziv/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/compression-algorithm/lempel-ziv/main.svg)](https://codecov.io/gh/compression-algorithm/lempel-ziv)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/compression-algorithm/lempel-ziv.svg)](https://codeclimate.com/github/compression-algorithm/lempel-ziv/trends/technical_debt)
[![Documentation](https://compression-algorithm.github.io/lempel-ziv/badge.svg)](https://compression-algorithm.github.io/lempel-ziv/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@compression-algorithm/lempel-ziv)](https://bundlephobia.com/result?p=@compression-algorithm/lempel-ziv)
