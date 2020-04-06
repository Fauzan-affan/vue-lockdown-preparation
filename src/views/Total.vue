<template>
  <div>
    <h1 class="text-xl md:text-4xl uppercase font-bold text-center text-gray-900 md:text-green-600 pb-4 md:pb-8">GOD BLESS !!!</h1>
    <div class="total">
      <!-- <div class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full hover:bg-gray-800 md:text-gray-600 hover:text-white md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{ topup.icon }}</nav>
          <nav class="pl-5 text-lg md:text-xl">{{ }}</nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl">{{ topup.price | currency }}</div>
      </div> -->
      <div class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full hover:bg-gray-800 md:text-gray-600 hover:text-white md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{ food.icon }}</nav>
          <nav class="pl-5 text-lg md:text-xl">{{ food.name }}</nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl">{{ food.price | currency }}</div>
      </div>
      <div class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full hover:bg-gray-800 md:text-gray-600 hover:text-white md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{ essential.icon }}</nav>
          <nav class="pl-5 text-lg md:text-xl">{{ essential.name }}</nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl">{{ essential.price | currency }}</div>
      </div>
      <div class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full hover:bg-gray-800 md:text-gray-600 hover:text-white md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{ maskandsanitizer.icon }}</nav>
          <nav class="pl-5 text-lg md:text-xl">{{ maskandsanitizer.name }}</nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl">{{ maskandsanitizer.price | currency }}</div>
      </div>
      <div class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full hover:bg-gray-800 md:text-gray-600 hover:text-white md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{ entertainment.icon }}</nav>
          <nav class="pl-5 text-lg md:text-xl">{{ entertainment.name }}</nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl">{{ entertainment.price | currency }}</div>
      </div>
    </div>
    <hr class="md:text-white my-5">
    <div class="sum">
      <div class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{  }}</nav>
          <nav class="pl-5 text-xl font-black text-gray-900 md:text-white">Total: </nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl md:text-white hover:text-green-500">{{ total | currency }}</div>
      </div>
    </div>
    <div class="pay block md:flex justify-center my-10">
      <button @click="topUp" class="bg-green-200 hover:bg-green-100 text-gray-900 font-bold py-2 px-16 border-b-4 border-green-700 hover:border-green-500 rounded">Top Up Balance</button>
      <button @click="pay" class="bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-2 px-16 border-b-4 border-green-700 hover:border-green-500 rounded">Buy</button>
    </div>
    <!-- {{ topup }} <br/> {{ food }} <br/> {{ essential }} <br/> {{ maskandsanitizer }} <br/> {{ entertainment }} -->
  </div>
</template>

<script>
import { data } from '../data/data.js'
import EventBus from '../service/EventBus'

export default {
  props: [
    "topupProps",
    "foodProps",
    "essentialProps",
    "maskandsanitizerProps",
  ] ,
  data() {
    return {
      topup: {
        icon: data[0].topup[this.topupProps].icon,
        price: data[0].topup[this.topupProps].price,
      },
      food: {
        icon: data[1].food[this.foodProps].icon,
        name: data[1].food[this.foodProps].name,
        price: data[1].food[this.foodProps].price,
      },
      essential: {
        icon: data[2].essential[this.essentialProps].icon,
        name: data[2].essential[this.essentialProps].name,
        price: data[2].essential[this.essentialProps].price,
      },
      maskandsanitizer: {
        icon: data[3].maskandsanitizer[this.maskandsanitizerProps].icon,
        name: data[3].maskandsanitizer[this.maskandsanitizerProps].name,
        price: data[3].maskandsanitizer[this.maskandsanitizerProps].price,
      },
      entertainment: {
        icon: data[4].entertainment[this.$route.params.entertainment].icon,
        name: data[4].entertainment[this.$route.params.entertainment].name,
        price: data[4].entertainment[this.$route.params.entertainment].price,
      },
      total: 0
    }
  },
  created() {
    this.total = this.food.price + this.essential.price + this.maskandsanitizer.price + this.entertainment.price
  },
  methods: {
    pay() {
      EventBus.$emit("UPDATE TOTAL", this.total)
      alert("Thanks for Shoping! Stay Save, Stay Connected!!!")
      this.$router.push("/")
    },
    topUp() {
      this.$router.push("/")
    }
  }
}
</script>

<style>

</style>