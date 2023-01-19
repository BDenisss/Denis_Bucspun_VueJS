<template>
  <h1>Clavier</h1>
  <form>
    <div class="container_input">
      <div class="input">
        <input type="text" v-model="numeros">
        <button class="delete" @click="removeNum">X</button>
      </div>
      <div v-for="contacts in contact" :key="contacts.name">
        <p v-if="numeros === contacts.numero">{{ contacts.name }}</p>
      </div>
      <p v-if="!isNumeroExist() && numeros">Inconnu</p>
    </div>
  </form>
  <div class="container_clavier">
    <div class="clavier">
      <button v-on:click="composer('1')">1</button>
      <button v-on:click="composer('2')">2</button>
      <button v-on:click="composer('3')">3</button>
      <button v-on:click="composer('4')">4</button>
      <button v-on:click="composer('5')">5</button>
      <button v-on:click="composer('6')">6</button>
      <button v-on:click="composer('7')">7</button>
      <button v-on:click="composer('8')">8</button>
      <button v-on:click="composer('9')">9</button>
      <button v-on:click="composer('*')">*</button>
      <button v-on:click="composer('0')">0</button>
      <button v-on:click="composer('#')">#</button>
    </div>
    <div class="call">
      <button @click="Call">Call</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "ClavierView",
  computed: {
    numeros() {
      return this.$store.state.numeros
    },
    contact() {
      return this.$store.state.contact
    },
  },
  methods: {
    composer(chiffre) {
      this.$store.commit('addNum', chiffre)
    },
    isNumeroExist() {
      return this.contact.some(contacts => contacts.numero === this.numeros)
    },
    removeNum() {
      this.$store.commit('removeNum')
    },
    Call() {
      let name;
      if(this.isNumeroExist()) {
        name = this.contact.find(c => c.numero === this.numeros).name;
      } else {
        name = "Inconnu";
      }
      this.$store.commit('callHistory', {
        name: name,
        numero: this.numeros,
        date: new Date().toLocaleString()
      })
    }

  }
}
</script>

<style scoped>

.container_clavier {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.call {
  margin-top: 8px;
}

.input {
  display: flex;
  gap: 8px
}

.delete {
  padding: 0;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 100%;
  cursor: pointer;
}
</style>