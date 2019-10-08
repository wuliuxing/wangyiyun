<template>
  <div v-if="songs" class="playmusic">
      <div class="playmusic_img">
        <img ref="img" :src="songs.al.picUrl+'?param=200y200'" alt="">
        <!-- <button @click="onimg">点我</button> -->
      </div>
       <Audiourl/>
  </div>
</template>

<script>
import Audiourl from '@/components/Audiourl.vue'
export default {
  data(){
    return{
      songs:null,
      rotateVal : 0, // 旋转角度
      timer :0, // 定时器
      imgs:''
    }
  },
  components:{
    Audiourl
  },
  async created(){
    // console.log(this.$route.params.id)
    await this.loadData(this.$route.params.id)
  },
  watch:{
    async $route(){
      await this.loadData(this.$route.params.id)
    }
  },
  methods:{
    async loadData(id){
      let {data} = await this.axios(`http://localhost:3000/song/detail?ids=${id}`);
      if(data.err){
        console.log('读取失败')
      }else {
        this.songs=data.songs[0];
      }
    },
    onimg(){
        this.timer = setInterval(()=>{
          this.imgs = this.$refs.img;
          this.rotateVal += 1;
          this.imgs.style.transform = 'rotate(' + this.rotateVal + 'deg)'
          this.imgs.style.transition = '0.1s linear'
          //  console.log(this.imgs)
        },80)
      }
  }
}
</script>

<style>
.playmusic{
  width: 100%;
  height: 100%;
  background: #666;
  padding: 0;
  margin: 0 ;
  color: #fff;
  transform: translate(0px, 0px);
  box-sizing: border-box;
  /* position: absolute; */
  top: 0;
  bottom: 0;
}
.playmusic_img{
   width: 100%;
  padding-top: 70px;
  text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 320px;
    overflow: hidden;
}
.playmusic_img img{
  border-radius: 50%;
  border: #000 solid 50px;
}
</style>