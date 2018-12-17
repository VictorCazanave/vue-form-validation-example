<template>
  <div>
		<input
			id="password-input"
			ref="input"
			:value="value"
			type="password"
			placeholder="Enter password"
			autocomplete="off"
			@input="input"
		/>
		<p v-show="!valid">
			Password format is invalid.
		</p>
  </div>
</template>

<script>

export default {
	name: 'PasswordInput-2',
	props: {
		value: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			valid: true,
		};
	},
	methods: {
		input(event) {
			const value = event.target.value;

			this.valid = value && value.length > 5 && value.length < 25;

			// Need to be validated before emitting input event
			if (this.valid) {
				this.$refs.input.setCustomValidity('');
			} else {
				// Used to check validity in form and add invalid CSS pseudo-class
				this.$refs.input.setCustomValidity('Invalid field');
			}

			this.$emit('input', value);
		},
	},
};
</script>

<style scoped lang="scss">
input {
  padding: 5px 10px;

  &:invalid {
    border-color: red;
  }
}

p {
  color: red;
}
</style>
