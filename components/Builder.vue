<template>
  <div class="builder-wrapper">
    <div class="nav-top">
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
    </div>
    <div class="main-content-wrapper">
      <aside>
        <button>Add section</button>
      </aside>
      <div class="main">
        <Editable />
      </div>
    </div>
    <div class="bottom-board">
      <div>Banner</div>
      <div>Slideshow</div>
      <div>Carousel</div>
      <div>Other...</div>
    </div>
  </div>
</template>

<script>
import Editable from '../components/Editable'

export default {
  components: {
    Editable
  },
  data: () => {
    return {
      gridItems: []
    }
  },
  computed: {
    elements () {
      return this.$store.state.selectedProject.elements
    },
    selectedProject () {
      return this.$store.state.selectedProject
    }
  },
  mounted () {
    console.log(this.$store.state.selectedProject.elements)
  }
}
</script>

<style scoped>
button {
  margin: 0 10px;
}

.builder-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.nav-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 5px 20px;
  background-color: aquamarine;
}

.grid-wrapper {
  /* display: grid; */
}

.grid-item {
  min-width: 100px;
  min-height: 100px;
  background-color: grey;
  border: 1px dashed black;
  border-radius: 0;
}

.buttons-wrapper {
  display: flex;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100%;
  padding: 20px;
  background-color: lightgray;
}

.main {
  height: 100%;
  width: 100%;
  padding: 20px;
}

.main-content-wrapper {
  display: flex;
  height: 100%;
}

.bottom-board {
  display: flex;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: aquamarine;
}
</style>
