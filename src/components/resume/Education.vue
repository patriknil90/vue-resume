<template>
  <div class="main-section grey lighten-4">
    <h2 class="section-title">
      Education
    </h2>
    <div
      v-for="education in educations"
      :key="education.title"
      class="milestone-section" 
    >
      <h3 class="section-subtitle mb-1">
        <span class="mr-2">{{ education.title }}</span>
        <span class="period-in-title font-weight-light">{{ education.period }}</span>
      </h3>
      <h4 class="font-weight-regular grey--text text--darken-3 mb-2">
        {{ education.description }}
      </h4>
      <ul v-if="education.focusPoints">
        <li
          v-for="focus in education.focusPoints"
          :key="focus"
        >
          {{ focus }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          title: 'In-depth training on agile working methods',
          description: '10 hours intensive course divided on three occasions',
          focusPoints: [
            'Advantages and disadvantages to other methodologies.',
            'How to adapt working methods according to the unique prerequisites of a project and a team.',
            'What is value and how do we achieve effective value creation?',
            'Workshops and practical training.',
          ],
          period: '2019-02',
        },
        {
          title: 'Elasticsearch basics - Findwise, Gothenburg',
          description: 'One day course',
          focusPoints: [
            'One day of lectures, work shops and practical training of Elasticsearch and Kibana for a group of Software developers.',
          ],
          period: '2018-08',
        },
        {
          title: 'Bachelor in Systems Science - University of Gothenburg',
          description: 'The program aims to give knowledge about IT and how to think about IT in regards of implementation in organizations and how it is to be used by people. My key takeaways from three years in the program is a fundamental ground in object oriented programming, modelling and the practical implementation of these models and how to broadly and deeply incorporate IT in organizations. I\'ve also made contact with lots of great people that I wouldn\'t otherwise which I\'m thankful for.',
          period: '2013-09 - 2016-06',
        },
      ]
    }
  }
}
</script>
