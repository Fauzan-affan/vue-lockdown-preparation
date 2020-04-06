<template>
  <div class="flex justify-center items-center py-3 text-white">
      <router-link :to="{name: 'Top Up'}" :class="unactiveClass" :exact-active-class="activeClass">1</router-link>
      <router-link :to="{name: 'Prepare Food'}" :class="unactiveClass" :exact-active-class="activeClass">2</router-link>
      <router-link :to="{name: 'Prepare Essentials'}" :class="unactiveClass" :exact-active-class="activeClass">3</router-link>
      <router-link :to="{name: 'Mask and Sanitizer'}" :class="unactiveClass" :exact-active-class="activeClass">4</router-link>
      <router-link :to="{name: 'Entertainment'}" :class="unactiveClass" :exact-active-class="activeClass">5</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'bg-green-600 rounded-full w-10 text-center mx-1',
      unactiveClass: 'bg-gray-500 hover:bg-green-600 rounded-full w-10 text-center mx-1',
    }
  },
}
</script>

<style>

</style>