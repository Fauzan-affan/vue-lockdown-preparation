<template>
  <div class="min-h-screen bg-cover" :style="{backgroundImage: `url('${image}')`}">
    <div class="container mx-auto py-20 px-4 md:p-10 md:min-h-screen">
      <Pagination />
      <div id="app" class="block md:flex">
        <About />
        <div class="w-full md:w-1/2 bg-gray-300 md:bg-gray-900 p-8 md:rounded-r-lg ">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from './views/About'
import Pagination from './components/Pagination'

export default {
  components: {
    About,
    Pagination
  },
  data() {
    return {
      image: require('./assets/corona.jpeg'),
    }
  }

}
</script>

<style src="./css/main.css"></style>
