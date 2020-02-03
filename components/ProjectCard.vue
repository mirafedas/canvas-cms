<template>
  <div class="wrapper">
    <h2 class="name">{{ project.name }}</h2>
    <span class="author"><b>Author:</b> {{ project.author }}</span>
    <span class="description">{{ project.description }}</span>
    <button @click="duplicate">
      Duplicate
    </button>
    <nuxt-link to="builder">
      <button @click="edit">
        Edit
      </button>
    </nuxt-link>
    <nuxt-link to="preview">
      <button @click="edit">
        Preview
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    duplicate () {
      this.$store.commit('duplicateProject', this.project.id)
    },
    edit () {
      this.$store.commit('changeSelectedProject', this.project)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  min-width: 150px;
  min-height: 230px;
  width: 230px;
  border: 3px solid grey;
  border-radius: 10px;
  background-color: lightgreen;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
}

.author {
  font-size: 12px;
}

.description {
  margin: 15px 0;
  min-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.name {
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  height: 30px;
  width: 100%;
  margin: 5px 0;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
}

button:hover {
  border: 1px solid orange;
  color: orange;
}
</style>
