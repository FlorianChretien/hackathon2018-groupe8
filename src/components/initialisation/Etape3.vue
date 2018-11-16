<template>
  <div>
    <h1>Renseignez un mot de passe</h1>
    <p>Ce mot de passe permet à l'adulte d'activer les fonctions de l'application</p>
    <div class="container">
      <input type="text" v-model="mdp1" />
      <input type="text" v-model="mdp2" />
      <input type="text" v-model="mdp3" />
      <input type="text" v-model="mdp4" />
    </div>
    <button @click="validForm">Valider</button>
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
      }
    }
  }
}
</script>

<style scoped>
  .container{
    width: 250px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  input[type='text']{
    width: 30px;
    border: none;
    border-bottom: 2px solid black;
  }
</style>
