<template>
  <div>
    <div class="searchBar" v-if="notes.length > 1">
      <input type="text" class="searchInput" placeholder="Search..." v-model="search" />
    </div>
    <div class="notesList" v-if="notes.length > 0">
      <div v-for="note in filteredNotes" :key="note.id">
        <note :note="note" />
      </div>
    </div>
    <div v-else>
      <p class="empty">Your notes list is empty.</p>
      <p style="text-align: center">🙄</p>
    </div>
  </div>
</template>

<script>
import Note from "@/components/Note";
export default {
  components: { note: Note },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
    filteredNotes() {
      return this.notes.filter((note) => {
        return note.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  font-size: 22px;
  color: #fff;
  margin-top: 200px;
  margin-bottom: 10px;
  text-align: center;
}

.searchInput {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background: none;
  border: none;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.8);
  outline: none;
  font-size: inherit;
  color: rgba(255, 255, 255, 0.8);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
