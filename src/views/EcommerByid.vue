<template>
  <div class="ecmmerebyid">
    <h1>Get category by id</h1>

    <div align="center" class="col-12">
      <div class="card" style="width: 18rem">
        <img :src="fetchbyid.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ fetchbyid.title }}
          </p>
          <p>{{ fetchbyid.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EcommereBy",
  data() {
    return {
      fetchbyid: "",
      id: "",
    };
  },
  mounted() {
    this.ids = this.$route.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${this.ids}`)
      .then((response) => (this.fetchbyid = response.data))
      .catch((error) => console.log(error));
    console.log("vffccccccc", this.fetchbyid);
  },
};
</script>
<style>
img {
  height: 250px;
}
</style>
