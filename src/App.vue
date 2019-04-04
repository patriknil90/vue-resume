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
              md4
              lg3
            >
              <div class="resume-column">
                <img
                  class="portrait"
                  src="./images/patrik-nilsson.jpg"
                  alt="Patrik Nilsson portrait"
                >
              </div>
            </v-flex>
            <v-flex
              xs12
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
                      Front End Developer
                    </h2>
                    <p class="personal-info grey--text text--darken-1 font-weight-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus reprehenderit dignissimos laborum quos nisi hic dolorum, illum officia. Expedita voluptate ut quidem unde incidunt voluptatibus, at enim quas nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta quasi, quisquam totam, iusto dolorem quod, voluptatibus a minus eligendi quae culpa deserunt itaque maxime. Unde quas in minima repellendus.
                    </p>
                    <v-btn
                      depressed
                      class="blue darken-1 white--text"
                      href="https://www.linkedin.com/in/patriknil90/"
                      target="__blank"
                    >
                      Linkedin
                    </v-btn>
                    <v-btn
                      depressed
                      class="blue-grey darken-4 white--text"
                      href="https://github.com/patriknil90"
                      target="__blank"
                    >
                      Github
                    </v-btn>
                    <v-btn
                      depressed
                      class="indigo white--text"
                      href="https://www.facebook.com/patriknil90"
                      target="__blank"
                    >
                      Facebook
                    </v-btn>
                  </div>
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
    font-size: 50px;
    line-height: 1.4;
  }

  .personal-info {
    font-size: 15px;
    line-height: 1.8;
  }

</style>

