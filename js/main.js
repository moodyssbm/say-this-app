let child_process = require('child_process');
let exec = child_process.exec;

let tBox = gbi('tBox');

let command;

function sayThis() {
	command = 'say "';
	command += tBox.value;
	command += '"';

	exec(command);
}
