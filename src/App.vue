<template>
  <div id="app" class="font-sans">
    <!-- All the inpage Items -->
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  // overflow: hidden;
  min-height: 100vh;
}
// Theme
// #E1357D #E85C0E
// #1AC7BC #3DD74C
// #B542DE #EB6565
// #E4E68E #1AC7BC
</style>
