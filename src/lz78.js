import {Trie, ObjectNode} from '@aureooms/js-trie';
import {push, iter} from '@aureooms/js-persistent-stack';

/**
 * Simple Lempel-Ziv lossless data compression algorithm implementation.
 */

// TODO read input as async tape
// TODO await trie operations
// TODO use persistent trie

export function* encode({trie, table}, symbols) {
	let chunkNumber = table.length - 1;
	const itSymbols = symbols[Symbol.iterator]();
	while (true) {
		const [part, node] = trie.getClosestAncestor(itSymbols);
		if (part === undefined) {
			yield [node.value(), undefined];
			break;
		}

		node.set(part, ++chunkNumber);

		yield [node.value(), part];
	}
}

const reify = (chunk) => [...iter(chunk)].reverse().join('');

// TODO use persistent table

export function* decode({table}, tokens) {
	for (const [parent, child] of tokens) {
		const previous = table[parent];

		if (child === undefined) {
			yield reify(previous);
		} else {
			const newChunk = push(previous, child);
			yield reify(newChunk);
			table.push(newChunk);
		}
	}
}

// TODO use persistent dict (hence a persistent trie and table)
export const dict = (symbols = ['']) => {
	const trie = makeTrie(symbols);
	const table = makeTable(trie);
	return {trie, table};
};

const makeTable = (trie) => {
	const table = [];
	for (const [key, value] of trie) table[value] = key;
	return table;
};

const emptyTrie = () => {
	const root = new ObjectNode();
	const trie = new Trie(root);
	return trie;
};

const makeTrie = (symbols) => {
	const trie = emptyTrie();
	let i = 0;
	for (const x of symbols) trie.set(x, i++);
	return trie;
};
