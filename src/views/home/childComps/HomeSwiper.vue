<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }

</script>
<style scoped>

</style>
