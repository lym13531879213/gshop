<template>
    <section class="search">
      <HeaderTop title="搜索"></HeaderTop>
      <form action="#" class="search_form">
        <input type="text" name="search" class="search_input" placeholder="请输入商家或美食名称">
        <input type="submit" value="提交" class="search_submit">
      </form>
    </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components:{
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.search  //搜索
  width 100%
  overflow auto
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 75%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 19%
        border 4px solid #02a774
        font-size 16px
        color #fff
        margin-top 3px
        background-color #02a774

</style>