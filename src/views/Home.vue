<template>
  <!-- This view is the landing page. All the components will go inside this page -->
  <div
    class="home"
    :style="{
      background: `linear-gradient(180deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
    }"
  >
    <!-- Navbar -->
    <Navbar />
    <div class="home__container">
      <!-- Searchbar -->

      <!-- Actionbar (Filterbar && Add Button)-->
      <ActionBar />

      <!-- NotesList (Note) -->
      <NotesList />
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import ActionBar from "@/components/ActionBar";
import NotesList from "@/components/NotesList";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: { Navbar, ActionBar, NotesList, Footer },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("fetchNotes");
  },
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  position: relative;
  padding-bottom: 40px;
}

.home__container {
  max-width: 800px;
  height: 100%;
  width: 90%;
  margin: 0 auto;
}
</style>
