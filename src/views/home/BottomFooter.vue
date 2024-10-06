<script>
export default {
  name: 'BottomFooter.vue',
  i18nKo: {

  },
  i18nEn: {

  }
}
</script>

<template>
  <footer class="footer-background">
    <div class="footer">
      <div class="left footer-content">
        푸터 왼쪽입니다.
      </div>
      <div class="right footer-content">
        푸터 오른쪽입니다.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-background {
  width: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--color-text);
  max-width: var(--global-width);
}

.footer-content {
  padding: 10px 20px;
}
</style>