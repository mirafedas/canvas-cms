<template>
  <form ref="projectNameAndDescription">
    <input type="text" placeholder="Project name" v-model="projectName" />
    <input type="text" placeholder="Project description" v-model="projectDesc" />
    <nuxt-link to="/projects">
      <button @click="createProject">
        Create project
      </button>
    </nuxt-link>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      projectName: '',
      projectDesc: ''
    }
  },
  methods: {
    createProject () {
      const newProject = {
        id: Date.now(),
        name: this.projectName,
        description: this.projectDesc,
        author: 'Old Sad Panda'
      }
      this.$store.commit('addProject', newProject)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

input {
  height: 30px;
  margin: 10px 0;
  padding: 5px;
}

button {
  height: 30px;
  margin: 10px 0;
  text-transform: uppercase;
}
</style>
