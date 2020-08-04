<template>
  <div class="note">
    <div v-if="isModalOpen" class="backdrop--overlay"></div>
    <div class="note__header">
      <h2 class="note__title" :style="{ color: `${theme.primary}` }">{{ note.title }}</h2>
      <div class="note__actions">
        <Pencil class="note__actions--edit" @click="showModal" />
        <Delete class="note__actions--delete" @click="onDeleteNote(note.id)" />
      </div>
    </div>
    <p class="note__description">{{ note.description }}</p>
    <small class="note__modified">
      <strong>Last Modified:</strong>
      {{ formattedDate }}
    </small>

    <!-- Modal -->
    <modal
      styles="padding: 20px 40px"
      class="editNoteModal"
      :clickToClose="false"
      name="editNote"
      :max-width="500"
      width="90%"
      :adaptive="true"
    >
      <h3 class="modal__title" :style="{ color: `${theme.primary}` }">Edit note</h3>
      <form class="form" @submit.prevent="onEditForm(note)">
        <input
          v-model="note.title"
          required
          placeholder="Title..."
          type="text"
          class="form__title formInput"
          :style="{ borderColor: `${theme.primary}` }"
        />
        <textarea
          v-model="note.description"
          required
          placeholder="Description..."
          cols="10"
          rows="3"
          class="form__description formInput"
          :style="{ borderColor: `${theme.primary}` }"
        ></textarea>
        <div class="form__actions">
          <button class="btn--close formBtn" @click="hideModal">Cancel</button>
          <button
            type="submit"
            class="btn--submit formBtn"
            :style="{ background: `${theme.primary}` }"
          >Save</button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import * as dayjs from "dayjs";
import Pencil from "vue-material-design-icons/Pencil";
import Delete from "vue-material-design-icons/Delete";
export default {
  components: { Pencil, Delete },
  props: ["note"],
  data: () => ({
    title: "",
    description: "",
    isLoading: false,
    isModalOpen: false,
  }),
  methods: {
    showModal() {
      this.$modal.show("editNote");
      this.isModalOpen = true;
    },
    hideModal() {
      this.$modal.hide("editNote");
      this.isModalOpen = false;
    },
    onDeleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    },
    onEditForm(note) {
      this.loading = true;
      if (this.note.title !== "" && this.note.description !== "") {
        const updatedNote = {
          id: note.id,
          title: note.title,
          description: note.description,
          modifiedAt: new Date().toISOString(),
        };

        this.$store.dispatch("updateNote", updatedNote);
        this.loading = false;
        this.isModalOpen = false;
        this.$modal.hide("editNote");
      } else {
        this.loading = true;
        this.isModalOpen = false;
      }
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
  transition: transform 3s ease-in-out;

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
    color: #a0a0a0;
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
  margin-right: 10px;
}
.note__actions--delete {
  color: #e85c0e;
  cursor: pointer;
}
</style>
