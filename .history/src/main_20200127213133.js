// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

// 来关闭生产模式下给出的提示/设置为false以阻止vue启动时生成生成提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// el:'#app'这个和index.html中的app组件挂钩。官网解释为：模板将会替换挂载的元素。
