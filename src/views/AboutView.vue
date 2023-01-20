<template>
  <h1>Contact</h1>
  <div class="contact" v-for="contacts in contact" :key="contacts.name">
    <h3>{{ contacts.name }}: {{ contacts.numero }}</h3>
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