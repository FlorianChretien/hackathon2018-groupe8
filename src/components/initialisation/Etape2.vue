<template>
  <div>
    <p>Branchez le support de la peluche</p>
    <img @click="next" src="../../assets/support.png">
  </div>
</template>

<script>
export default {
  name: 'etape2',
  methods: {
    next () {
      this.$emit('etape-valide')
    }
  }
}
</script>

<style scoped>
  img{
    width: 310px;
    margin: 14vh 0;
  }
  p{
    padding: 10vh 0;
  }
</style>
