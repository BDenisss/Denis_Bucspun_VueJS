<template>
  <h1>Ajouter un contact</h1>
  <form @submit.prevent="ajoutContact">
    <div class="contact">
      <input type="text" placeholder="Nom..." v-model="contact.name">
      <input type="number" placeholder="Numéro..." min="0" v-model="contact.numero">
    </div>
    <button class="submit" type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  name: "AddView",

  computed: {
    contact() {
      return this.$store.state.contact
    }
  },

  methods: {
    ajoutContact() {

      if(this.contact.name == "" || this.contact.numero == null) return

      if(this.contact.find((contact) => contact.name === this.contact.name)) return

      this.$store.commit('ajoutContact', {
        name: this.contact.name,
        numero: this.contact.numero.toString(),
      })

    }
  },
}
</script>

<style scoped>

.contact{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.submit {
  margin-top: 16px;
}

</style>