<template>
  <div class="Home-container">
    <main class="home">
      <header class="hero">
        <h1 id="main-title">组件使用手册</h1>
      </header>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.home .hero .action,
.home .hero .description,
.home .hero h1 {
  margin: 1.8rem auto;
}
.home .hero h1 {
  font-size: 3rem;
}
.home .hero .action-button:hover {
  background-color: #4abf8a;
}
.home .hero .action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>
