<template>
  <h1>Clavier</h1>
  <form>
    <div class="container_input">
      <input type="text" v-model="numero">
    </div>
  </form>
  <div class="container_clavier">
    <div class="clavier">
      <button v-on:click="ajouterChiffre(1)">1</button>
      <button v-on:click="ajouterChiffre(2)">2</button>
      <button v-on:click="ajouterChiffre(3)">3</button>
      <button v-on:click="ajouterChiffre(4)">4</button>
      <button v-on:click="ajouterChiffre(5)">5</button>
      <button v-on:click="ajouterChiffre(6)">6</button>
      <button v-on:click="ajouterChiffre(7)">7</button>
      <button v-on:click="ajouterChiffre(8)">8</button>
      <button v-on:click="ajouterChiffre(9)">9</button>
      <button v-on:click="ajouterChiffre('*')">*</button>
      <button v-on:click="ajouterChiffre(0)">0</button>
      <button v-on:click="ajouterChiffre('#')">#</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClavierView",
  data() {
    return {
      numero: ""
    }
  },
  methods: {
    ajouterChiffre(chiffre) {
      this.numero += chiffre;
    }
  }
}
</script>

<style scoped>

.container_clavier {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clavier {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 6px;
}

button {
  padding: 16px;
  font-size: 18px;
}

form {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

</style>