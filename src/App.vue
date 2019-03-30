<template>
  <div class="app-container">
    <h1>{{ message }}</h1>
    <img src="./images/vue_logo.png">
  </div> 
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue!'
    };
  }
};
</script>

<style lang="scss">
  .app-container { 
    text-align: center;
    h1 { font-weight: 100; }
    img { max-width: 90%; }
  }
</style>

