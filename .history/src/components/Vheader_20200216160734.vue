<template>
    <header class="header"> 
        <div class="nav">
            <div class="logo">
                <img :src="imgSrc" />
            </div>
            <div class="info">
                <button>注册</button>
                <button>登陆</button>
            </div>
        </div>
    </header>
</template>
<script>
    import imgSrc from '../assets/logo.png'
    export default {
        name:'Vheader',    
        data(){             
            return {
                imgSrc:imgSrc
            }
        },
    }
</script>
<style scoped>
    .header{
        width: 100%;
        height: 40px;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 #c9c9c9; /* box-shadow是框边的阴影，更有立体感*/ 
    }
    .header .nav{
        width: 980px;
        height: 40px;
        margin: 0 auto;
        /*transparent透明*/
        background-color: transparent;
    }
    .nav .logo{
        width: 100px;
        height: 40px;
        float: left;
    }
    .logo img{
        width: 40px;
        height: 40px;
    }
    .nav .info{
        float: right;
        width: 200px;
        height: 40px;
    }
    .info button{
        width: 80px;
        height: 40px;
        float: left;
        cursor: pointer;
    }
</style>