import { testSelectedProject } from '../testData/selectedProject'

export const state = () => ({
  projects: [
    testSelectedProject
  ],
  selectedProject: testSelectedProject
})

export const mutations = {
  addProject (state, payload) {
    if (typeof payload === 'object' && payload !== null) {
      state.projects.push(payload)
      console.log('state.projects: ', state.projects)
    }
  },
  duplicateProject (state, payload) {
    if (payload) {
      state.projects.map((project) => {
        if (project.id === payload) {
          const copiedProject = { ...project }
          copiedProject.name = `${project.name} (copy)`
          copiedProject.id = Date.now()
          state.projects.push(copiedProject)
        }
      })
    }
  },
  changeSelectedProject (state, payload) {
    if (typeof payload === 'object' && payload !== null) {
      state.selectedProject = payload
    }
  }
}

export const getters = {
  projectsList: state => state.projects
}
