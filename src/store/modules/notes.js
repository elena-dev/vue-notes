const state = {
  notesList: null
}

const getters = {
  getNote(state) {
    return state.notesList
  },
}

const mutations = {
  init(state) {
    state.notesList = JSON.parse(localStorage.getItem('notesList'))
  },
  addTask(state, payload) {
    payload.date = Date.now()
    if (!state.notesList) {
      state.notesList = new Array()
    }
    state.notesList.push(payload)
    let clientsArr = JSON.parse(localStorage.getItem('notesList')) || [];
    clientsArr.push(payload);
    localStorage.setItem('notesList', JSON.stringify(clientsArr));
  },

  deleteTask(state, payload) {
    state.notesList.splice(payload.index, 1)
    localStorage.setItem("notesList", JSON.stringify(state.notesList))
  }
}

const actions = {
  async addNote({commit}, payload) {
    await commit("addTask", payload)
  },

  async deleteNote({commit, state}, payload) {
    try {
      let index = state.notesList.findIndex(x => x.id === payload.id)
      if (index === -1) {
        console.log('Task could not find! Something is totally wrong!')
      } else {
        payload = {index}
        await commit("deleteTask", payload)
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
