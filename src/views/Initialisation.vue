<template>
  <div>
    <h1>Scannez le code au dos de la peluche</h1>
    <img :class="{ imgValide: isValide }" src="https://img.icons8.com/color/300/000000/checkmark.png">
    <qrcode-stream :class="{ qrValide: isValide }" @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQrcodeReader from 'vue-qrcode-reader'

Vue.use(VueQrcodeReader)

export default {
  name: 'initialisation',
  data: function() {
    return {
      isValide: false
    }
  },
  methods: {
    onDecode (decodedString) {
      console.log(decodedString)
      this.isValide = true
    }
  }
}
</script>

<style scoped>
  .qrValide{
    position: relative;
    filter: blur(3px);
  }
  img{
    display: none;
  }
  .imgValide{
    display: block!important;
    position: absolute;
    top: 16%;
    left: 30%;
    z-index: 9;
  }
</style>
