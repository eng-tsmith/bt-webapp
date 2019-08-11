<template>
    <div>
      <!-- Navbar -->
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">HOME</b-nav-item>
            <b-nav-item href="#">BAND</b-nav-item>

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="PROGRAMM" right>
              <b-dropdown-item href="#">SEKTEMPFANG</b-dropdown-item>
              <b-dropdown-item href="#">DINNERMUSIK</b-dropdown-item>
              <b-dropdown-item href="#">TANZ & PARTY</b-dropdown-item>
              <b-dropdown-item href="#">AFTER PARTY DJ</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">GALLERIE</b-nav-item>
            <b-nav-item href="#">KONTAKT</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div><!-- Navbar -->

      <!-- jumbotron -->
      <div>
        <b-jumbotron header="BRASS TACKS" lead="LIVE BAND">
            <p>IHRE HOCHZEITSBAND</p>
        </b-jumbotron>
      </div><!-- jumbotron -->

    <b-container>
      <!-- Row of columns -->
      <b-row>
        <!-- Cont1 -->
        <b-col>
          <h2>SEKTEMPFANG</h2>
          <p>Arsch. </p>
          <b-btn>View Details &raquo;</b-btn>
        </b-col>
        <!-- Cont2 -->
        <b-col>
          <h2>DINNERMUSIK</h2>
          <p>Arsch. </p>
          <b-btn>View Details &raquo;</b-btn>
        </b-col>
        <!-- Cont3 -->
        <b-col>
          <h2>TANZ & PARTY</h2>
            <p>Arsch. </p>
            <b-btn>View Details &raquo;</b-btn>
        </b-col>
        <!-- Cont4 -->
        <b-col>
          <h2>AFTER PARTY DJ</h2>
          <p>Arsch. </p>
          <b-btn>View Details &raquo;</b-btn>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      msg: 'Welcome to the Brass Tacks Live Band Web App'
    }
  }
}
</script>

<style>
    
</style>
