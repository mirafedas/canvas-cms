<template>
  <form ref="projectNameAndDescription">
    <img src="../assets/icons/idea.png" alt="Light bulb icon">
    <p v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error" class="errors-list-item">
          {{ error }}
        </li>
      </ul>
    </p>
    <input v-model="projectName" type="text" placeholder="Project name">
    <input v-model="projectDesc" type="text" placeholder="Project description">
    <!-- <nuxt-link to="/projects"> -->
    <button class="start-btn" @click.prevent="createProject">
      Create project
    </button>
    <!-- </nuxt-link> -->
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      errors: [],
      projectName: '',
      projectDesc: ''
    }
  },
  methods: {
    hideErrorMessage () {
      setTimeout(() => { this.errors = [] }, 5000)
    },
    createProject () {
      if (!this.projectName.length || !this.projectDesc.length) {
        if (!this.errors.length) {
          this.errors.push('Please fill in all fields properly!')
          this.hideErrorMessage()
        }
      } else {
        const newProject = {
          id: Date.now(),
          name: this.projectName,
          description: this.projectDesc,
          author: 'Old Sad Panda'
        }

        this.$store.commit('addProject', newProject)
        this.$router.push('projects')
      }
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
  font-size: 14px;
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

.errors-list-item {
  font-size: 14px;
  background-color: transparent;
  color: red;
  list-style: none;
}
</style>
