const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
	const manager = new Manager('Smity Smitty', '1358', 'me@me.com', 'B222');

	expect(manager.name).toBe('Smity Smitty');
	expect(manager.id).toBe('1358');
	expect(manager.email).toBe('me@me.com');
	expect(manager.office).toBe('B222');
});

test("gets employee's role", () => {
	const manager = new Manager(
		'Local Storage',
		'5555',
		'storage@storage.com',
		'B222'
	);

	expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
