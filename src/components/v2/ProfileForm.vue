<template>
		<form
			ref="form"
			@submit.prevent="save"
		>
			<label for="name-input">User name:</label>
			<name-input
				v-model="name"
				@input="validate"
			></name-input>

			<label for="password-input">User password:</label>
			<password-input
				v-model="password"
				@input="validate"
			></password-input>

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
	name: 'ProfileForm-2',
	components: {
		NameInput,
		PasswordInput,
	},
	data() {
		return {
			name: 'John Smith',
			password: '123456',
			valid: true,
		};
	},
	methods: {
		validate() {
			this.valid = this.$refs.form.checkValidity();
		},
		save() {
			console.log(`Save name (${this.name}) and password (${this.password})`);
		},
	},
};
</script>

<style scoped lang="scss">
button {
  &:disabled {
    background-color: lightgray;
    color: gray;
    cursor: not-allowed;
  }
}
</style>
