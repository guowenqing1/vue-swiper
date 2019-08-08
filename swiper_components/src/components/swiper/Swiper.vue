<template>
  <div>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(img, index) of list" :key="index" ref="mySwiper">
          <img class="swiper-img" :src="img.imgUrl" alt="img.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, //手动滑动后可以自动滑动
          delay: 2500
        },
        loop: true, // 无缝轮播
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped>
/* 设置分页器未选中的样式 */
.wrapper >>> .swiper-pagination-bullet
  box-sizing border-box
  width 8px
  height 8px
  border-radius 4px
  background-color #fff
  line-height 8px
  text-align center
  font-size 12px
  margin 0 5px
/* 设置分页器选中的样式 */
.wrapper >>> .swiper-pagination-bullet-active
  width 20px
  border-radius 5px
  background-color rgba(212, 62, 46, 1)
.wrapper
  width 100%
  overflow hidden
  background #eee
  .swiper-img
    width 100%
</style>
