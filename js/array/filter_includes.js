const users = [
	{ name: 'Alex', experience: ['React', 'Babel'] },
	{ name: 'Boba', experience: ['Ember', 'jQuery'] },
	{ name: 'Lola', experience: ['Angular', 'TS'] },
];

// Нужны только люди с такими скилами
const skills = ['Angular', 'React'];

// Solution
const filtered = users.filter((user) => user.experience.some((exp) => skills.includes(exp)));
console.log(filtered);
