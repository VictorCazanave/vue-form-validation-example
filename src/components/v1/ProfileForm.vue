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
import NameInput from './NameInput.vue';
import PasswordInput from './PasswordInput.vue';

export default {
	name: 'ProfileForm-1',
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
			return this.password && this.password.length > 6 && this.password.length < 24
				&& this.name && this.name.length > 0 && this.name.length < 20;
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
