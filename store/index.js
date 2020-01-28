export const state = () => ({
  projects: [
    {
      id: '365674',
      name: 'Project 1',
      description: 'Raccoons are awesome awesome awesome awesome awesome awesome awesome awesome awesome',
      author: 'Old Sad Panda'
    },
    {
      id: '9347897',
      name: 'Project 2',
      description: 'Foxes are awesome',
      author: 'Old Sad Panda'
    },
    {
      id: '893783',
      name: 'Project 3',
      description: 'Lemurs are awesome',
      author: 'Old Sad Panda'
    }
  ]
})

export const mutations = {
  addProject (state, payload) {
    if (typeof payload === 'object' && payload !== null) {
      state.projects.push(payload)
      console.log('state.projects: ', state.projects)
    }
  },
  duplicateProject (state, payload) {
    console.log(payload)
    if (payload) {
      state.projects.map((project) => {
        if (project.id === payload) {
          const copiedProject = { ...project }
          copiedProject.name = `${project.name} (copy)`
          copiedProject.id = Date.now()
          state.projects.push(copiedProject)
        }
      })
      console.log('state.projects: ', state.projects)
    }
  }
}

export const getters = {
  projectsList: state => state.projects
}
