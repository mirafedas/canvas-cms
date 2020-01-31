<template>
  <div class="main-wrapper">
    <StartPage />
  </div>
</template>

<script>
import StartPage from '../components/StartPage'

export default {
  components: {
    StartPage
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
