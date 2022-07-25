<template>
  <div class="hello">
    <div class="container text-center">
      <div class="row">
        <div align="center" className="div">
          <button @click="changeData(this.womens)" className="btn btn-dark">
            women's clothing
          </button>

          <button @click="changeData('men')" className="btn btn-dark">
            men
          </button>
          <button @click="changeData('electronics')" className="btn btn-dark">
            electronics
          </button>
          <button @click="changeData('jewelery')" className="btn btn-dark">
            jewelery
          </button>
        </div>
        <br />
        <br />
        <div
          align="center"
          class="col-12 col-md-6 col-lg-4"
          v-for="fetchs in fetchdata"
          :key="fetchs.id"
        >
          <div class="card" style="width: 18rem">
            <img
              align="center"
              :src="fetchs.image"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>{{ fetchs.price }}</p>
              <router-link class="btn btn-danger" :to="`/page/${fetchs.id}`"
                >Detils</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      fetchdata: null,
      womens: "women's clothing",
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.fetchdata = response.data))
      .catch((error) => console.log(error));
    console.log(this.fetchdata);
  },
  methods: {
    changeData(categ) {
      const changes = this.fetchdata.filter((x) => x.category === categ);
      this.fetchdata = changes;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 200px;
  height: 220px;
  padding: 10px;
  margin: 6px;
  margin-left: 30px;
}
</style>
