<template>
  <div>
    <h1>Die Band</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <b-container>
      <div class="mt-3">
        <b-card-group deck>
        <member-input v-for="member in members"  v-bind:key="member.id" :member=member></member-input>
        </b-card-group>
      </div>
    </b-container> -->
  <!-- cards -->
    <!-- <b-container>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="dark" header="Timmy" text-variant="white" class="text-center">
            <b-card-text>Bandleader // Keys // Vocals</b-card-text>
            <b-img src="./../assets/musiker/timmy.png" fluid alt="Responsive image"></b-img>
          </b-card>

          <b-card bg-variant="dark" header="David" text-variant="white" class="text-center">
            <b-card-text>Frontman // Vocals</b-card-text>
            <b-img src="./../assets/musiker/david.png" fluid alt="Responsive image"></b-img>
          </b-card>

          <b-card bg-variant="dark" header="Francis" text-variant="white" class="text-center">
            <b-card-text>Drums // Vocals</b-card-text>
            <b-img src="./../assets/musiker/francis.png" fluid alt="Responsive image"></b-img>
          </b-card>
        </b-card-group>
      </div>

      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="dark" header="Daniel" text-variant="white" class="text-center">
            <b-card-text>Trombone</b-card-text>
            <b-img src="./../assets/musiker/daniel.png" fluid alt="Responsive image"></b-img>
          </b-card>

          <b-card bg-variant="dark" header="Joscha" text-variant="white" class="text-center">
            <b-card-text>Bass</b-card-text>
            <b-img src="./../assets/musiker/joscha.png" fluid alt="Responsive image"></b-img>
          </b-card>

          <b-card bg-variant="dark" header="Dave" text-variant="white" class="text-center">
            <b-card-text>Guitar</b-card-text>
            <b-img src="./../assets/musiker/dave.png" fluid alt="Responsive image"></b-img>
          </b-card>
        </b-card-group>
      </div>

      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="dark" header="Michi" text-variant="white" class="text-center">
            <b-card-text>Saxophone</b-card-text>
            <b-img src="./../assets/musiker/michi.png" fluid alt="Responsive image"></b-img>
          </b-card>

          <b-card bg-variant="dark" header="Stephan" text-variant="white" class="text-center">
            <b-card-text>Trumpet</b-card-text>
            <b-img src="./../assets/musiker/stephan.png" fluid alt="Responsive image"></b-img>
          </b-card>

          <b-card bg-variant="dark" header="Sepp" text-variant="white" class="text-center">
            <b-card-text>Technik</b-card-text>
            <b-img src="./../assets/musiker/sepp.png" fluid alt="Responsive image"></b-img>
          </b-card>
        </b-card-group>
      </div>
    </b-container> -->
    <!-- cards -->
  </div>
</template>

<script>
import Member from './Member.vue'

export default {
  name: 'BandView',
  data () {
    return {
      members: [
        {
          id: 1,
          name: 'Timmy',
          role: 'Bandleader // Keys // Vocals',
          img: './../../static/musiker/timmy.png'
        },
        {
          id: 2,
          name: 'David',
          role: 'Frontman // Vocals',
          img: './../../static/musiker/david.png'
        },
        {
          id: 3,
          name: 'Francis',
          role: 'Drums // Vocals',
          img: './../../static/musiker/francis.png'
        },
        {
          id: 4,
          name: 'Daniel',
          role: 'Trombone',
          img: './../../static/musiker/daniel.png'
        },
        {
          id: 5,
          name: 'Joscha',
          role: 'Bass',
          img: './../../static/musiker/joscha.png'
        },
        {
          id: 6,
          name: 'Dave',
          role: 'Guitar',
          img: './../../static/musiker/dave.png'
        },
        {
          id: 7,
          name: 'Michi',
          role: 'Sax',
          img: './../../static/musiker/michi.png'
        },
        {
          id: 8,
          name: 'Stephan',
          role: 'Trumpet',
          img: './../../static/musiker/stephan.png'
        },
        {
          id: 9,
          name: 'Sepp',
          role: 'Tech // DJ',
          img: './../../static/musiker/sepp.png'
        }
      ],
      msg: 'Welcome to the Brass Tacks Live Band Web App'
    }
  },
  components: {
    'member-input': Member
  }
}
</script>

<style>
</style>
