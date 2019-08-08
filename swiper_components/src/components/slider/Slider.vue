<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        class="dot"
        v-for="(item, index) in dots"
        :key="index"
        :class="{active: currentPageIndex === index}"
      ></span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { addClass } from "./dom.js";
export default {
  name: "Slider",
  props: {
    loop: {
      // 是否无缝循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: {
      // 是否自动轮博
      type: Boolean,
      default: true
    },
    interval: {
      // 轮播的毫秒数
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0 // 控制器默认的下标
    };
  },
  mounted() {
    setTimeout(() => {
      // 设置 slider 的宽度
      this._setSliderWidth();
      // 初始化控制器
      this._initDots();
      // 初始化 slider
      this._initSlider();
      // 判断是否开启了循环轮播
      if (this.autoPlay) {
        this._play();
      }
    }, 20);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
     // 设置 slider 的宽度
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
      }
      if (this.loop) { // 当设置无缝循环轮播的时候, 默认加两张图片的宽度方便滚动
        width += 2 * sliderWidth;
      }
      // 设置轮播图的总宽度
      this.$refs.sliderGroup.style.width = width + "px";
    },
    // 初始化 slider
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true, // 滚动方向为 X 轴
        scrollY: false, // 滚动方向为 Y 轴
        momentum: false, // 当快速滑动时是否开启滑动惯性
        snap: {
          loop: this.loop, // 是否可以无缝循环轮播
          threshold: 0.3, // 用手指滑动时页面可切换的阈值，大于这个阈值可以滑动的下一页
          speed: 400 // 轮播图切换的动画时间
        }, // 该属性是给 slider 组件使用的，普通的列表滚动不需要配置
        click: true // 是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，可以用_constructed，若是bs派发的则为true
      });
      this.slider.on("scrollEnd", () => {
        // 滚动结束
        let pageIndex = this.slider.getCurrentPage().pageX;
        this.currentPageIndex = pageIndex;

        if (this.autoPlay) {
          this._play();
        }
      });
       // 滚动开始之前
      this.slider.on("beforeScrollStart", () => {
        if (this.autoPlay) {
          clearTimeout(this.timer);
        }
      });
    },
    // 初始化控制器
    _initDots() {
      this.dots = new Array(this.children.length);
    },
    // 开始轮播
    _play() {
      let pageIndex = this.currentPageIndex + 1;
      this.timer = setTimeout(() => {
        this.slider.next();
      }, this.interval);
    }
  }
};
</script>

<style lang="stylus" scoped>
.slider
  min-height 1px
.slider-group
  position relative
  overflow hidden
  white-space nowrap
.slider-item
  float left
  box-sizing border-box
  overflow hidden
  text-align center
  a
    display block
    width 100%
    overflow hidden
    text-decoration none
  img
    width 100%
    display block
.dots
  position absolute
  right 0
  left 0
  bottom 12px
  text-align center
  font-size 0
.dot
  display inline-block
  margin 0 4px
  width 8px
  height 8px
  border-radius 50%
  background #fff
  &.active
    width 20px
    border-radius 5px
    background red
</style>
