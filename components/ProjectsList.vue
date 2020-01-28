<template>
  <div class="wrapper">
    <div class="projects-list">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'

export default {
  components: {
    ProjectCard
  },
  data: () => {
    return {
      // projects: []
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
