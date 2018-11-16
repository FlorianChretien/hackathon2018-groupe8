<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'quadranta';
  src: url('../src/assets/Quicksand/Quicksand-Medium.ttf');
}
@font-face {
  font-family: 'quadrantaBold';
  src: url('../src/assets/Quicksand/Quicksand-Bold.ttf');
}
@font-face {
  font-family: 'quadrantaLight';
  src: url('../src/assets/Quicksand/Quicksand-Light.ttf');
}
#app {
  $bleu1: #47BBF4;
  $bleu2: #3099BC;
  $bleu3: #0E3E66;
  $vert: #28C9BD;
  $jaune: #FFC06C;
  text-align: center;
  h1, h2, h3, p{
    margin: 0;
  }
  h1, h2, h3, a, p, button, span{
    color: white;
    font-family: 'quadrantaBold', Verdana;
  }
  h1{
    font-size: 61px;
  }
  p{
    font-size: 25px;
  }
}
</style>
