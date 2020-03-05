<template>
    <div class="app">
        <Vheader></Vheader>
        <h2>{{ currentMsg }}</h2>
        <!-- webpack里的file-loader工具能把图片看做变量 -->
        <!-- 所以取图片用下面这种方式即可 -->
        <img :src="imgSrc">
        <ul>
            <li v-for = 'item in getArray'>
                <!-- a标签里的href="javascript;"表示阻止a标签的事件，等于a标签失效了 -->
                <a href="javascript;">{{item}}</a>
            </li>
        </ul>
        <!-- 来个点击事件 -->
        <button @click='clickHandler'>修改</button>
        
        <!-- 子父组件传值，第一步就是自定义事件 -->
        <Vcontent v-on:addCunHandler = 'addHandler'></Vcontent>
        <!-- 父子组件传值，第一步就是绑定自定义属性 -->
        <Vfooter :cityArray = 'citys'></Vfooter>
    </div>
</template>

<script>
export default {
  name: 'App'
}

$(function() {
  $('.jj').click(function(){
    alert('123');
  });
});
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
