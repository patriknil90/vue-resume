<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex xs24>
        <div class="welcome-section text-xs-center">  
          <h1 class="name-title font-weight-thin">
            Patrik Nilsson
          </h1>
          <h2 class="work-title font-weight-light">
            Front End developer
          </h2>
          <resume-contact-buttons />
        </div>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm5
        md4
        lg3
        class="teal darken-1"
      >
        <img
          class="portrait"
          src="../../images/patrik-nilsson.jpg"
          alt="Patrik Nilsson Front End developer"
        >
        <resume-skills class="hidden-xs-only" />
      </v-flex>
      <v-flex
        xs12
        sm7
        md8
        lg9
      >
        <resume-skills class="hidden-sm-and-up" />
        <resume-experience />
        <resume-education />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Skills from './Skills.vue'
import Presentation from './Presentation.vue'
import ContactButtons from './ContactButtons.vue'
import WorkExperience from './WorkExperience.vue'
import Education from './Education.vue'

export default {
  components: {
    'resume-skills': Skills,
    'resume-contact-buttons': ContactButtons,
    'resume-experience': WorkExperience,
    'resume-education': Education
  }
}
</script>


<style lang="scss">
  .welcome-section {
    padding: 75px 20px;
    background-color: #F5F5F5;
    @media (min-width: 680px) {
      -webkit-box-shadow: inset 0px 0px 25px 0px rgba(0,0,0,0.1);
      -moz-box-shadow: inset 0px 0px 25px 0px rgba(0,0,0,0.1);
      box-shadow: inset 0px 0px 25px 0px rgba(0,0,0,0.15);
      padding: 100px;
    }
  }

  .info-column-section {
    padding: 40px;
    box-sizing: border-box;
  }

  .portrait { 
    display: block;
    width: 100%;
  }

  .name-title {
    font-family: 'Slabo 27px', serif;
    font-size: 40px;
    line-height: 1.4;
    color: #323c56;
    @media (min-width: 680px) {
      font-size: 62px;
    }
  }

  .work-title {
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 64px;
    @media (min-width: 680px) {
      font-size: 28px;
    }
  }

  .section-title {
    font-size: 28px;
    font-weight: 400;
    color: #323c56;
    line-height: 1.3;
    margin-bottom: 14px;
  }

  .period-in-title {
    display: inline-block;
    @media (max-width: 599px) {
      display: block;
    }
  }

  .milestone-section {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-presentation {
    line-height: 1.6;
    color: #616161;
  }
</style>

