<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <HomeSwiper :banner="banner" />
    <RecommandView  :recommends="recommends" />

  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommandView from './childComps/RecommandView'

  import {
    getHomeMultidata
  } from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommends: []
      }
    },
    async created() {
      const {
        data: res
      } = await getHomeMultidata();
      console.log(res);
      this.banner = res.banner.list;
      this.recommends = res.recommend.list;
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommandView
    }
  }

</script>
<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: aliceblue
  }

</style>
