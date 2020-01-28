<template>
<div class="wrapper">
  <ProjectsList />
</div>
</template>

<script>
import ProjectsList from '../components/ProjectsList'

export default {
  components: {
    ProjectsList
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
</style>
