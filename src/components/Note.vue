<template>
  <div class="note">
    <div class="note__header">
      <h2 class="note__title" :style="{ color: `${theme.primary}` }">
        {{ note.title }}
      </h2>
      <div class="note__actions">
        <!-- <Pencil class="note__actions--edit" /> -->
        <Delete class="note__actions--delete" @click="onDeleteNote(note.id)" />
      </div>
    </div>
    <p class="note__description">{{ note.description }}</p>
    <small class="note__modified">
      <strong>Last Modified:</strong>
      {{ formattedDate }}
    </small>
  </div>
</template>

<script>
import * as dayjs from "dayjs";
import Pencil from "vue-material-design-icons/Pencil";
import Delete from "vue-material-design-icons/Delete";
export default {
  components: { Pencil, Delete },
  props: ["note"],
  methods: {
    onDeleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    },
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    formattedDate() {
      return dayjs(this.note.modifiedAt).format("MMM D, YYYY h:mm A");
    },
  },
};
</script>

<style lang="scss" scoped>
.note {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1.2em;
  margin-bottom: 15px;

  &__title {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 15px;
  }
  &__description {
    color: #5a5a5a;
    margin-bottom: 10px;
  }
  &__modified {
    font-size: 14px;
    color: #999999;
  }
}

.note__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.note__actions--edit {
  color: #47c71a;
  cursor: pointer;
}
.note__actions--delete {
  color: #e85c0e;
  cursor: pointer;
}
</style>
