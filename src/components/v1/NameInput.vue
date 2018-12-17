<template>
  <div>
		<input
			id="name-input"
			:value="value"
			:class="{'invalid':!valid}"
			type="text"
			placeholder="Enter name"
			@input="input"
		/>
		<p v-show="!valid">
			Name format is invalid.
		</p>
  </div>
</template>

<script>

export default {
	name: 'NameInput-1',
	props: {
		value: {
			type: String,
			required: true,
		},
	},
	computed: {
		// Name length must be between 1 and 20 characters
		valid() {
			return this.value && this.value.length > 0 && this.value.length < 21;
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
