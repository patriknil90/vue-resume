<template>
  <v-app>
    <v-content>
      <div class="app-container blue-grey">
        <div class="app-paper elevation-10">
          <router-view />
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
  .app-container {
    height: 100%;
    padding: 3px;
    @media (min-width: 680px) {
      padding: 20px;
    }
    @media (min-width: 1264px) {
      padding: 35px;
    }
  }

  .app-paper { 
    background-color: white;
    max-width: 2000px;
    margin: 0 auto;
  }

  .main-section { padding: 30px; }
</style>

