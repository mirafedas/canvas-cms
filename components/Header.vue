<template>
  <div class="nav-wrapper">
    <nuxt-link to="/" exact class="nav-link">
      Create project
    </nuxt-link>
    <nuxt-link to="projects" class="nav-link">
      Projects
    </nuxt-link>
    <nuxt-link to="preview" class="nav-link">
      Preview
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: grey;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 10px;
  text-decoration: none;
  color: white;

  &:hover {
    color: orange;
  }
}

.nuxt-link-exact-active, .nuxt-link-active:active {
  border-bottom: 3px solid orange;
}
</style>
