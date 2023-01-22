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
  flex-wrap: wrap;
  gap: 6px;
}

.submit {
  margin-top: 16px;
}

button {
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #14213d;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1.2rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  box-shadow: #fca311 0 0 0 3px, transparent 0 0 0 0;
}


</style>