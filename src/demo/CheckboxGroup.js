const CheckboxGroup = [
  {
    text: "預設自動調整(autoFit)",
    demo: `<TCCheckboxGroup :datas="datas" />`
  },
  {
    text: "設定每排顯示 6 個 checkbox，並顯示全選的 checkbox",
    demo: `<TCCheckboxGroup :datas="datas" indeterminate column="6" />`
  },
  {
    text: "顯示 border",
    demo: `<TCCheckboxGroup :datas="datas" indeterminate border />`
  }
];

export default CheckboxGroup;
