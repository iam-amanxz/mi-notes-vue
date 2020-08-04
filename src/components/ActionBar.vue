<template>
  <div class="actionBar">
    <!-- Filterbar -->
    <div class="filterBar"></div>
    <!-- Add Button -->
    <button
      class="addButton"
      :style="{ color: `${theme.primary}` }"
      @click="showAddModal"
    >
      Add a note
    </button>
    <modal
      styles="padding: 20px 40px"
      class="addNoteModal"
      name="addNote"
      :max-width="500"
      :adaptive="true"
    >
      <h3 class="modal__title" :style="{ color: `${theme.primary}` }">
        Create a note
      </h3>
      <form class="form" @submit.prevent="onSubmitForm">
        <input
          v-model="title"
          placeholder="Title..."
          type="text"
          class="form__title formInput"
          :style="{ borderColor: `${theme.primary}` }"
        />
        <textarea
          v-model="description"
          placeholder="Description..."
          cols="10"
          rows="3"
          class="form__description formInput"
          :style="{ borderColor: `${theme.primary}` }"
        ></textarea>
        <div class="form__actions">
          <button class="btn--close formBtn">Cancel</button>
          <button
            type="submit"
            class="btn--submit formBtn"
            :style="{ background: `${theme.primary}` }"
          >
            Create
          </button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data: () => ({
    title: "",
    description: "",
    isLoading: false,
  }),
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    showAddModal() {
      this.$modal.show("addNote");
    },
    onSubmitForm() {
      this.loading = true;
      if (this.title !== "" && this.description !== "") {
        const note = {
          id: uuidv4(),
          title: this.title,
          description: this.description,
          modifiedAt: new Date().toISOString(),
        };

        this.$store.dispatch("addNote", note);
      } else {
        console.log("please fill all the fields");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.actionBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.addButton {
  border: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.modal__title {
  text-align: center;
}

.form {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.formInput {
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid;
  resize: none;
  font-family: inherit;
  font-size: 16px;
  outline: none;

  &:focus {
    border-bottom-color: #e85c0e;
  }
}

.formBtn {
  cursor: pointer;
  font-size: inherit;
  border: none;
  padding: 7px 20px;
  margin-left: 10px;
  font-weight: 600;
  color: #fff;
  background: none;
  border-radius: 3px;
  &:disabled {
    background: #c0c0c0 !important;
  }
}

.btn--close {
  color: #e85c0e;
}

.form__actions {
  align-self: flex-end;
}
</style>
