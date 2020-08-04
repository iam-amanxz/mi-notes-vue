<template>
  <div class="notesList" v-if="notes.length > 0">
    <div v-for="note in notes" :key="note.id">
      <note :note="note" />
    </div>
  </div>
  <div v-else>
    <p class="empty">Your notes list is empty.</p>
    <p style="text-align: center">🙄</p>
  </div>
</template>

<script>
import Note from "@/components/Note";
export default {
  components: { note: Note },
  computed: {
    notes() {
      return this.$store.state.notes;
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
</style>
