<template>
  <v-app>
    <v-content>
      <div class="pa-2 app-container">
        <h1 class="resume-title grey--text text--darken-3">
          {{ title }}
        </h1>
        <h3 class="my-3 headline indigo--text text--darken-1">
          ✦
        </h3>
        <p class="grey--text text--darken-2 presentation-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio eius ad quaerat blanditiis veniam asperiores vel amet sed velit. Ab possimus unde reiciendis quisquam vitae reprehenderit aut. Optio, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur a quia laboriosam vel voluptas illum maxime ut libero quasi expedita! Facere eos aliquam expedita reprehenderit quisquam alias repellat perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel, porro reprehenderit error voluptatibus ab nostrum, molestias soluta quidem cupiditate ipsa reiciendis possimus? Omnis numquam quam, tempore eum quo fugiat?
        </p>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Front End Developer'
    }
  }
};
</script>

<style lang="scss">
  .app-container { 
    text-align: center;
    .resume-title { 
      font-family: 'Lora', serif;
      font-size: 56px;
    }
    .presentation-text {
      max-width: 80%;
      font-size: 16px;
      line-height: 35px;
      margin: auto;
    }
  }
</style>

