import test from 'ava';

import {lz78} from '#module';

const {dict, encode, decode} = lz78;

test('README', (t) => {
	const input = 'abcd';
	t.is(input, [...decode(dict(), encode(dict(), input))].join(''));
});
