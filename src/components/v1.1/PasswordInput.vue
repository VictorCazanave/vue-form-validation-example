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
import Utils from '../../utils';

export default {
	name: 'PasswordInput-1-1',
	props: {
		value: {
			type: String,
			required: true,
		},
	},
	computed: {
		// Password length must be between 6 and 24 characters
		valid() {
			return Utils.isPasswordValid(this.value);
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
