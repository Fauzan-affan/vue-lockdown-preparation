<template>
  <div>
    <h1 class="text-xl md:text-4xl uppercase font-bold text-center text-gray-900 md:text-green-600 pb-4 md:pb-8">Prepare Your Food</h1>
    <div v-for="(item, index) in data" :key="index">
      <router-link :to="{name: 'Prepare Essentials', params: { topupProps: topup, food: index }}" class="flex px-6 md:px-16 py-2 justify-between items-center rounded-full hover:bg-gray-800 md:text-gray-600 hover:text-white md:h-12 cursor-pointer">
        <div class="flex">
          <nav class="mt-1">{{ item.icon }}</nav>
          <nav class="pl-5 text-lg md:text-xl">{{ item.name }}</nav>
        </div>
        <div class="text-lg w-10 md:w-auto mr-4 md:mr-0 md:text-xl">{{ item.price | currency }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { data } from '../data/data.js'

export default {
  data() {
    return {
      data: data[1].food,
      topup: this.$route.params.topup
    }
  }
}
</script>

<style>

</style>