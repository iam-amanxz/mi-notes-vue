<template>
  <div class="notesList" v-if="notes.length > 0">
    <div v-for="note in notes" :key="note.id">
      <note :note="note" />
    </div>
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

<style lang="scss" scoped></style>
