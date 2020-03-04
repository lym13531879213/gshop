<template>
   <div>
     <router-view />
      <FooterGuide v-show="$route.meta.showFoot"/>
   </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{FooterGuide}
}
</script>

<style>

</style>