<template>
  <div id="nav" class="cover w-full md:w-1/2 bg-gray-900 md:bg-gray-500 md:px-8 py-8 md:py-64 text-green-600 md:text-gray-900 text-center md:rounded-l-lg">
    <h1 class="text-2xl uppercase font-bold">
      💰 {{ balance | currency }}
    </h1>
    <!-- {{ total }} -->
    <h1 class="text-4xl px-6 md:px-0 uppercase font-bold">Lockdown Preparation</h1>
    <p class="hidden md:block md:text-xl px-10 md:px-8">Check preparation you need before the lockdown!</p>
  </div>
</template>

<script>
import EventBus from '../service/EventBus'

export default {
  data(){
    return {
      balance: 0,
      total: 0
    }
  },
  created() {
    EventBus.$on("TOPUP BALANCE", (balance) => {
      this.changeBalance(balance)
    })
    EventBus.$on("UPDATE TOTAL", (total) => {
      this.updateTotal(total)
    })
  },
  methods: {
    changeBalance(balance) {
      this.balance += balance
    },
    updateTotal(total) {
      this.total = total
      this.total <= this.balance ? this.balance = this.balance - this.total : [
        alert("Not Enough Balance :(")
      ]
    }
  },
}
</script>