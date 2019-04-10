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
                <div class="skillsets pa-3 teal darken-1">
                  <div
                    v-for="category in skills"
                    :key="category.categoryName"
                    class="mb-4"
                  >
                    <h3 class="title mb-2 white--text font-weight-light">
                      {{ category.categoryName }}
                    </h3>
                    <div
                      v-for="categorySkill in category.categorySkills"
                      :key="categorySkill.name"
                    >
                      <h4 class="sub-title teal--text text--lighten-4 font-weight-light">
                        {{ categorySkill.name }}
                      </h4>
                      <v-progress-linear
                        v-model="categorySkill.value"
                        class="mt-1 mb-2"
                        color="teal darken-4"
                        background-color="teal darken-3"
                      />
                    </div>
                  </div>
                  <h3 class="title mb-2 white--text font-weight-light">
                    Other skills
                  </h3>
                  <v-chip
                    v-for="skill in uncategorizedSkills"
                    :key="skill"
                    color="teal"
                    text-color="teal lighten-4"
                    class="ml-0 mr-2"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
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
                      class="red darken-3 white--text"
                      href="mailto:patriknil90@gmail.com"
                    >
                      E-mail
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
      subTitle: 'Front End utvecklare',
      skills: [
        {
          categoryName: 'SPA Frameworks',
          categorySkills: [
            {
              name:'React',
              value: 100,
            },
            {
              name: 'Vue.js',
              value: 75,
            },
            {
              name: 'angular',
              value: 65,
            },
          ]
        },
        {
          categoryName: 'Languages',
          categorySkills: [
            {
              name:'JavaScript',
              value: 100,
            },
            {
              name: 'HTML',
              value: 75,
            },
            {
              name: 'TypeScript',
              value: 70,
            },
            {
              name: 'CSS / SASS / LESS',
              value: 65,
            },
          ]
        },
      ],
      uncategorizedSkills: ['Redux', 'Jest', 'Enzyme', 'Axios', 'Jira', 'Confluence', 'Git', 'Gerrit',
      'Azure Devops', 'Scrum', 'SAFe', 'Test Driven Development', 'CI/CD']
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
    font-size: 36px;
    line-height: 1.4;
    @media (min-width: 680px) {
      font-size: 50px;
    }
  }

  .personal-info {
    font-size: 15px;
    line-height: 1.8;
  }

</style>

