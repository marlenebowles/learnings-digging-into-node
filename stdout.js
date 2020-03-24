#! /usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');
const util = require('util');
const getStdin = require('get-stdin');

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

const args = require('minimist')(process.argv.slice(2), {
	boolean: ['help', 'in'],
	string: ['file'],
});

const printHelp = () => {
	console.log('stdout usage');
	console.log('');
	console.log('--help         print this help, boolean');
	console.log('--file=FILENAME         file path string');
	console.log('--in, -            processtdin');
	console.log('');
};

const error = (message, includeHelp = false) => {
	console.error(message);
	if (includeHelp) {
		printHelp();
	}
};

const processFile = contents => {
	process.stdout.write(contents);
};

const getFile = async () => {
	const fileTarget = path.join(BASE_PATH, args.file);
	try {
		await fs.readFile(fileTarget, (error, result) => {
			if (result) {
				processFile(result.toString());
			} else {
				return error.toString();
			}
		});
	} catch (err) {
		error('No file found');
	}
};

if (args.help) {
	console.log('');
	printHelp();
} else if (args.file) {
	getFile(args.file);
} else if (args.in || args._.includes('-')) {
	getStdin().then(processFile);
} else {
	console.log('');
	error('incorrect usage');
}
