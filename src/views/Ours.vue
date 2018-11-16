<template>
  <div>
    <div ref="interfacePop">
      <video autoplay loop poster="../assets/ours1.png" class="video">
        <source src="../assets/Pop-ours.mp4" type="video/mp4">
      </video>
    </div>
    <div class="interface-ours" ref="interfaceOurs">
      <video autoplay loop poster="../assets/ours1.png" :class="[video1 ? 'videoActive' : 'videoCacher', 'video']">
        <source src="../assets/ourson-content.mp4" type="video/mp4">
      </video>
      <video autoplay loop poster="../assets/ours1.png" :class="[video2 ? 'videoActive' : 'videoCacher', 'video']">
        <source src="../assets/ourson-moyencontent.mp4" type="video/mp4">
      </video>
      <video autoplay loop poster="../assets/ours1.png" :class="[video3 ? 'videoActive' : 'videoCacher', 'video']">
        <source src="../assets/ourson-pascontent.mp4" type="video/mp4">
      </video>

      <h1>Otalo</h1>

      <div class="container-histoire">
        <a @click="toggleInterface">Accéder aux histoires</a>
      </div>

      <button @click="decrement">
        <a>-</a>
      </button>
      <div class="container-barre">
        <div class="border-barre">
          <div class="barre" ref="barre"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <button @click="increment">
        <a>+</a>
      </button>
      <p class="phrase">Taux de bonheur</p>
    </div>

    <div class="interface-histoire" ref="interfaceHistoire">
      <button @click="toggleInterface">X</button>
      <h1>Histoire</h1>
      <div class="container-card">
        <div class="card">
          <img src="../assets/baseline-play_circle_outline-24px.png">
          <p>Un début <br> difficile</p>
        </div>
        <div class="card">
          <img src="../assets/baseline-play_circle_outline-24px.png">
          <p>Raz-de-marée <br> ménager</p>
          <span>1</span>
        </div>
        <div class="card">
          <img src="../assets/baseline-lock-closed-24px.png">
          <p>Déferlement de canettes</p>
          <span>2</span>
        </div>
        <div class="card">
          <img src="../assets/baseline-lock-closed-24px.png">
          <p>Naufrage de <br> bananes</p>
          <span>3</span>
        </div>
        <div class="card">
          <img src="../assets/baseline-lock-closed-24px.png">
          <p>Ecume de <br> bouteilles en verre</p>
          <span>4</span>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ours',
  data: function () {
    return {
      barreWidth: 150,
      video1: false,
      video2: false,
      video3: true
    }
  },
  methods: {
    increment () {
      if (this.barreWidth < 475) {
        this.barreWidth += 20
      }
      if (this.barreWidth < 166) {
        this.video1 = false
        this.video2 = false
        this.video3 = true
      } else if (this.barreWidth > 166 && this.barreWidth < 332) {
        this.video1 = false
        this.video2 = true
        this.video3 = false
      } else if (this.barreWidth > 332) {
        this.video1 = true
        this.video2 = false
        this.video3 = false
      }
      this.$refs.barre.style.width = this.barreWidth + 'px'
    },
    decrement () {
      if (this.barreWidth > 0) {
        this.barreWidth -= 20
      }
      if (this.barreWidth < 166) {
        this.video1 = false
        this.video2 = false
        this.video3 = true
      } else if (this.barreWidth > 166 && this.barreWidth < 332) {
        this.video1 = false
        this.video2 = true
        this.video3 = false
      } else if (this.barreWidth > 332) {
        this.video1 = true
        this.video2 = false
        this.video3 = false
      }
      this.$refs.barre.style.width = this.barreWidth + 'px'
    },
    toggleInterface () {
      if (this.$refs.interfaceHistoire.style.display === 'none') {
        this.$refs.interfaceHistoire.style.display = 'block'
        this.$refs.interfaceOurs.style.filter = 'blur(8px)'
      } else {
        this.$refs.interfaceHistoire.style.display = 'none'
        this.$refs.interfaceOurs.style.filter = 'blur(0px)'
      }
    }
  },
  mounted: function () {
    console.log(this.$refs.interfaceOurs.style.display)
    this.$refs.interfaceOurs.style.display = 'none'
    let vm = this
    setTimeout(function () {
      vm.$refs.interfacePop.style.display = 'none'
      vm.$refs.interfaceOurs.style.display = 'block'
    }, 6000)
  }
}
</script>

