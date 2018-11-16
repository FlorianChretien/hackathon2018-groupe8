<template>
  <div>
    <h1>Branchez le support de la peluche</h1>
    <img src="https://fakeimg.pl/250x100/">
    <p @click="next">Prénom</p>
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
