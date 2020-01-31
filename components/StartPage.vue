<template>
  <form ref="projectNameAndDescription">
    <img src="../assets/icons/idea.png" alt="Light bulb icon">
    <input v-model="projectName" type="text" placeholder="Project name">
    <input v-model="projectDesc" type="text" placeholder="Project description">
    <nuxt-link to="/projects">
      <button class="start-btn" @click="createProject">
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
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-top: -200px;
}

input {
  height: 30px;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid green;
}

button {
  display: flex;
  align-self: center;
  justify-self: center;
  height: 30px;
  margin: 10px 0;
  border-radius: 20px;
  border: 1px solid green;
  color: green;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    border: 1px solid orange;
    color: orange;
  }
}
</style>
