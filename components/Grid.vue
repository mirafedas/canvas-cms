<template>
  <div
    class="grid-wrapper"
    :style="{
      'grid-template-columns': `repeat(${selectedProject.columns}, ${selectedProject.width})`,
      'grid-template-rows': `repeat(${selectedProject.rows}, ${selectedProject.height})`,
      'grid-gap': `${selectedProject.gridGap}`
    }"
  >
    <GridItem
      v-for="index in itemsNumber"
      :key="index"
      :item="selectedProject.content[index - 1] || {}"
    />
  </div>
</template>

<script>
import GridItem from '../components/GridItem'

export default {
  components: {
    GridItem
  },
  computed: {
    selectedProject () {
      return this.$store.state.selectedProject
    },
    itemsNumber () {
      if (this.selectedProject.columns && this.selectedProject.rows) {
        return this.selectedProject.columns * this.selectedProject.rows
      }
      return 1
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
}
</style>
