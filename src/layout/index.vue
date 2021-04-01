<template>
  <div class="app-wrapper">
    <section class="col-2 is-scrollable navbar">
      <navbar></navbar>
    </section>
    <section class="main_container is-scrollable">
      <header class="main_header">
        <div class="main_title">{{ $route.meta.title }}</div>
      </header>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {},
  data: () => ({}),
  computed: {},
  created() {
    console.log("this.$route: ", this.$route);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  min-width: 960px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  display: flex;

  > section {
    height: inherit;
    overflow: hidden;
    &.is-scrollable {
      overflow: auto;
    }
  }
}

.main_container {
  display: grid;
  place-items: center;
  width: 83%;

  > div {
    padding-bottom: 50px;
  }
}

.main_header {
  height: 100px;
  display: grid;
  place-items: center;

  .main_title {
    font-size: 2rem;
  }
}

.main > section {
  height: inherit;
  overflow: hidden;
}
.navbar {
  width: 16.66667%;
  min-width: 140px;
  padding-left: 0;
}
.navbar-toggle-container {
  display: none;
}

@media screen and (max-width: 768px) {
  .app-wrapper {
    min-width: 0;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .demo {
    display: none;
  }
  .main_container {
    width: 100%;
    padding: 45px 10px 0;
  }
  .navbar {
    left: 0;
    margin-left: -60%;
    margin-right: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: opacity 0.3s;
    width: 60%;
    z-index: 10;
    min-width: auto;
    padding: 0;
  }
  .slide-in-left {
    transform: translate3d(60%, 0, 0);
    .navbar {
      opacity: 1;
    }
  }
  .navbar-toggle-container {
    box-sizing: border-box;
    display: block;
    position: fixed;
    padding-left: 10px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #26a2ff;
    z-index: 10;
  }
  .navbar-toggle {
    display: block;
    background-color: #26a2ff;
    border-radius: 4px;
    border: 1px solid #fff;
    height: 35px;
    margin: 10px 0;
    padding: 2px 6px;
    outline: none;
    width: 35px;
    z-index: 10;
    span {
      display: block;
      width: 100%;
      height: 2px;
      margin: 4px auto;
      background-color: #fff;
    }
  }
}
</style>
