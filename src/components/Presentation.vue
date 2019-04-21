<template>
  <p class="personal-info grey--text text--darken-1 font-weight-light">
    {{ presentation }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      presentation: `I'm a structured and result-oriented Front End developer specializing in Single Page applications.
          With an agile approach and focus on problem solving I want to contribute value to end-users and businesses without being locked in to one SPA framework.
          In addition to my experience building Single Page Applications, I've developed web applications and websites professionally since 2014.
          I've had the oppurtunity to experience the pros and cons of working in both small startups and global organizations.`
    }
  }
}
</script>

<style>
  .personal-info {
    font-size: 15px;
    line-height: 1.8;
  }
</style>

