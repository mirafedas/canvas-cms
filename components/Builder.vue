<template>
  <div class="builder-wrapper">
    <header>
      <div class="project-info-wrapper">
        <button>&#8249; Projects</button>
        <div class="project-info">
          <span>Project name: {{ selectedProject.name }}</span>
          <span>Author: {{ selectedProject.author }}</span>
        </div>
      </div>
      <div class="buttons-wrapper">
        <button>Save</button>
        <nuxt-link to="preview">
          <button>Preview</button>
        </nuxt-link>
      </div>
    </header>
    <div class="main-content-wrapper">
      <aside>
        <button>Add section</button>
      </aside>
      <main>Main</main>
    </div>
    <footer>
      <div>Banner</div>
      <div>Slideshow</div>
      <div>Carousel</div>
      <div>Other...</div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    selectedProject () {
      // if (!this.$store.state.selectedProject) {
      //   return this.$store.projects[0]
      // }

      return this.$store.state.selectedProject
    }
  }
}
</script>

<style scoped>
.builder-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 5px 20px;
  background-color: aquamarine;
}

button {
  height: 30px;
  margin: 0 10px;
}

.project-info-wrapper {
  display: flex;
}

.project-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 20px;
}

aside {
  width: 200px;
  height: 100%;
  background-color: lightgray;
}

main {
  height: 100%;
}

.main-content-wrapper {
  display: flex;
  height: 100%;
}

footer {
  width: 100%;
  height: 100px;
  background-color: aquamarine;
}
</style>
