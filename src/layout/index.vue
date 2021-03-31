<template>
  <div class="app-wrapper">
    <template v-for="item in CheckboxGroup">
      <div class="demo_wrapper" :key="item.text">
        <span class="demo_title">
          {{ item.text }}
        </span>
        <HighLight>
          {{ item.demo }}
        </HighLight>
        <div class="1232112" v-html="item.demo"></div>
      </div>
    </template>
  </div>
</template>

<script>
// import RightPanel from "@/components/RightPanel";
// import { AppMain, Navbar, Settings, Sidebar, TagsView } from "./components";
// import ResizeMixin from "./mixin/ResizeHandler";
// import { mapState } from "vuex";
import HighLight from "@/components/HighLight";
import TCCheckboxGroup from "@/components/TCCheckboxGroup";
import CheckboxGroup from "@/demo/CheckboxGroup.js";

export default {
  name: "Layout",
  components: {
    HighLight,
    TCCheckboxGroup,
  },
  data: () => ({
    CheckboxGroup,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.demo_wrapper {
  padding-bottom: 30px;

  .demo_title {
  }
}
</style>
