<template>
  <div>
    <p>Pour commencer, scannez <br> le code de la base</p>
    <img :class="{ imgValide: isValide }" src="https://img.icons8.com/color/300/000000/checkmark.png">
    <qrcode-stream :class="{ qrValide: isValide }" @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQrcodeReader from 'vue-qrcode-reader'
Vue.use(VueQrcodeReader)

export default{
  name: 'etape1',
  data: function () {
    return {
      isValide: false
    }
  },
  methods: {
    onDecode (decodedString) {
      console.log(decodedString)
      if (decodedString === 'http://192.168.0.19:8080/initialisation?qr=ok') {
        this.isValide = true
        this.$emit('etape-valide')
      }
    }
  }
}
</script>

<style scoped>
  .qrValide{
    position: relative;
    filter: blur(3px);
  }
  p{
    padding: 10vh 0;
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
