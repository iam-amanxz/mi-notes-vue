import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: {
      primary: "#1ac7bc",
      secondary: "#3dd74c",
    },
    notes: [],
  },
  mutations: {
    INIT_NOTES: (state, notes) => (state.notes = JSON.parse(notes)),
    ADD_NOTE: (state, payload) => {
      state.notes.push(payload);
    },
    DELETE_NOTE: (state, noteId) =>
      (state.notes = state.notes.filter((note) => note.id !== noteId)),
    SET_THEME: (state, theme) => (state.theme = theme),
  },
  actions: {
    async fetchNotes({ commit }) {
      console.log("fetching notes");
      const notes = (await localStorage.getItem("notes"))
        ? localStorage.getItem("notes")
        : [];
      commit("INIT_NOTES", notes);
    },
    async addNote({ state, commit }, payload) {
      // add to local storage
      await localStorage.setItem(
        "notes",
        JSON.stringify([...state.notes, payload])
      );
      commit("ADD_NOTE", payload);
    },
    async deleteNote({ state, commit }, noteId) {
      await commit("DELETE_NOTE", noteId);
      // delete from local storage
      localStorage.setItem("notes", JSON.stringify([...state.notes]));
    },
    setTheme({ commit }, payload) {
      let theme;
      switch (payload) {
        case "fire":
          theme = {
            primary: "#E1357D",
            secondary: "#E85C0E",
          };
          break;
        case "joy":
          theme = {
            primary: "#1AC7BC",
            secondary: "#3DD74C",
          };
          break;
        case "lucy":
          theme = {
            primary: "#B542DE",
            secondary: "#EB6565",
          };
          break;
        case "ovi":
          theme = {
            primary: "#1AC7BC",
            secondary: "#E4E68E",
          };
          break;
        default:
          return state;
      }
      commit("SET_THEME", theme);
    },
  },
});
