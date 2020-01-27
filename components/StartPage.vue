<template>
  <form ref="projectNameAndDescription">
    <input type="text" placeholder="Project name" v-model="projectName" />
    <input type="text" placeholder="Project description" v-model="projectDesc" />
    <button @click.prevent="createProject">
      Create project
    </button>
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
      // eslint-disable-next-line no-console
      console.log(this.projectDesc, this.projectName)
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
