<template>
  <h1>Journal d'appel</h1>
  <div class="history" v-for="call in historique" :key="call.name">
    <h3>{{call.name}} ({{ call.numero }}) le {{call.date}}</h3>
    <div class="container_call">
      <button class="call" @click="Call(call.numero)"><img src="../assets/call.png" alt="call_icon"></button>
    </div>
  </div>
  <h3 v-if="historique.length === 0">Pas d'appel récent</h3>
</template>

<script>


export default {
  name: 'HomeView',
  computed: {
    historique() {
      return this.$store.state.called
    },
  },
  methods: {
    isNumeroExist(numero) {
      return this.historique.some(call => call.numero === numero)
    },

    Call(numero) {
      let name;
      if(this.isNumeroExist(numero)) {
        name = this.historique.find(call => call.numero === numero).name;
      } else {
        name = "Inconnu";
      }
      this.$store.commit('callHistory', {
        name: name,
        numero: numero,
        date: new Date().toLocaleString()
      })
    }
  },

}
</script>

<style scoped>

.history {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 10px
}

img {
  height: 20px;
}

.call {
  width: 20px;
}

.container_call{
  display: flex;
}

button {
  box-sizing: border-box;
  padding: 0 20px;
}

</style>
