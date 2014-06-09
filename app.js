var shared = require('nnj-shared');
shared.sayYes(false);

function alwaysNo() {
	return shared.say();
}
console.log('alwaysNo()       should say "No."   ', alwaysNo());


var lib = require('nnj-lib');
console.log('lib.alwaysYes()  should say "Yes!"  ', lib.alwaysYes());


console.log('alwaysNo()       should say "No."   ', alwaysNo());
