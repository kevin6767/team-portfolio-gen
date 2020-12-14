const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
	const employee = new Employee('Kevin Eslick', '0000', 'eslick@eslick.com');

	expect(employee.name).toBe('Kevin Eslick');
	expect(employee.id).toBe('0000');
	expect(employee.email).toBe('eslick@eslick.com');
});

test("gets employee's name", () => {
	const employee = new Employee('Kevin Eslick', '0000', 'eslick@eslick.com');

	expect(employee.getName()).toEqual(expect.stringContaining('Kevin Eslick'));
});

test("gets employee's ID", () => {
	const employee = new Employee('Kevin Eslick', '0000', 'eslick@eslick.com');

	expect(employee.getId()).toEqual(expect.stringContaining('0000'));
});

test("gets employee's email", () => {
	const employee = new Employee('Kevin Eslick', '0000', 'eslick@eslick.com');

	expect(employee.getEmail()).toEqual(
		expect.stringContaining('eslick@eslick.com')
	);
});

test("gets employee's role", () => {
	const employee = new Employee('Kevin Eslick', '0000', 'eslick@eslick.com');

	expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
