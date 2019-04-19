<template>
  <div class="grey lighten-4">
    <div class="main-section">
      <h2 class="section-title">
        Work experience
      </h2>
      <div
        v-for="experience in experiences"
        :key="experience.workTitle+experience.employer"
        class="experience-section"
      >
        <h3 class="section-subtitle mb-1">
          <span class="mr-2">{{ experience.workTitle }} @ {{ experience.employer }}</span>
          <span class="period-in-title font-weight-light">{{ experience.from }} - {{ experience.to }}</span>
        </h3>
        <p
          class="experience-presentation"
          v-html="experience.presentation"
        />
      </div>
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
                    presentation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita eveniet adipisci aliquid id provident nobis quisquam corrupti neque cum a eaque maiores eos accusantium veniam, repellat molestias. Quia, laboriosam?'
                },
                {
                    workTitle: 'Front End Ninja',
                    employer: 'Vendium AB',
                    from: '2016-06',
                    to: '2018-02',
                    presentation: 'The work consisted primarily of transforming a large-scale web-based business and project management system from a traditional MVC structure to a Single Page Application built with Angular (2+) and TypeScript. The application consists of a GUI, of which I had the responsibility to develop, and a GraphQL API that was consumed by the GUI.<br><br>Vendium was at the time a startup with 3-5 employees and operational partners / co-owners. This required a high degree of responsibility, structure and transparency to drive the product and the company forward.'
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

<style lang="scss">
    .experience-section {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

</style>

