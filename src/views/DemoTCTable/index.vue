<template>
  <div class="TCCheckboxGroup-container">
    <template v-for="item in CheckboxGroup">
      <div class="demo_wrapper" :key="item.text">
        <span class="demo_title">
          {{ item.text }}
        </span>
        <HighLight>
          {{ item.demo }}
        </HighLight>
        <RenderComponent :datas="datas" :render="item.render"></RenderComponent>
      </div>
    </template>
  </div>
</template>

<script>
import HighLight from "@/components/HighLight";
import CheckboxGroup from "@/demo/CheckboxGroup.js";

export default {
  name: "TCCheckboxGroup",
  components: {
    HighLight,

    RenderComponent: {
      functional: true,
      render(h, context) {
        const { render, ...scope } = context.props;
        return render ? render(h, { ...scope }) : "";
      },
    },
  },
  data: () => ({
    CheckboxGroup,
    datas: [
      { id: 0, name: "層級0" },
      { id: 1, name: "層級1" },
      { id: 2, name: "層級2" },
      { id: 3, name: "層級3" },
      { id: 4, name: "層級4" },
      { id: 5, name: "層級5" },
      { id: 6, name: "層級6" },
      { id: 7, name: "層級7" },
      { id: 8, name: "層級8" },
      { id: 9, name: "層級9" },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.demo_wrapper {
  padding-bottom: 30px;
  max-width: 600px;

  .demo_title {
  }
}
</style>
