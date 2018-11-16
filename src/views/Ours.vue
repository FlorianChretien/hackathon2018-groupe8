<template>
  <div class="container-ours">
    <div class="barre"></div>
    <div class="container-button">
      <button>+</button>
      <button>-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ours'
}
</script>

<style lang="scss" scoped>
  .container-ours{
    width: 160vh;
    height: 100vh;
    background: url('../assets/ours1.png');
  }
  .barre{
    width: 300px;
    height: 50px;
    background-color: red;
    z-index: 9;
  }
  .container-button{
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 9;
    button{

    }
  }
</style>
