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
 import imgSrc from './assets/logo.png'
    // 子组件渲染到父组件的第一步就是，导入
    import Vheader from './components/Vheader.vue'
    import Vcontent from './components/Vcontent.vue'
    import Vfooter from './components/Vfooter.vue'
    export default {
        name:'App',     
        data(){             
            return {
                msg:'hello world',
                stars:[
                    "nsn","alex",'nezha'
                ],
                imgSrc:imgSrc,
                citys:['沙河','通州','西二旗']
            }
        },
        methods: {
            clickHandler(){
                this.msg = '哈哈哈',
                this.stars.push('anglebaby')
            },
            addHandler(str){
                this.citys.push(str)
            }
        },
        // 所有的属性，都可以被计算属性绑定起来，多用计算属性
        computed: {
            currentMsg(){
                return this.msg;
            },
            getArray(){
                return this.stars
            }
        },
        // 子组件渲染到父组件的第二步就是，挂载
        components:{
            Vheader,
            Vfooter,
            Vcontent
        }
    }
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
