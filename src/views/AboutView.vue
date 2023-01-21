<template>
  <div class="title">
    <h1>Contact</h1>
    <router-link to="/add" class="add">+</router-link>
  </div>
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
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  transition: background .25s,-webkit-background .25s, box-shadow .5s;
  background-color: #fff;
}

.add:hover {
  background: rgba(107, 83, 83, 0.53);
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.36);;
  color: #fff;
}

</style>