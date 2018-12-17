<template>
  <div>
		<input
			id="password-input"
			:value="value"
			:class="{'invalid':!valid}"
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
	name: 'PasswordInput-1',
	props: {
		value: {
			type: String,
			required: true,
		},
	},
	computed: {
		// Password length must be between 6 and 24 characters
		valid() {
			return this.value && this.value.length > 5 && this.value.length < 25;
		},
	},
	methods: {
		input(event) {
			this.$emit('input', event.target.value);
		},
	},
};
</script>

<style scoped lang="scss">
input {
  padding: 5px 10px;

  &.invalid {
    border-color: red;
  }
}

p {
  color: red;
}
</style>
