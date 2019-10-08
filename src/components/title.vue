<template>
    <header id="title">
        <ul>
            <!-- <li v-for="(item,index) in operate" :key="item.id" >
                <router-link :to="{ path: item.path }">
                    <p  :class="{activeSpan:index === num}">
                        <span> {{item.name}} </span>
                    </p>
                </router-link>
            </li> -->
            <li>
                <p class="activeSpan">
                    <span>推荐</span>
                </p>
            </li>
             <li>
                <p >
                    <span>排行</span>
                </p>
            </li>
             <li>
                <p >
                    <span>歌手</span>
                </p>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data(){
        return{
            operate:[
//                 {"name":"推 荐","path":'/recommend'},
//     		     {"name":"排 行","path":'/ranking'},
//     		     {"name":"歌 手","path":'/singer'}
            ],
            // num: 0
        }
    },
     methods: {
        tab(index) {
            this.num = index;
        }
    }
}
</script>

<style scoped>
#title{ width:100%; height:40px; background: white; border-top:1px #fff solid;border-bottom:1px #fff solid; left: 0; bottom:0;background: #e54847;}
#title ul{ display: flex; text-align: center; height:40px; align-items:center;}
#title ul li{ flex:1; height:40px;}
#title ul li.active{ color: #f03d37;}
#title ul li.router-link-active{ color: #f03d37;}
#title ul i{ font-size: 20px;}
#title ul p{ font-size: 15px; line-height: 36px;color: #fff}
.activeSpan span{
    border-bottom: 3px solid #fff;
    padding: 3px 2px;
}
</style>
