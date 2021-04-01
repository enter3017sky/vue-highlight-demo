const CheckboxGroup = [
  {
    text: "預設自動調整(autoFit)",
    demo: `<checkbox-group :datas="datas" />`,
    render: (h, { datas }) => <checkbox-group datas={datas} />
  },
  {
    text: "設定每排顯示 6 個 checkbox，並顯示全選的 checkbox",
    demo: `<checkbox-group :datas="datas" indeterminate column="6" />`,
    render: (h, { datas }) => <checkbox-group datas={datas} indeterminate column="6" />
  },
  {
    text: "顯示 border",
    demo: `<checkbox-group :datas="datas" indeterminate border />`,
    render: (h, { datas }) => <checkbox-group datas={datas} indeterminate border />
  }
];

export default CheckboxGroup;
