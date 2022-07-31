<template>
  <div class="cardbyid">
    <h1>Get category by card</h1>
    <h1>{{ names }}</h1>
  </div>
</template>

<script>
import { va } from "../components/HelloWorld.vue";

export default {
  name: "AddCardBy",
  data() {
    return {
      names: "",
    };
  },
  mounted() {
    this.names = va();
    console.log(this.names);
  },
};
</script>
<style>
img {
  height: 270px;
}
</style>
