import test from 'ava';

import {dict, encode, decode} from '../../src/lz78';
test('README', (t) => {
	const input = 'abcd';
	t.is(input, [...decode(dict(), encode(dict(), input))].join(''));
});
