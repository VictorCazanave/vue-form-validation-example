<template>
		<form @submit.prevent="save">
			<label for="name-input">User name:</label>
			<name-input v-model="name"></name-input>

			<label for="password-input">User password:</label>
			<password-input v-model="password"></password-input>

			<button
				:disabled="!valid"
				type="submit"
			>
				Save
			</button>
		</form>
</template>

<script>
import Utils from '../../utils';
import NameInput from './NameInput.vue';
import PasswordInput from './PasswordInput.vue';

export default {
	name: 'ProfileForm-1-1',
	components: {
		NameInput,
		PasswordInput,
	},
	data() {
		return {
			name: 'John Smith',
			password: '123456',
		};
	},
	computed: {
		valid() {
			return Utils.isNameValid(this.name) && Utils.isPasswordValid(this.password);
		},
	},
	methods: {
		save() {
			console.log(`Save name (${this.name}) and password (${this.password})`);
		},
	},
};
</script>

<style scoped lang="scss">
button {
  padding: 5px 10px;

  &:disabled {
    background-color: lightgray;
    color: gray;
    cursor: not-allowed;
  }
}
</style>
