<template>
  <section class="TCCheckboxGroup_container">
    <el-checkbox
      v-if="indeterminate"
      v-model="checkAll"
      style="margin: 15px 0"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >

    <!-- v-grid-set-span="{ basicWidth: 120 }" -->
    <el-checkbox-group
      v-model="checkList"
      :style="[{ '--column': column }]"
      :class="[
        'checkbox_wrapper',
        {
          auto_fit: !column && autoFit,
          set_cloumn: column,
          set_border: border,
        },
      ]"
      @change="handleCheckedChange"
    >
      <!-- NOTE: el-checkbox 選中的值實際上是 label 綁定的值 -->
      <el-checkbox
        v-for="item in datas"
        :key="item[config.label]"
        :label="item[config.label]"
        >{{ item[config.name] }}</el-checkbox
      >
    </el-checkbox-group>
  </section>
</template>

<script>
/**
 * Example.
 *
 * 預設自動調整(autoFit)
 * <TCCheckboxGroup :datas="datas" />
 *
 * 設定每排顯示 6 個 checkbox，並顯示全選的 checkbox
 * <TCCheckboxGroup :datas="datas" indeterminate column="6" />
 *
 * 顯示 border
 * <TCCheckboxGroup :datas="datas" indeterminate border />
 *
 */

export default {
  name: "TCCheckboxGroup",
  inheritAttrs: false,
  // https://cn.vuejs.org/v2/guide/components-custom-events.html
  model: {
    prop: "checkList",
    event: "change",
  },
  props: {
    // checkbox 的資料
    datas: {
      type: Array,
      default: () => [],
    },

    // key: 勾選 key 的屬性, label: 顯示的名稱
    config: {
      type: Object,
      default: () => ({
        label: "id",
        name: "name",
      }),
    },

    // 是否顯示全選
    indeterminate: {
      type: Boolean,
      default: false,
    },

    // 是否顯示 border
    border: {
      type: Boolean,
      default: false,
    },

    // 是否自動調整欄位
    autoFit: {
      type: Boolean,
      default: true,
    },

    // 每排顯示幾個
    column: {
      default: null,
      validator(value) {
        // 允許值為 Number, String, null
        return value === null || ["number", "string"].includes(typeof value);
      },
    },
  },
  data: () => ({
    checkAll: false,
    isIndeterminate: false,
    checkList: [],
  }),
  computed: {
    allChecked({ datas }) {
      const allChecked = datas.map((data) => data[this.config.label]);
      return allChecked;
    },
  },
  watch: {
    checkList: {
      deep: true,
      handler(list) {
        // 設定組件 v-model, 發送勾選數量
        this.$emit("change", list);
      },
    },
  },
  methods: {
    // 重置狀態
    reset() {
      console.warn(" 已重置 ");
      this.checkAll = false;
      this.isIndeterminate = false;
      this.checkList = [];
    },
    // 控制全選或取消以及半選取消之狀態
    handleCheckAllChange(isCheckAll) {
      this.checkList = isCheckAll ? this.allChecked : [];
      this.isIndeterminate = false;
      // console.log('handleCheckAllChange', isCheckAll, this.allChecked)
    },
    // 處理全選/半選狀態
    handleCheckedChange(value) {
      // console.log('handleCheckedChange', value)
      const checkedCount = value.length;

      this.checkAll = checkedCount === this.allChecked.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.allChecked.length;
    },
  },
};
</script>

<style lang="scss" scoped>

// Preventing double borders in CSS Grid
// ref: https://stackoverflow.com/questions/47882924/preventing-double-borders-in-css-grid
@mixin set_border {
  border-spacing: 0px;

  .el-checkbox {
    box-shadow:0 0 0 1px #ebeef5;
    border-right: none;
    border-bottom: none;
  }
}

.TCCheckboxGroup_container {
  width: 100%;

  > .checkbox_wrapper {
    display: grid;
    grid-gap: 1px;
    grid-auto-flow: dense;

    .el-checkbox {
      margin-right: 0;
      padding: 5px;
    }

      // 自动调整
    &.auto_fit {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

      .el-checkbox {
        --span: 1;
        grid-column: span var(--span);
      }
    }

    // 顯示三排(目前這邊沒使用)
    &.set_cloumn {
      // --column: 3;
      grid-template-columns: repeat(var(--column), 1fr);
    }

    // 顯示三排(目前這邊沒使用)
    &.set_border {
      @include set_border;
    }
  }
}

</style>
