<template>
    <div>
        <!-- Navbar -->
        <div>
            <b-navbar toggleable="sm" type="dark" variant="dark">
                <b-navbar-brand><router-link v-bind:to="'/'">BRASS TACKS</router-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Navbar right -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item><router-link v-bind:to="'/'">HOME</router-link></b-nav-item>
                        <b-nav-item><router-link v-bind:to="'/band'">BAND</router-link></b-nav-item>

                        <!-- Navbar dropdowns -->
                        <b-nav-item-dropdown text="PROGRAMM" right>
                        <b-dropdown-item><router-link v-bind:to="'/sektempfang'">SEKTEMPFANG</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link v-bind:to="'/dinnermusik'">DINNERMUSIK</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link v-bind:to="'/tanzpartymusik'">TANZ & PARTY</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link v-bind:to="'/dj'">AFTER PARTY DJ</router-link></b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item><router-link v-bind:to="'/gallerie'">GALLERIE</router-link></b-nav-item>
                        <b-nav-item><router-link v-bind:to="'/kontakt'">KONTAKT</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <!-- Navbar -->
    </div>
</template>

<script>
export default {
  name: 'NavbarView',
  data () {
    return {
      msg: 'Welcome to the Brass Tacks Live Band Web App'
    }
  }
}
</script>

<style>
</style>
