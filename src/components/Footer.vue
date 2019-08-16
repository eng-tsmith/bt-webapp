<template>
  <div>
    <b-container>
    <p>© Brass Tacks Live Band // <router-link v-bind:to="'/impressum'">IMPRESSUM</router-link></p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'FooterView',
  data () {
    return {
      msg: 'Welcome to the Brass Tacks Live Band Web App'
    }
  }
}
</script>

<style>
</style>
