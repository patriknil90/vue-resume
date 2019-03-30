<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div class="app-container">
        <h1>{{ message }}</h1>
        <img src="./images/vue_logo.png">
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue!'
    }
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

