<template>
  <div class="personal-info grey--text text--darken-1 font-weight-light">
    <p
      v-for="presentationType in presentation"
      :key="presentationType"
      v-html="presentationType"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      presentation: {
        sitePurpose: `<span style="font-style: italic;">This site was created during a spare time project as a way for me to familiarize myself a bit 
          more with Vue.js, WebPack, Babel and Amazon Web Services.
          It will also serve as my personal digital resume. The source code for this site can be found 
          <a href="https://github.com/patriknil90/vue-resume" target="_blank">here</a>.</span>`,
        work: `I'm a structured and result-oriented Front End developer specializing in Single Page applications.
          With an agile approach and focus on problem solving I want to contribute value to end-users and businesses without being locked in to one SPA framework.
          In addition to my experience building Single Page Applications, I've developed web applications and websites professionally since 2014.
          I've had the oppurtunity to experience the pros and cons of working in both small startups and global organizations.` 
      }
    }
  }
}
</script>

<style lang="scss">  
  .personal-info {
    font-size: 15px;
    line-height: 1.8;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>

