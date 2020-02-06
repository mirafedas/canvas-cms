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
        <ul
          class="element-container"
          :style="{
            height: containerHeight,
            maxWidth: containerWidth
          }"
        >
          <draggable
            :list="gridItems"
            class="dragArea"
            tag="li"
            style="{
                width: width,
                height: height
            }"
            @start="drag=true"
            @end="drag=false"
          >
            <Editable
              v-for="item in gridItems"
              :key="item.image"
              :item="item"
            />
          </draggable>
        </ul>
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
import draggable from 'vuedraggable'
import Editable from '../components/Editable'

export default {
  components: {
    Editable,
    draggable
  },
  data: () => {
    return {
      width: '200px',
      height: '200px',
      rows: 3,
      columns: 3,
      gridItems: [
        {
          row: 1,
          column: 1,
          image: 'https://media.treehugger.com/assets/images/2017/01/cob-house-geodesic-dome-hjertefolgers-10.jpg.860x0_q70_crop-scale.jpg',
          text: [
            {
              string: 'Test1',
              justify: 'flex-end',
              align: 'flex-start',
              color: 'orange',
              fontSize: '20px'
            },
            {
              string: 'Test2',
              justify: 'center',
              align: 'flex-end',
              color: 'white',
              fontSize: '14px'
            }
          ]
        },
        {
          row: 1,
          column: 1,
          image: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/07/0b/e9/7c.jpg',
          text: [
            {
              string: 'Test1',
              justify: 'flex-end',
              align: 'flex-start',
              color: 'orange',
              fontSize: '20px'
            },
            {
              string: 'Test2',
              justify: 'center',
              align: 'flex-end',
              color: 'white',
              fontSize: '14px'
            }
          ]
        },
        {
          row: 1,
          column: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/California-dome-house.jpg',
          text: [
            {
              string: 'Test1',
              justify: 'flex-end',
              align: 'flex-start',
              color: 'orange',
              fontSize: '20px'
            },
            {
              string: 'Test2',
              justify: 'center',
              align: 'flex-end',
              color: 'white',
              fontSize: '14px'
            }
          ]
        },
        {
          row: 1,
          column: 1,
          image: 'https://i.pinimg.com/originals/44/25/70/4425707aa6feb4e4e26fe7cb6ff8c68e.jpg',
          text: [
            {
              string: 'Test1',
              justify: 'flex-end',
              align: 'flex-start',
              color: 'orange',
              fontSize: '20px'
            },
            {
              string: 'Test2',
              justify: 'center',
              align: 'flex-end',
              color: 'white',
              fontSize: '14px'
            }
          ]
        },
        {
          row: 1,
          column: 1,
          image: 'https://eurohouse.ua/images/kupolnie_doma/cam1_post_night-min.jpg',
          text: [
            {
              string: 'Test1',
              justify: 'flex-end',
              align: 'flex-start',
              color: 'orange',
              fontSize: '20px'
            },
            {
              string: 'Test2',
              justify: 'center',
              align: 'flex-end',
              color: 'white',
              fontSize: '14px'
            }
          ]
        },
        {
          row: 1,
          column: 1,
          image: 'https://sc01.alicdn.com/kf/HTB12drRau6sK1RjSsrbq6xbDXXal/Outdoor-Glamping-Dome-House-Luxury-Resort-Tent.jpg',
          text: [
            {
              string: 'Test1',
              justify: 'flex-end',
              align: 'flex-start',
              color: 'orange',
              fontSize: '20px'
            },
            {
              string: 'Test2',
              justify: 'center',
              align: 'flex-end',
              color: 'white',
              fontSize: '14px'
            }
          ]
        }
      ]
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
    console.log(this.$store.state.selectedProject.elements)
  }
}
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-wrap: wrap;
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
