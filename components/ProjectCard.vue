<template>
  <div class="wrapper">
    <h2 class="name">{{ project.name }}</h2>
    <span class="author"><b>Author:</b> {{ project.author }}</span>
    <span class="description">{{ project.description }}</span>
    <button @click="duplicate">
      Duplicate
    </button>
    <button>
      Edit
    </button>
    <button>
      Preview
    </button>
  </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    duplicate () {
      this.$store.commit('duplicateProject', this.project.id)
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  height: 30px;
  margin: 5px 0;
  text-transform: uppercase;
}

button:hover {
  color: orange;
}
</style>
