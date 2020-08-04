<template>
  <div class="actionBar">
    <div v-if="isModalOpen" class="backdrop--overlay"></div>
    <!-- Filterbar -->
    <!-- <FilterBar /> -->
    <div class="filterBar"></div>
    <!-- Add Button -->
    <!-- TODO: Add an icon -->
    <button class="addButton" :style="{ color: `${theme.primary}` }" @click="showAddModal">
      <Plus class="addButton__icon" />Add a note
    </button>
    <modal
      styles="padding: 20px 40px"
      class="addNoteModal"
      :clickToClose="false"
      name="addNote"
      :max-width="500"
      width="90%"
      :adaptive="true"
    >
      <h3 class="modal__title" :style="{ color: `${theme.primary}` }">Create a note</h3>
      <form class="form" @submit.prevent="onSubmitForm">
        <input
          v-model="title"
          required
          placeholder="Title..."
          type="text"
          class="form__title formInput"
          :style="{ borderColor: `${theme.primary}` }"
        />
        <textarea
          v-model="description"
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
          >Create</button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import FilterBar from "@/components/FilterBar";
import Plus from "vue-material-design-icons/Plus";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { FilterBar, Plus },
  data: () => ({
    title: "",
    description: "",
    isLoading: false,
    isModalOpen: false,
  }),
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    showAddModal() {
      this.$modal.show("addNote");
      this.isModalOpen = true;
    },
    hideModal() {
      this.isModalOpen = false;
      this.$modal.hide("addNote");
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
        this.loading = false;
        (this.title = ""), (this.description = "");
        this.$modal.hide("addNote");
        this.isModalOpen = false;
      } else {
        this.loading = false;
        this.isModalOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" >
.backdrop--overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(4px);
}

.actionBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.addButton {
  border: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    margin-right: 15px;
  }

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
}

@media screen and (max-width: 768px) {
  .addButton {
    width: 100%;
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
