<template>
  <div class="recommandView">
    <div v-for="(item,index) in recommends" :key="index" class="recommandViewItem">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {

    },
  }

</script>
<style scoped>
  .recommandView {
    display: flex;
    font-size: 13px;
    text-align: center;
    font-weight: 510;
    border-bottom: 6px solid #eee;
  }

  .recommandViewItem {
    flex: 1;
    padding: 10px 0 20px;
  }

  .recommandViewItem img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

</style>
