<template>
  <div class="home">
    <img src="../assets/LOGO.png">
    <p>Apprenez le tri à vos enfants <br> pour un avenir plus propre</p>
    <div class="circle"></div>
    <div class="button">
      <router-link to="/initialisation">Démarrer</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
  img{
    width: 160px;
    margin-top: 35vh;
  }
  .home{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #47BBF4, #3099BC);
  }
  .button{
    margin: 0 auto;
    width: 228px;
    height: 44px;
    font-size: 25px;
    background-color: white;
    border-radius: 22px;
    border: 0;
    border-bottom: 3px solid #dedede;
  }
  a{
    display: inline-block;
    line-height: normal;
    padding-top: 3px;
    color: #3099BC!important;
    text-decoration: none;
  }
  .circle {
    margin: 30px auto;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 0;
    background-color: white;
  }
</style>
