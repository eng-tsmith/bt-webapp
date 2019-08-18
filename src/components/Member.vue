<template>
  <div class="card2">
      <b-card bg-variant="dark"  text-variant="white" class="text-center">
        
        <h1><b-card-text>{{member.name}}</b-card-text></h1>
        <p><b-card-text>{{member.role}}</b-card-text></p>
        <b-img :src="member.img" fluid alt="Responsive image"></b-img>
      </b-card>

<div class="container-fluid main">
  <div class="card profile">
    <div class="card-body profileBody">
      <div class="profilePic">
        <b-img :src="member.img" fluid alt="Responsive image"></b-img>
      </div>
    </div>
    <div class="card-header profileName">
      <h1>{{member.name}}</h1>
    </div>
    <div class="profileInfo">
      <p>{{member.role}}</p>
    </div>

  </div>
</div>

  </div>
</template>

<script>
export default {
  props: ['member'],
  data () {
    return {
      msg: 'Welcome to the Brass Tacks Live Band Web App'
    }
  }
}
</script>

<style>

.card2 {
  border-radius: 200px;
}

.profile {
  background-image: linear-gradient(rgb(190, 115, 20), rgb(237, 194, 26));
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#444;
  width: 250px;
  height: 400px;

  margin: 20px 0 0 20px;
  border-radius:24px;
  border:none;
  box-shadow: 0 37.125px 70px -12.125px rgba(0,0,0,0.2);
  transition:all .3s;
}

.profileName {
  background:transparent;
  border:0;
  text-align:center;
  font-size:16px;
  font-weight:800;
  color:#eee;
}

.isVerified {
  fill: #eee;
  margin:5px;
}

.card-body {
  color:#eee;
  margin-top:1.5em;
}
.avatar {
  border-radius:50%;
  max-width:128px;
  transform: scale(0.95);
  transition:all .5s;
  cursor:pointer;
}
.avatar:hover {
  transform: scale(1);
  box-shadow: 0 37.125px 70px -12.125px rgba(0,0,0,0.2);
}
.profilePic {
  text-align:center;
}
.isOnline {
  text-align:center;
  color:#eee;
}
.profileInfo {
  margin-top:1em;
  font-weight:200;
  font-size:12px;
  color:#eee;
  text-align:center;
}
.actions {
  background:transparent;
  border:0;
  color:#fff;
  display:inline-flex;
}
.actionFirst, .actionSecond {
  width:50%;
  text-align:center;
  fill:#ddd;
  transform: scale(0.8);
  transition:all .3s;
  cursor:pointer;
}
.actionFirst:hover, .actionSecond:hover {
  transform: scale(1);
  fill:#fff;
  
}
</style>
