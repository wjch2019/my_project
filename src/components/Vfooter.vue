<template>
    <footer class="foot"> 
        <ul v-for = 'item in cityArray'>
            <li>{{item}}</li>
        </ul>
    </footer>
</template>
<script>
    export default {
        name:'Vfooter', 
        data(){             
            return {

            }
        },
        // 父子传值的第二步就是，一定要通过props验证
        // 数组类型就必须写Array，写Str就会报错，对应类型可以查官网，然后就可以在上面用了
        props:{
            cityArray:Array,
        }
    }
</script>
<style>
</style>