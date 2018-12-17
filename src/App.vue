<template>
  <div id="app">
		<profile-form></profile-form>
  </div>
</template>

<script>
import ProfileForm from './components/v1.1/ProfileForm.vue';

export default {
	name: 'app',
	components: {
		ProfileForm,
	},
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;
  margin-top: 60px;
}
</style>
