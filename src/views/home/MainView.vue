<script>
import TopNav from '@/views/home/TopNav.vue'
import BottomFooter from '@/views/home/BottomFooter.vue'

export default {
  components: {
    BottomFooter,
    TopNav
  }
}
</script>

<template>
  <div>
    <TopNav />
    <router-view />
    <BottomFooter />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>