<template>
  <div :class="darks ? 'dark' : 'whites'">
    <div class="dark:bg-dark">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <router-link class="nav-link" to="/">Vue js</router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/" exact
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <button
                      class="dropdown-item"
                      @click="changeData('electronics')"
                    >
                      electronics
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      @click="changeData(`men's clothing`)"
                    >
                      men's clothing
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      @click="changeData(`jewelery`)"
                    >
                      jewelery
                    </button>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/sign-up"
                  >Sign up</router-link
                >
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button @click="darkss()" class="btn btn-dark">dark</button>
            <button
              @click="whitel()"
              class="btn btn-praimary border-x-cyan-600"
            >
              white
            </button>
          </div>
        </div>
      </nav>
      <router-view />
      <br />
      <FooterName />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import FooterName from "@/components/FooterName.vue";
export default {
  name: "app",
  components: {
    FooterName,
  },
  data() {
    return {
      darks: false,
    };
  },
  methods: {
    changeData(categ) {
      this.$store.commit("changedata", categ);
    },
    darkss() {
      this.darks = true;
    },
    whitel() {
      this.darks = false;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
