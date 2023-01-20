<template>
  <h1>Journal d'appel</h1>
  <div class="history" v-for="call in historique" :key="call.name">
    <h3>{{call.name}} le {{call.date}}</h3>
    <div class="container_call">
      <button class="call" @click="Call"><img src="../assets/call.png" alt="call_icon"></button>
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
    isNumeroExist() {
      return this.called.some(call => call.numero === this.call)
    },

    Call() {
      let name;
      if(this.isNumeroExist()) {
        name = this.called.find(call => call.numero === this.numeros).name;
      } else {
        name = "Inconnu";
      }
      this.$store.commit('callHistory', {
        name: name,
        numero: this.numero,
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
}

img {
  height: 20px;
}

.call {
  width: 20px;
}

</style>
