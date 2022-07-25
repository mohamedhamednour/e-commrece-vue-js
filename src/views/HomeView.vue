<template>
  <div class="home">
    <img
      align="center"
      class="logoimgs"
      alt="Vue logo"
      src="../assets/logo.png"
    />
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
.logoimgs {
  width: 300px;
  height: 150px;
}
</style>
