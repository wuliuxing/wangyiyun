<template>
    <div class="main">
        <p class="title">
           <span>最新热歌</span>
        </p>

        <ul>
            <li v-for="item in newsong" :key="item.id">
                <h4> {{item.name}}  </h4>
                <!-- <span >{{item.song.artists.name}} </span> -->
                <img src="../assets/music/hot.png" alt="" > <span>{{item.song.artists.name}} </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newsong:{},
            song:{},
            aa:{}
        }
    },
    created(){
        this.axios.get('http://localhost:3000/personalized/newsong').then((res) => {
          this.newsong = res.data.result;
        }).catch((errot) => {
            console.log('读取失败')
        })
         
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100%;
}
.title{
    padding: 6px 6px;
}
.title span{
    font-size: 1.0rem;
    font-weight: 600;
}
.main ul li{
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 6px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}
.main ul h4{
    font-weight: 500;
    font-size: 1.1rem;
    white-space: nowrap; /* 内容超出容器宽度时强制不换行 */
    overflow: hidden;/* 内容超出容器时隐藏超出部分 */
    text-overflow: ellipsis; 
}
.main ul span{
    font-size: 1.0rem;
    color: #888;
    padding-left: 4px;
}
.main ul img{
    width: 12px;
    height: 12px;
}
</style>


