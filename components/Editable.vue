<template>
  <div
    class="editable-wrapper"
    :style="{
      backgroundImage: `url('${item.image}')`,
      width: width,
      height: height
    }"
  >
    <span
      v-for="el in item"
      :key="el.string"
    >
      {{ el.string }}
    </span>
    </span>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  }
}
</script>

<style lang="scss" scoped>
.editable-wrapper {
  min-height: 100px;
  min-width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
