<script>
export default {
  name: 'BottomFooter.vue',
  i18nKo: {}

}
</script>

<template>
  <footer>
    <div class="footer-content">
      푸터입니다.
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  color: var(--color-text);
  max-width: var(--global-width);
}
</style>