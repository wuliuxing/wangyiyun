<template>
  <div>
    <Header/>
    <Title/>
    <Songlist/>
    <Insong/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Title from '@/components/title.vue'
import Songlist from '@/components/Songlist.vue'
import Insong from '@/components/Insong.vue'
export default {
  components:{
    Insong,
    Songlist,
    Header,
    Title
  }

}
</script>

<style>

</style>