<style lang="scss" scoped>
  .interface-ours{
    z-index: 9;
    height: 100vh;
  }
  .interface-histoire{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
  }
  .interface-histoire h1{
    position: absolute;
    top:2%;
    left:43%;
    color: #383838!important;
  }
  .interface-histoire button{
    position: absolute!important;
    top: 5vh!important;
    left: 165vh!important;
    background-color: #ffc06c!important;
    border-bottom: 2px solid #d69e54!important;
    cursor: pointer!important;
  }
  .container-card{
    margin: 10vh;
    margin-top: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .card{
    width: 360px;
    height: 204px;
    background-color: #383838;
    border-bottom: 3px solid #1d1d1d;
    border-radius: 10px;
    margin: 3vh;
  }
  .card:nth-child(1){
    background-color: #ffc06c;
    border-bottom: 3px solid #deae6e;
  }
  .card:nth-child(2){
    background-color: #28c9bd;
    border-bottom: 3px solid #1d9d93;
  }
  .card img{
    margin-top: 5vh;
  }
  h1{
    position: absolute;
    top: 3%;
    left: 5%;
  }
  .container-histoire{
    position: absolute;
    top: 5vh;
    left: 135vh;
    width: 336px;
    height: 44px;
    font-size: 25px;
    background-color: white;
    border-radius: 22px;
    border: 0;
    border-bottom: 3px solid #dedede;
  }
  .container-histoire a{
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    padding-top: 3px;
    color: #3099BC!important;
    text-decoration: none;
  }
  .videoCacher{
    display: none;
  }
  .video {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: -100;
    background: url(../assets/ours1.png) no-repeat;
    background-size: cover;
  }
  .container-barre{
    position: absolute;
    top: 90vh;
    left: 35%;
  }
  .border-barre{
    width: 500px;
    height: 46px;
    border-radius: 50px;
    z-index: 9;
    margin: 0 auto;
    font-size: 25px;
    background-color: white;
    border-bottom: 3px solid #dedede;
  }
  .barre{
    position: absolute;
    top: 9px;
    left: 10px;
    width: 150px;
    max-width: 478px;
    height: 30px;
    z-index: 9;
    margin: 0 auto;
    font-size: 25px;
    background-image: linear-gradient(to bottom right, #ff0000, #ce0d0d);
    border-radius: 22px;
    border: 0;
  }
  button{
    z-index: 999;
  }
  button:last-of-type{
    position: absolute;
    top: 90vh;
    left: 71%;
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: #28c9bd;
    border: 0;
    border-bottom: 3px solid #1d9d93;
    border-radius: 50%;
  }
  button:first-of-type{
    position: absolute;
    top: 90vh;
    left: 28%;
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: #dd0909;
    border: 0;
    border-bottom: 3px solid #af0c0c;
    border-radius: 50%;
  }
  button:first-of-type a{
    position: absolute;
    top: -4px;
    left: 18px;
    cursor: pointer;
  }
  button:last-of-type a{
    position: absolute;
    top: -4px;
    left: 13px;
    cursor: pointer;
  }
  .phrase{
    position: absolute;
    left: 45%;
    top: 96vh;
  }
  .circle{
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 0;
    background-color: #454545;
    z-index: 9999;
    position: absolute;
    top: 2.2vh;
  }
  .circle:nth-child(2){
    left: 7vh;
  }
  .circle:nth-child(3){
    left: 17vh;
  }
  .circle:nth-child(4){
    left: 27vh;
  }
  .circle:nth-child(5){
    left: 38vh;
  }
  .circle:nth-child(6){
    left: 48vh;
  }
</style>
