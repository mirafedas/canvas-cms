<template>
<div class="wrapper">
  <Header />
  <ProjectsList />
  <Footer />
</div>
</template>

<script>
import ProjectsList from '../components/ProjectsList'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    ProjectsList,
    Header,
    Footer
  }

}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
</style>
