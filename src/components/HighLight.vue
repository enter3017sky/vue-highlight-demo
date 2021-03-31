<template>
  <div class="highlight_container">
    <code-highlight language="javascript">
      <slot />
    </code-highlight>
  </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";

import "vue-code-highlight/themes/window.css";

export default {
  name: "ComponentExample",
  components: {
    CodeHighlight,
  },
  props: {
    data: {
      type: String,
      default: "",
    },
  },
  created() {
    // console.log(this.$slots.default);
  },
};
</script>
