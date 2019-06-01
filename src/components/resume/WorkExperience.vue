<template>
  <div class="main-section">
    <h2 class="section-title">
      Work experience
    </h2>
    <div
      v-for="experience in experiences"
      :key="experience.workTitle+experience.employer"
      class="milestone-section" 
    >
      <h3 class="section-subtitle mb-1">
        <span class="mr-2">{{ experience.workTitle }} @ {{ experience.employer }}</span>
        <span class="period-in-title font-weight-light">{{ experience.from }} - {{ experience.to }}</span>
      </h3>
      <p
        class="section-presentation"
        v-html="experience.presentation"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          workTitle: 'Consultant',
          employer: 'Evry Sweden AB',
          from: '2018-02',
          to: 'Present',
          presentation: 'At Evry I have been assigned to a variety of projects and software management commitments, mainly as a Front End developer at global organizations within the manufacturing industry. As a consultant, my main goal is to bring value within my area of expertise (SPA development) and developing my ability to think high level of a project, product, an organization and end users. I have also focused on staying on top of the latest trends within web development and broadening my knowledge within other areas like toolchain and the implementation of CI/CD Pipelines.'
        },
        {
          workTitle: 'Front End Ninja',
          employer: 'Vendium AB',
          from: '2016-06',
          to: '2018-02',
          presentation: 'The work consisted primarily of transforming a large-scale web-based business and project management system from a traditional MVC structure to a Single Page Application built with Angular (2+) and TypeScript. The application consists of a GUI, of which I had the responsibility to develop, and a GraphQL API that was consumed by the GUI.<br><br>Vendium was at the time a startup with 3-5 employees and operational partners / co-owners. This required a high degree of responsibility, structure and transparency to help bring the product and company forward.'
        },
        {
          workTitle: 'Web Developer / Entrepreneur',
          employer: 'Canevo',
          from: '2014-05',
          to: '2016-12',
          presentation: 'Working as an independent consultant for small businesses, helping them create informational websites about their company, products and services. The customers were both B2B and B2C oriented businesses operating in different business areas such as restaurant, software development, consulting etcetera.'
        },
      ]
    }
  }
}
</script>
