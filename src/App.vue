<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <UserJoin/>
</template>

<script>
import UserJoin from './components/UserJoin'

export default {
  name: 'App',
  components: {
    UserJoin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
