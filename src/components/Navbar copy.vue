<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- :text-color="variables.menuText"
    :background-color="variables.menuBg" -->
    <!-- :default-active="activeMenu"  -->
    <template v-for="route in refRoutes">
      <el-menu-item
        :key="route.name"
        :index="route.path"
        :class="route.name === activeName ? 'active' : ''"
        background-color="#545c64"
        text-color="black"
        @click="onActiveMenu(route.name)"
      >
        <!-- <svg-icon :icon-class="(route.meta || {}).icon" /> -->
        {{ route.meta.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: () => ({
    activeName: "",
  }),
  computed: {
    refRoutes({ $router: { options } }) {
      return options.routes[0].children;
    },
  },
  watch: {
    // $route: {
    //   immediate: true,
    //   handler: 'setDefaultActiveMeun',
    // },
  },
  created() {
    console.log(this.$router);
  },
  methods: {
    onActiveMenu(name) {
      console.log(name);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #304156;
  color: #fff;
}
.el-menu--horizontal > .el-menu-item.active {
  border-bottom: 2px solid #e6a23c !important;
  color: #e6a23c !important;
}
.navbar {
  overflow: hidden;
  position: relative;
  padding-right: 30px;
  background: #fff;
  outline: 1px dashed orange;
  height: 100%;

  // border: 0px;
  border-radius: 0px !important;
  float: left;

  li.el-menu-item {
    padding: 0 15px;
    font-size: 14px;
    svg {
      font-size: 15px;
    }
  }
}
</style>

