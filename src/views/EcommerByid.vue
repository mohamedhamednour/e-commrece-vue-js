<template>
  <div class="ecmmerebyid">
    <h1>Get category by name</h1>
    <i class="fab fa-firefox-browser"></i>
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-4 inline-block">
          <h2>count</h2>
          <input
            @click="
              () => {
                fetchbyid.price -= 100;
                return fetchbyid.price;
              }
            "
            class="btn btn-danger"
            type="button"
            value="-"
          />
          <input
            @click="
              () => {
                fetchbyid.price += 100;
                return fetchbyid.price;
              }
            "
            class="btn btn-danger"
            type="button"
            value="+"
          />
          <h3>total price : {{ fetchbyid.price }}</h3>
        </div>
        <div
          align="center"
          class="card cardimg-id col-4 col-md-4"
          style="width: 18rem"
        >
          <img :src="fetchbyid.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              {{ fetchbyid.title }}
            </p>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Payment
          </button>

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
                    Vodavone cash : 010000000x
                  </h5>
                  <br />

                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">Paypal</div>
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
      credentials: {
        sandbox:
          "ARey6Qq_Qyw2-WUmM8eiHEQutpkqZqFo6_54Q8ya85YDQH5WahFQoCmnVGmLkZr9DqfxZlHjyRjDtOr-",
        production: "<production client id>",
      },
      experienceOptions: {
        input_fields: {
          no_shipping: 1,
        },
      },
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
  methods: {
    dec() {
      const [...add] = this.fetchbyid.price;
      return add + 1;
    },
  },
};
</script>
<style>
img {
  height: 23px;
}
</style>
