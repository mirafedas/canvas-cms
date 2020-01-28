<template>
<div class="wrapper">
  <h2>{{ project.name }}</h2>
  <span class="author"><b>Author:</b> {{ project.author }}</span>
  <span class="description">{{ project.description }}</span>
  <button>Duplicate</button>
  <button>Edit</button>
  <button>Preview</button>
</div>
</template>

<script>
export default {
  props: ['project']
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
  height: 230px;
  width: 230px;
  border: 3px solid grey;
  border-radius: 10px;
  background-color: lightgreen
}

.author {
  font-size: 12px;
}

.description {
  margin: 15px 0;
  max-height: 20px;
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
