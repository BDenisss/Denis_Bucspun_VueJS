<template>
  <div class="title">
    <h1>Contact</h1>
    <router-link to="/add" class="add">+</router-link>
  </div>
  <div class="contact_container">
    <div class="contact" v-for="contacts in contact" :key="contacts.name">
      <div class="contact_card">
        <h3>{{ contacts.name }} </h3>
        <p>{{ contacts.numero }}</p>
      </div>
    </div>
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

.contact_container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  outline: none;
  flex-wrap: wrap;
  padding: 0 6px;
}

.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

}

.contact_card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #1b263b;
  border-radius: 12px;
  width: 300px;
  transition: all .2s ease-in-out;
  cursor: help;
}

.contact_card:hover {
  box-shadow: #fca311 0 0 0 3px, transparent 0 0 0 0;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.add {
  font-size: 1.7em;
  text-decoration: none;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 35px;
  color: #121212;
  box-shadow: transparent 0 0 0 3px,#fca311 0 1px 8px;
  box-sizing: border-box;
  transition: all .2s ease-in;
  background-color: #fff;
}

.add:hover {
  background: rgba(245, 222, 179, 0);
  box-shadow: inset 1px 1px 10px rgba(252, 163, 17, 0.49);
  color: #fff;
}

</style>