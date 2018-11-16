<template>
  <div class="global-container">
    <etape1 v-if="displayEtape1" @etape-valide="toggleDisplayEtape1" />
    <etape2 v-if="displayEtape2" @etape-valide="toggleDisplayEtape2" />
    <etape3 v-if="displayEtape3" @etape-valide="toggleDisplayEtape3" />
    <div class="container">
      <div :class="[displayEtape1 ? 'circle' : 'circleVide']"></div>
      <div :class="[displayEtape2 ? 'circle' : 'circleVide']"></div>
      <div :class="[displayEtape3 ? 'circle' : 'circleVide']"></div>
    </div>
  </div>
</template>

<script>
import Etape1 from '../components/initialisation/Etape1'
import Etape2 from '../components/initialisation/Etape2'
import Etape3 from '../components/initialisation/Etape3'
import router from '../router'

export default {
  name: 'initialisation',
  components: { Etape1, Etape2, Etape3 },
  data: function () {
    return {
      displayEtape1: true,
      displayEtape2: false,
      displayEtape3: false
    }
  },
  methods: {
    toggleDisplayEtape1 () {
      this.displayEtape1 = false
      this.displayEtape2 = true
    },
    toggleDisplayEtape2 () {
      this.displayEtape2 = false
      this.displayEtape3 = true
    },
    toggleDisplayEtape3 () {
      return router.push('ours')
    }
  }
}
</script>

<style scoped>
  .global-container{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #47BBF4, #3099BC);
  }
  .displayEtape{
    display: inherit;
  }
  .notDisplayEtape{
    display: none;
  }
  .container{
    margin: 0 auto;
    margin-top: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
  }
  .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: white;
  }
  .circleVide {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    opacity: 0.5;
    background-color: #ffffff;
  }
</style>
