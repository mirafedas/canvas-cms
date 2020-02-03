<template>
  <div class="preview-wrapper">
    <div class="info-wrapper">
      <h2 class="name">
        {{ selectedProject.name || "Test project" }}
      </h2>
      <span class="author"><b>Author:</b> {{ selectedProject.author || "Old Sad Panda" }}</span>
      <span class="description">{{ selectedProject.description || "Pandas are awesome" }}</span>
    </div>
    <div class="component-wrapper">
      <Grid :selected-project="selectedProject" />
    </div>
  </div>
</template>

<script>
import Grid from '../components/Grid'

export default {
  components: {
    Grid
  },
  computed: {
    selectedProject () {
      return this.$store.state.selectedProject
    }
  },
  mounted () {
    if (!this.selectedProject.elements[0].content) {
      this.selectedProject.elements[0].content = []
      console.log(this.selectedProject)
    }
  },
  methods: {
    // duplicate () {
    //   this.$store.commit('duplicateProject', this.project.id)
    // },
    // edit () {
    //   this.$store.commit('changeSelectedProject', this.project)
    // }
  }
}
</script>

<style lang="scss" scoped>
.preview-wrapper {
  display: flex;
  height: 100%;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 200px;
  background-color: lightgreen;
}

.name, .author, .description {
  margin: 5px 0;
}

.author {
  font-size: 12px;
}

.component-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
}
</style>
