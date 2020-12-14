const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
	const intern = new Intern(
		'Andy Dalton',
		'3333',
		'dalton@dalton.com',
		'Alabama'
	);
	expect(intern.name).toBe('Andy Dalton');
	expect(intern.id).toBe('3333');
	expect(intern.email).toBe('dalton@dalton.com');
	expect(intern.school).toBe('Alabama');
});

test("gets intern's school", () => {
	const intern = new Intern(
		'Andy Dalton',
		'3333',
		'dalton@dalton.com',
		'Alabama'
	);
	expect(intern.getSchool()).toEqual(expect.stringContaining('Alabama'));
});

test("gets intern's role", () => {
	const intern = new Intern(
		'Andy Dalton',
		'3333',
		'dalton@dalton.com',
		'Alabama'
	);

	expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
