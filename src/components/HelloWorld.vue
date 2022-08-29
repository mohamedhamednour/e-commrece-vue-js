<template>
  <div class="hello">
    <button
      type="button"
      class="btn btn-primary cards"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Card {{ dataid.length }}
    </button>
    <br />

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              product {{ dataid.length }}
            </h5>
            <br />

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div v-for="dataxd in dataid" :key="dataxd.id">
              <h3>
                {{ dataxd.item }} : {{ dataxd.title }} price :{{ dataxd.price }}
              </h3>

              <button class="btn btn-danger" @click="delateitem(dataxd.id)">
                X
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container text-center">
      <div class="row">
        <div align="center" className="div">
          <button @click="changeData('jewelery')" className="btn btn-dark pd">
            jewelery
          </button>
          <button
            @click="changeData('electronics')"
            className="btn btn-dark pd"
          >
            electronics
          </button>
          <button
            @click="changeData(`men's clothing`)"
            className="btn btn-dark pd"
          >
            men's clothing
          </button>
          <button
            @click="changeData(`women's clothing`)"
            className="btn btn-dark pd"
          >
            women's clothing
          </button>
        </div>
        <br />
        <br />
        <div
          align="center"
          class="col-12 col-md-6 col-lg-4"
          v-for="fetchs in filtred"
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
              <button @click="addcard(fetchs)" class="btn btn-info">
                add card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",

  data() {
    return {
      womens: "women's clothing",
      dataid: [],
      files: "hamed",
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.$store.dispatch("user", response.data);
        this.$store.dispatch("filtred", response.data);
      })
      .catch((error) => console.log(error));
    console.log(this.fetchdata);
    this.changeData();
  },
  methods: {
    changeData(categ) {
      this.$store.commit("changedata", categ);
    },
    async delateitem(item) {
      const changes = this.dataid.filter((x) => x.id !== item);
      this.dataid = changes;
    },
    async addcard(idx) {
      // const item = this.fetchdata.find((x) => x.id === idx);
      this.dataid.push(idx);
      console.log(this.dataid);
    },
  },
  computed: {
    ...mapGetters(["user", "filtred"]),
  },
};
export const va = () => console.log(this.$files);
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
  width: 150px;
  height: 150px;
  padding: 10px;
  margin: 6px;
  margin-left: 30px;
}
.cards {
  background-image: url("../assets/shoppig.webp");
  background-repeat: no-repeat;
  background-size: 80px 60px;
  height: 50px;
}
</style>
