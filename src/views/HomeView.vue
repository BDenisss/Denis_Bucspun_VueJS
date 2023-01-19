<template>
  <h1>Journal d'appel</h1>
  <div class="home" v-for="call in historique" :key="call.name">
      <h3>Appel de {{call.name}} le {{call.date}}</h3>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  computed: {
      historique() {
        return this.$store.state.call
      },
  },

}
</script>

<style scoped>


</style>
