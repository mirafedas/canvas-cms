<template>
  <div
    class="grid-wrapper"
    :style="{
      'grid-template-columns': `repeat(${selectedProject.elements[0].columns}, ${selectedProject.elements[0].width})`,
      'grid-template-rows': `repeat(${selectedProject.elements[0].rows}, ${selectedProject.elements[0].height})`,
      'grid-gap': `${selectedProject.elements[0].gridGap}`
    }"
  >
    <GridItem
      v-for="index in itemsNumber"
      :key="index"
      :item="selectedProject.elements[0].content[index - 1] || {}"
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
      if (this.selectedProject.elements[0].columns && this.selectedProject.elements[0].rows) {
        return this.selectedProject.elements[0].columns * this.selectedProject.elements[0].rows
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
