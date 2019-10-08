<template>
  <div v-if="songurl">
      <audio controls>
          <source :src="songurl.url" type="audio/mpeg">
      </audio>
  </div>
</template>

<script>
export default {
    data(){
        return{
            songurl:null
        }
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
            let {data} =await this.axios(`http://localhost:3000/song/url?id=${id}`);
            if(data.err){
                console.log('读取失败')
            }else {
                this.songurl=data.data[0];
                console.log(this.songurl.url)
            }
        }
    }
}
</script>

<style>

</style>