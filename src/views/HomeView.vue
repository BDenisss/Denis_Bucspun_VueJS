<template>
  <h1>Journal d'appel</h1>
  <div class="history" v-for="(group, index) in groupedCalls" :key="index">
    <h3>{{group.name}} - {{group.calls.length}} appel(s) - <button class="call" @click="Call(group.numero)"><img src="../assets/call.png" alt="call_icon"></button></h3>
    <select v-model="CallSort[index]">
      <option v-for="(call, i) in group.calls" :value="i" :key="i">{{ call.date }}</option>
    </select>
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
    CallSort() {
      return this.$store.state.selectedCallIndex
    },
    groupedCalls() {
      const callsByName = {}
      this.historique.forEach(call => {
        if (!callsByName[call.name]) {
          callsByName[call.name] = {
            name: call.name,
            numero: call.numero,
            count: 0,
            calls: []
          }
        }
        callsByName[call.name].count++
        callsByName[call.name].calls.push({
          date: call.date
        })
      })
      return Object.values(callsByName)
    }
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
}

img {
  height: 20px;
}

.call {
  width: 20px;
}

</style>
