const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
	const engineer = new Engineer(
		'Tony Romo',
		'1111',
		'romo@romo.com',
		'tonyromo6767'
	);

	expect(engineer.name).toBe('Tony Romo');
	expect(engineer.id).toBe('1111');
	expect(engineer.email).toBe('romo@romo.com');
	expect(engineer.github).toBe('tonyromo6767');
});

test("gets engineer's github username", () => {
	const engineer = new Engineer(
		'Tony Romo',
		'1111',
		'romo@romo.com',
		'tonyromo6767'
	);

	expect(engineer.getGithub()).toEqual(expect.stringContaining('tonyromo6767'));
});

test("gets engineer's role", () => {
	const engineer = new Engineer(
		'Tony Romo',
		'1111',
		'romo@romo.com',
		'tonyromo6767'
	);

	expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
