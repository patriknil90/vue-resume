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
              sm5
              md4
              lg3
            >
              <div class="resume-column">
                <img
                  class="portrait"
                  src="./images/patrik-nilsson.jpg"
                  alt="Patrik Nilsson portrait"
                >
                <resume-skills class="hidden-xs-only" />
              </div>
            </v-flex>
            <v-flex
              xs12
              sm7
              md8
              lg9
            >
              <div class="resume-column">
                <div class="main-section">  
                  <div class="presentation-titles">
                    <h1 class="name-title font-weight-thin">
                      Patrik Nilsson
                    </h1>
                    <h2 class="work-title font-weight-light mb-4">
                      Front End developer
                    </h2>
                    <resume-presentation />
                    <resume-contact-buttons />
                  </div>
                </div>
                <resume-skills class="hidden-sm-and-up" />
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
  name: 'App'
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

  .main-section { padding: 10px 30px; }

  .resume-paper { background-color: white; }

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
    font-size: 36px;
    line-height: 1.4;
    @media (min-width: 680px) {
      font-size: 50px;
    }
  }

</style>

