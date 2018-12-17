export default {
	isNameValid(name) {
		return name && name.length > 0 && name.length < 21;
	},

	isPasswordValid(password) {
		return password && password.length > 5 && password.length < 25;
	},
};
