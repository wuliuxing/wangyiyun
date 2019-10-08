<template>
  <div class="playlist" v-if="playlist">
      <section class="playlist_header" >
          <div class="playlist_header_bg">
          </div>
          <div class="playlist_header_wrap" >
              <div class="img">
                <p class="bg"> 歌单 </p>
                <p>
                  <img src="../assets/music/ico1.png" alt="" height="12px" width="12px"> 
                   <span> {{playlist.playCount | filternum}}</span>
                </p>
                <img :src="playlist.coverImgUrl+'?param=126y126'" alt="">
              </div>
              <div class="txt"> 
                <p class="title">{{playlist.name}}</p>  
                <p class="list_name"> 
                  <img :src="playlist.creator.avatarUrl+'?param=30y30'" alt="">
                  <span>{{playlist.creator.nickname | filterFun}}  </span>  
                </p>
              </div>
          </div>
      </section>
      <section class="playlist_header_txt">
        <div class="label">
           标签 ：<span v-for="(item,index) of expertTags"> {{item}} </span>
        </div>
        <div class="description" >
          <div :class="{'active':isChoose}">简介 ： {{playlist.description}}  </div>
          <i @click="onclick" v-show="!isChoose">∨</i>
          <i @click="onclick" v-show="isChoose">∧</i>
        </div>
      </section>

      <div class="pylst_list">
        <h4>歌曲列表</h4>
        <div class="music_cont">
          <ul>
            <li  v-for="(item,index) of tracks">
             <router-link :to="{name:'playmusic',params:{id:item.id}}">
              <div class="music_index"> {{index+1}} </div>
              <div class="music_title">
                <p class="music_name"> {{item.name}} </p>
                <p class="music_pop">{{item.ar[0].name}}  </p>
              </div>
             </router-link>
           </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      playlist:null,
      tracks:[],
      expertTags:[],
      isChoose : false,//css一开始关闭
      musical:''
    }
  },
  async created(){
    // console.log(this.$route.params.id)
    await this.loadData(this.$route.params.id)
  },
  watch:{
    async $route(){
      // console.log(this.$route.params.id)
      await this.loadData(this.$route.params.id)
    }
  },
  methods:{
    async loadData(id){
      let {data} = await this.axios(`http://localhost:3000/playlist/detail?id=${id}`);
      if(data.err){
        console.log('读取失败')
      }else{
        
        this.playlist = data.playlist; 
        this.tracks=this.playlist.tracks;
        this.expertTags=this.playlist.creator.expertTags;
        this.tracks.forEach((item,index)=>{
          this.musical=this.tracks[index].al
          // console.log(this.musical)
        })
        // console.log(this.tracks)
      }
    },
     // 改变class
    onclick(){
      this.isChoose = !this.isChoose;
    }
  },
    filters: {
      filterFun: function(value) {
        if (value && value.length > 7) {  //字符最大长度
            value = value.substring(0, 7) + "...";  //超过省略
        }
        return value;
      },
      filternum :function(num) {
        let numStr = num.toString();
        if (numStr.length < 6) {
            return numStr;
        }else if(numStr.length>5){
           let decimal = numStr.substring(numStr.length - 1, numStr.length - 4 + num)
            return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
        }
      }
    }
}
</script>

<style scoped>
.playlist{
  width: 100%;
  height: 100%;
}
.playlist_header{
    position: relative;
    padding: 30px 10px 30px 15px;
    overflow: hidden;
}
.playlist_header_bg{
    background: linear-gradient(to right, #000000 , 	#666666);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0px;
    z-index: 1;
}
.playlist_header_wrap{
      display: flex;
    position: relative;
    z-index: 2;
}
.playlist_header_wrap .img{
  position: relative;
}
.playlist_header_wrap .img p{
  position: absolute;
  color: #fff;
  font-size: 0.8rem;
  right: 2px;
}
.playlist_header_wrap .img .bg{
  background: rgba(217,48,48,.8);
  left: 0px;
  width: 40px;
  text-align: center;
  top: 12px;
  padding: 0;
  border-radius: 0px 15px 15px 0px
}
.playlist_header_wrap .txt{
  padding-left: 10px;
  position: relative;
  display: inline;
}
.playlist_header_wrap .title{
  color: #fff;
  font-size: 1.0rem;
}
.playlist_header_wrap .list_name{
  color: hsla(0,0%,100%,.7);
  padding-top: 26px;
  vertical-align: middle;
  font-size: 0.8rem;
}
.playlist_header_wrap .list_name span{
  vertical-align: top;
  display:inline;
  position: relative;
  top: 4px;
  padding-left: 4px;
}
.playlist_header_wrap .list_name img{
  border-radius:50%;
}
.playlist_header_txt{
  font-size: 11px;
  color: #666;
  padding:0 10px;
}
.playlist_header_txt .label{
  padding:10px 0;
}
.playlist_header_txt .label span{
  padding: 0 6px;
}
.playlist_header_txt .description{
  padding: 4px 0;
  font-size: 14px;
  padding-bottom: 20px;
}
.playlist_header_txt .description div{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
-webkit-line-clamp:3;
}
.playlist_header_txt .description i{
  font-size: 16px;
  position: absolute;
  right: 6px;
  color:cornflowerblue;
}
.playlist_header_txt .description .active{
  height: 100%;
  -webkit-line-clamp:100
}
.pylst_list{
  width: 100%;
}
.pylst_list h4{
  background: #ddd;
  color: #666;
  font-size: 0.7rem;
  padding: 2px 16px;
}
.music_cont{
  width: 100%;
  height: auto;
}
.music_cont li{
  width: 100%;
  padding: 0px 10px;
}
.music_cont .music_index{
  height: 100%;
  color: #666;
  font-size: 1.2rem;
  vertical-align: top;
  display: inline-block;
  padding: 14px 0
}
.music_cont .music_title{
    display: inline-block;
    padding: 0 12px;
    vertical-align: top;
    width: 85%;
}
.music_cont .music_name{
  font-size: 1.2rem;
  color: #000;
}
.music_cont .music_pop{
  font-size: 0.8rem;
  color: #666;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
</style>