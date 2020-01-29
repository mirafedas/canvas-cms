<template>
  <div class="list-wrapper">
    <Header />
    <div class="projects-list">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    ProjectCard,
    Header,
    Footer
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
}
</script>

<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
  overflow: scroll;
}
</style>
