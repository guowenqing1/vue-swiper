<template>
  <div class='home'>
    <div v-if="swiperList.length" class="slider-wrapper" ref="sliderWrapper">
      <!-- 第一种方案(原生) -->
      <h3>第一种方案(原生)</h3>
      <protogenesis-swiper ref="swiper">
        <protogenesis-swiper-item v-for="item in swiperList" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.imgUrl" alt="">
          </a>
        </protogenesis-swiper-item>
      </protogenesis-swiper>

      <!-- 第二种方案(better-scroll) -->
      <h3 style="margin-top: 30px;">第二种方案(better-scroll)</h3>
      <slider>
        <div v-for="item in swiperList" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.imgUrl" alt="">
          </a>
        </div>
      </slider>

      <!-- 第三种方案(vue-awesome-swiper) -->
      <h3 style="margin-top: 30px;">第三种方案(vue-awesome-swiper)</h3>
      <swiper :list="swiperList"></swiper>

    </div>
  </div>
</template>

<script>
// 第一种方案(原生)
import {
  ProtogenesisSwiper,
  ProtogenesisSwiperItem
} from "../../components/protogenesisSwiper";
// 第二种方案(better-scroll实现)
import Slider from "../../components/slider/Slider";
// 第三种方案(vue-awesome-swiper)
import Swiper from '../../components/swiper/Swiper'

export default {
  name: "Home",
  data() {
    return {
      swiperList: [
        {
          imgUrl: require("../../assets/img/swiper_1.jpg"), // 图片路径
          linkUrl: "", // 跳转路径
          id: "1"
        },
        {
          imgUrl: require("../../assets/img/swiper_2.jpg"), // 图片路径
          linkUrl: "", // 跳转路径
          id: "2"
        },
        {
          imgUrl: require("../../assets/img/swiper_3.jpg"), // 图片路径
          linkUrl: "", // 跳转路径
          id: "3"
        },
        {
          imgUrl: require("../../assets/img/swiper_4.jpg"), // 图片路径
          linkUrl: "", // 跳转路径
          id: "4"
        },
        {
          imgUrl: require("../../assets/img/swiper_5.jpg"), // 图片路径
          linkUrl: "", // 跳转路径
          id: "5"
        }
      ]
    };
  },
  components: {
    ProtogenesisSwiper,
    ProtogenesisSwiperItem,
    Slider,
    Swiper,
  },
  methods: {
    // 启动轮播图(原生实现)
    startTimer() {
      this.$refs.swiper &&
        this.$refs.swiper.startTimer &&
        this.$refs.swiper.startTimer();
    },
    // 停止轮播图(原生实现)
    stopTimer() {
      this.$refs.swiper &&
        this.$refs.swiper.stopTimer &&
        this.$refs.swiper.stopTimer();
    }
  },
  destroyed() {
    // 停止轮播图(原生实现)
    this.stopTimer();
  }
};
</script>

<style lang="stylus" scoped>
.home
  position fixed
  width 100%
  top 0
  bottom 0
.slider-wrapper
  position relative
</style>
