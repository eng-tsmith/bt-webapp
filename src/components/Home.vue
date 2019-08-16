<template>
  <div>
    <!-- jumbotron -->
    <div>
      <b-jumbotron header="BRASS TACKS" lead="LIVE BAND">
          <p>Ihre Hochzeitsband</p>
      </b-jumbotron>
    </div>
    <!-- jumbotron -->

    <!-- cards -->
    <b-container>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="dark" header="SEKTEMPFANG" text-variant="white" class="text-center">
            <b-img src="./../assets/icons8-champagner-64.png" fluid alt="Responsive image"></b-img>
            <b-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, o </b-card-text>
            <b-btn><router-link v-bind:to="'/sektempfang'">Mehr &raquo;</router-link></b-btn>
          </b-card>

          <b-card bg-variant="dark" header="DINNERMUSIK" text-variant="white" class="text-center">
            <b-img src="./../assets/icons8-essen-64.png" fluid alt="Responsive image"></b-img>
            <b-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, o </b-card-text>
            <b-btn><router-link v-bind:to="'/dinnermusik'">Mehr &raquo;</router-link></b-btn>
          </b-card>

          <b-card bg-variant="dark" header="TANZ & PARTY" text-variant="white" class="text-center">
            <b-img src="./../assets/icons8-partyballons-64.png" fluid alt="Responsive image"></b-img>
            <b-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, o </b-card-text>
            <b-btn><router-link v-bind:to="'/tanzpartymusik'">Mehr &raquo;</router-link></b-btn>
          </b-card>

          <b-card bg-variant="dark" header="AFTER PARTY DJ" text-variant="white" class="text-center">
            <b-img src="./../assets/icons8-dj-64.png" fluid alt="Responsive image"></b-img>
            <b-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, o </b-card-text>
            <b-btn><router-link v-bind:to="'/dj'">Mehr &raquo;</router-link></b-btn>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
    <!-- cards -->
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
