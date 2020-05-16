<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TopToolbar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopToolbar from '@/components/TopToolbar.vue';

export default {
  name: 'Home',
  components: {
    TopToolbar,
  },
};
</script>
