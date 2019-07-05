<template>
  <div id="app">
        <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import 'src/assets/scss/reset.scss';
  @import 'src/assets/scss/fonts.scss';
 p{
   font-size: 30px;
   font-family: Roboto-Regular;

 }
</style>
