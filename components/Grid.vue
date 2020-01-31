<template>
  <div
    class="grid-wrapper"
    :style="{
      'grid-template-columns': `repeat(${columns}, ${width})`,
      'grid-template-rows': `repeat(${rows}, ${height})`,
      'grid-gap': `${gridGap}`,
    }"
  >
    <GridItem
      v-for="index in getItemsNumber()"
      :key="index"
      :item="content[index-1]"
    />
  </div>
</template>

<script>
import GridItem from '../components/GridItem'

export default {
  components: {
    GridItem
  },
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    },
    columns: {
      type: String,
      default: '4'
    },
    rows: {
      type: String,
      default: '4'
    },
    gridGap: {
      type: String,
      default: '0px'
    },
    content: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getItemsNumber () {
      console.log(this.content)
      return this.columns * this.rows
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
}
</style>
