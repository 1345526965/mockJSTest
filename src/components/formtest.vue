<template>
  <div>
    123132
     <input type="text" v-model="inputvalue" placeholder="请输入">
     <!-- <button @click="init">清除缓存</button> -->
  </div>
</template>

<script>

  export default {
    name: "form",
    beforeRouteEnter(to,from,next){
      // to.meta['fromPath'] = from.path
      //  console.log('路由守卫')
      if(from.path === '/'){
        // console.log('---来自跟--')
        to.meta.isFlas = false
        
        // to.meta.isFlas = false
        // location.reload();
      }else{
        // console.log('---来自其他--')
        // to.meta['refresh'] = false
      }
       next()
    },
    activated(){
          let self = this
           console.log('被刷新',this.$route.meta.isFlas)
          if(!this.$route.meta.isFlas){
            console.log('----inputvalue-----',self.inputvalue)
            // this.$route.meta.isFlas = false
           
            // self.init()
            self.inputvalue = ''
          }
          // console.log('数据缓存时被调用')
    },
    beforeRouteLeave(to,from,next){
         if(to.path === '/test'){
           from.meta.isFlas = true
         }
         next()
    },

    data() {
      return {
         inputvalue:''
      }
    },
    
    methods: {
      clearFlash(){
             
      },
       init(){
        //  location.reload()
        console.log('刷新')
         this.$route.meta.isFlas = false
         this.$nextTick(()=>{
           this.$route.meta.isFlas = true
         })
       }
    }
  }
</script>
<style scoped>
</style>
