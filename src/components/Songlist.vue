<template>
    <div class="main">
        <p class="title">
           <span>推荐歌单</span>
        </p>
        <ul>
            <li v-for="item in songlist" :key="item.id">
                 <router-link  :to="{name:'music',params:{id:item.id}}">
                    <p class="img">
                        <a href="">
                            <img :src="item.picUrl" alt="">
                        </a>
                    </p>
                    <p class="txt">
                    {{item.name}}
                    </p>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            songlist:[],
            aa:[]
        }
    },
    mounted(){
        this.axios.get('http://localhost:3000/personalized?limit=6').then((res) => {
        //   console.log(res.playlist)
        //   this.aa = res.playlist
          this.songlist = res.data.result;
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
    width: 33%;
    padding: 0 1%;
    vertical-align: top;
    margin-bottom: 14px;
}
.main .img{
    width: 100%;
    height: 1100%;
}
.main .img img{
    width: 100%;
    height: 100%;
}
.main .txt{
    font-size: 0.7rem;
    padding: 2px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
