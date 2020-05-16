<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TopToolbar/>
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
