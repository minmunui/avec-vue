<script>
import TopNav from '@/views/home/TopNav.vue'
import BottomFooter from '@/views/home/BottomFooter.vue'

export default {
  components: {
    BottomFooter,
    TopNav
  },
}
</script>

<template>
  <div class="main-view">
    <div class="contents">
      <TopNav />
      <main>
        <router-view />
      </main>
    </div>
    <BottomFooter id="bottom-footer" />
  </div>
</template>

<style scoped>
.main-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: space-between;
}

.contents {
  width: 100%;
}

main {
}
</style>