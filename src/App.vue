<template>
  <v-app>
    <v-content>
      <div class="resume-container blue-grey">
        <div class="resume-paper elevation-10">
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              lg4
            >
              <div class="resume-column grey darken-4 white--text">
                <div class="info-column-section">
                  <img
                    class="portrait mt-5 mb-4 elevation-5"
                    src="./images/patrik-nilsson.jpg"
                    alt="Patrik Nilsson portrait"
                  >
                  <div class="presentation-titles text-xs-center">
                    <h1 class="name-title font-weight-thin">
                      Patrik Nilsson
                    </h1>
                    <h2 class="work-title font-weight-light">
                      Front End Developer
                    </h2>
                  </div>
                </div>
              </div>
            </v-flex>
            <v-flex
              xs12
              lg8
            >
              <div class="resume-column">
                <div class="main-section">  
                  <h2 class="main-section-title">
                    Profile
                  </h2>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Patrik Nilsson',
      subTitle: 'Front End utvecklare'
    }
  }
};
</script>

<style lang="scss">
  .resume-container {
    height: 100%;
    padding: 15px;
    @media (min-width: 1264px) {
      padding: 35px;
    }
  }

  .resume-paper { background-color: white; }

  .info-column-section {
    padding: 40px;
    box-sizing: border-box;
  }
  .portrait { 
    display: block;
    width: 175px;
    margin: auto;
    border-radius: 3px;
  }

  .name-title {
    font-family: 'Slabo 27px', serif;
    font-size: 40px;
  }
</style>

