<template>
  <div id="app">
    <NavbarView/>
    <router-view></router-view>
    <FooterView/>
  </div>
</template>

<script>
import NavbarView from './components/Navbar'
import FooterView from './components/Footer'

export default {
  name: 'App',
  components: {
    NavbarView,
    FooterView
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
}
</style>
