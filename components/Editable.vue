<template>
  <div
    class="editable-wrapper"
    :style="{
      backgroundImage: `url(${imageURL})`
    }"
  >
    Yes
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      default: 'https://365psd.com/images/previews/712/abstract-green-background-design-vector-illustration-3752.jpg'
    },
    text: {
      type: Array,
      default: () => []
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
