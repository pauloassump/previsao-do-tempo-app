<template>
  <v-app>
    <v-app-bar
      color="blue"
      fixed
      app
    >
      <v-toolbar-title class="white--text" v-text="title" />
    </v-app-bar>
    <v-main class="main">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Previsão do Tempo'
    }
  }
}
</script>

<style scoped>
.main {
  background-image: url('../assets/sky.png');
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
