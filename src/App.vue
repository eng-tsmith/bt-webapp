<template>
  <div id="app">
    <HomeView/>
  </div>
</template>

<script>
import HomeView from './components/Home'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
#app {
  font-family: century-gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
