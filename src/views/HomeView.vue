<template>
  <div class="home">
    <div align="center">
      <img src="../assets/logo.png" class="d-block" alt="..." />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style>
img {
  width: 80% !important;
  padding: 10px;
}
</style>
