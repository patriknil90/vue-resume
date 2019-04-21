<template>
  <div class="pa-3 teal darken-1">
    <div
      v-for="category in skills"
      :key="category.categoryName"
      class="mt-1 mb-4"
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
</template>

<script>
export default {
  data() {
    return {
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
              name: 'Angular',
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
}
</script>

