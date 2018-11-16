<template>
  <div>
    <p>Renseignez un mot de passe</p>
    <p>Ce mot de passe permet à l'adulte <br> d'activer les fonctions de l'application</p>
    <div class="container">
      <input type="password" v-model="mdp1" maxlength="1" />
      <input type="password" v-model="mdp2" maxlength="1" />
      <input type="password" v-model="mdp3" maxlength="1" />
      <input type="password" v-model="mdp4" maxlength="1" />
    </div>
    <button class="button" @click="validForm">
      <a href="#">Valider</a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'etape3',
  data: function () {
    return {
      mdp1: '',
      mdp2: '',
      mdp3: '',
      mdp4: ''
    }
  },
  methods: {
    validForm () {
      if (this.mdp1 === '1' && this.mdp2 === '2' && this.mdp3 === '3' && this.mdp4 === '4') {
        this.$emit('etape-valide')
      } else {
        console.log('erreur')
      }
    }
  }
}
</script>

<style scoped>
  .container{
    width: 250px;
    margin: 20vh auto 14vh auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  input[type='password']{
    background-color: #3eaede;
    width: 54px;
    border: none;
    border-bottom: 4px solid white;
    border-radius: 3px;
    height: 40px;
    text-align: center;
    font-size: 35px;
    color: white;
  }
  p:nth-child(1){
    padding-top: 10vh;
  }
  p:nth-child(2){
    padding-top: 3vh;
    font-size: 22px!important;
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
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    padding-top: 3px;
    color: #3099BC!important;
    text-decoration: none;
  }
</style>
