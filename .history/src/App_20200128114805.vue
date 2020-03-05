<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button class="jj">Hello Vue!</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

$(function() {
  $('.jj').click(function(){
    alert('123');
  });
});
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
