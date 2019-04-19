<template>
  <p class="personal-info grey--text text--darken-1 font-weight-light">
    {{ presentation }}
  </p>
</template>

<script>
export default {
    data() {
        return {
            presentation: `A structured and result-oriented Front End developer specializing in Single Page applications.
            With his agile approach, focus on problem solving, as well as experience of Vue, Angular and primarily React, he wants to contribute value to end-users and business without being locked in to one SPA framework.
            In addition to his experience building Single Page Applications, Patrik has developed web applications and websites professionally since 2014.
            He has experienced the pros and cons of working in both small startups and global organizations.`
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

