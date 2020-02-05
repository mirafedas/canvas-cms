<template>
  <div
    class="editable-wrapper"
    :style="{
      backgroundImage: `url('${item.image}')`,
      width: width,
      height: height,
    }"
  >
    <span
      v-for="el in item.text"
      :key="el.string"
      :style="{
        color: el.color,
        fontSize: el.fontSize,
        justifySelf: el.justify,
        alignSelf: el.align
      }"
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
      type: Object,
      default: () => {}
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
  display: flex;
  min-height: 100px;
  min-width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
