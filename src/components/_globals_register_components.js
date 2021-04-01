
import Vue from 'vue'

console.log('componentName')
/**
 * 將常用的組件全局註冊
 * 目標為 components 底下的 TC 開頭的組件
 */

// 搜尋當前的資料夾, 查看子目录, 僅包含 TC 開頭的 index.vue 檔案
const requireComponent = require.context('.', true, /.vue$/)

console.log(requireComponent.keys())
// requireComponent.keys() => ["./TCTable/index.vue"]
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  // set './HighLight.vue' => 'HighLight'
  const componentName = fileName.replace(/^\.\/(.*).vue$/, '$1')

  // toKebabCase
  // componentName = componentName
  //   .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  //   .map(x => x.toLowerCase())
  //   .join('-');

  console.log(componentName)

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
