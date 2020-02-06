<template>
  <div class="builder-wrapper">
    <div class="nav-top">
      <div class="project-info-wrapper">
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
        <button @click="addElement()">
          Add section
        </button>
      </aside>
      <div class="main">
        <div v-for="element in elements" :key="element.id">
          <div v-for="item in element" :key="item.id">
            <div
              v-if="item.type === 'block'"
              class="block"
              :style="{
                gridRow: item.row,
                gridColumn: item.column,
                gridGap: item.gridGap,
                gridTemplateRows: `repeat(auto-fill, ${item.height})`,
                gridTemplateColumns: `repeat(auto-fill, ${item.width})`,
              }"
            >
              <draggable
                v-for="smallElement in item.content"
                :key="smallElement.row + smallElement.column"
                :list="item.content"
                :style="{
                  width: item.width,
                  height: item.height
                }"
                @start="drag=true"
                @end="drag=false"
              >
                <div
                  class="block-smallElement"
                  :style="{
                    width: item.width,
                    height: item.height,
                    gridRow: smallElement.row,
                    gridColumn: smallElement.column,
                    backgroundImage: `url('${smallElement.image}')`,
                  }"
                />
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { defaultBlock } from '../config/defaultBlock.js'
// import Editable from '../components/Editable'

export default {
  components: {
    // Editable,
    draggable
  },
  data: () => {
    return {
      defaultBlock
    }
  },
  computed: {
    elements () {
      return this.$store.state.selectedProject.elements
    },
    selectedProject () {
      return this.$store.state.selectedProject
    },
    gridSize () {
      return this.columns * this.rows
    },
    containerHeight () {
      const height = Number(this.height.substring(0, this.height.length - 2))

      return `${this.rows * height}px`
    },
    containerWidth () {
      const width = Number(this.width.substring(0, this.width.length - 2))

      return `${this.columns * width}px`
    }
  },
  mounted () {
    console.log('selectedProject >> ', this.$store.state.selectedProject)
  },
  methods: {
    addElement () {
      console.log(this.$store.state.selectedProject.id)
      this.$store.commit('addProjectElement', this.defaultBlock)
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  display: grid;

}

.block-smallElement {
  background-size: cover;
  background-repeat: none;
}

.dragArea {
  display: flex;
  flex-wrap: wrap;
}

li {
  list-style: none;
}

.element-container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  width: 200px;
  height: 100%;
  background-color: pink;
  border: 1px solid black;
}

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
  display: grid;
  grid-template-rows: repeat(auto-fill, 300px);
  grid-template-columns: repeat(auto-fill, 300px);
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow: scroll;
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
