<template>
    <div class="wrap">  
        <div class="t">
        <button @click='addCunHandler'>添加一个村庄</button>
        </div>

        <div class="mark">
            <textarea rows="10" cols="100" class="editor" v-model = 'markValue'></textarea>
            <div class="show" v-html = 'markedValue'></div>
        </div>
    </div>
</template>
<script>
    // npm install marked --save，别人写好的markdown工具，直接解析你的markdown语法
    import Marked from 'marked'
    export default {
        name:'Vcontent', 
        data(){             
            return {
                markValue:''
            }
        },
        methods:{
            // 子组件向父组件传值，第二步就是触发自定义事件
            addCunHandler(){
                // 通过$emit触发自定义事件
                // 参数1：自定义事件的名字
                // 参数2：数据
                this.$emit('addCunHandler','北海北');
            }
        },
        computed:{
            markedValue(){
                return Marked(this.markValue)
            }
        }
    }
</script>
<style scoped>
    .t {
        width: 300px;
        height: 50px;
    }
    .mark{
        width:1210px;
        height: 600px;
        margin: 0 auto;
    }
    .editor,.show{
        float: left;
        width: 603px;
        height: 600px;
        border: 1px solid #666;
    }
</style>