import test from 'ava';

import {mul} from '@aureooms/js-string';

import {lz78} from '../../src/index.js';
const {dict, encode, decode} = lz78;

const alphabetaL = 'abcdefghijklmnopqrstuvwxyz';
const alphabetaU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const initEmpty = () => dict();
const initAlphabet = () => dict(['', ...alphabetaL, ...alphabetaU]);

const macro = (t, init, input) => {
	// TODO use init only once once persistent data structures are used
	const tokens = encode(init(), input);
	const chunks = decode(init(), tokens);
	const decoded = [...chunks].join('');

	t.deepEqual(input, decoded, 'decoded message must be the same as input');
};

const repr = (string) =>
	string.length >= 20 ? string.slice(0, 9) + '..' + string.slice(-9) : string;

macro.title = (title, init, input) => title ?? `lz78 <${init.name}>: ${repr(input)}`;

for (const init of [initEmpty, initAlphabet]) {
	test(macro, init, '');
	test(macro, init, 'a');
	test(macro, init, 'ab');
	test(macro, init, 'abc');
	test(macro, init, mul('GZYAGZUAYZGUAYZFAAFAFTAZFTAFZTAFTZFATFA', 4));
	test(macro, init, mul('B', 81));
}
