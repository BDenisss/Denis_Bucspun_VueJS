<template>
  <h1>Contact</h1>
  <div class="contact" v-for="contacts in contact" :key="contacts.name">
    <h2>{{ contacts.name }}</h2>
    <p>{{ contacts.numero }}</p>
  </div>
</template>

<script>

export default {
  name: "ContactView",
  computed: {
    contact() {
      return this.$store.state.contact
    },
  },
}

</script>

<style scoped>


</style>